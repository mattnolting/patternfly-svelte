import { existsSync, mkdirSync, writeFileSync, copyFileSync, readFileSync, rmSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, parse, relative, dirname } from 'node:path';
import * as sass from 'sass';
import glob from 'fast-glob';
// import { compile } from 'svelte/compiler';

async function cleanupPreviousBuild(directories) {
  await Promise.all(directories.map(async (dir) => {
    if (existsSync(dir)) {
      console.log(`Cleaning up ${dir}`);
      await rmSync(dir, { recursive: true, force: true });
    }
  }));
}

const directories = {
  sassUtilities: 'sass-utilities',
  utilities: 'src/utilities',
  base: 'src/',
  layout: 'src/layouts',
}

async function processScssFiles(sourceDir, outDir, distDir) {
  const scssFiles = await glob('**/*.scss', {
    cwd: sourceDir,
    absolute: true
  });

  const customImporter = [
    {
      findFileUrl(url) {
        const patterns = [
          // { pattern: '@sass-utilities', path: 'src/styles/sass-utilities/_index.scss' },
          { pattern: '/base', path: 'src/styles/base/_index.scss' },
          { pattern: './layouts', path: 'src/layouts/_index.scss' }
        ];

        const match = patterns.find(({ pattern }) => url.startsWith(pattern));
        if (match) {
          return new URL(`file://${join(process.cwd(), match.path)}`);
        }

        return null;
      }
    }
  ];

  await Promise.all(scssFiles.map(async (scssFile) => {
    const relativePath = relative(sourceDir, scssFile);
    const parsedPath = parse(relativePath);
    const targetDir = join(distDir, dirname(relativePath));

    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    copyFileSync(scssFile, join(targetDir, parsedPath.base));

    if (relativePath.includes('sass-utilities/') ||
      relativePath.includes('assets/') ||
      parsedPath.name.startsWith('_')) {
      return;
    }

    try {
      const result = sass.compile(scssFile, {
        importers: customImporter,
        loadPaths: [
          sourceDir,
          join(process.cwd(), 'src'),
          join(process.cwd(), 'src/styles'),
          join(process.cwd(), 'src/base'),
          join(process.cwd(), 'src/layouts'),
          join(process.cwd(), 'src/styles/sass-utilities'),
          dirname(scssFile)
        ],
        style: 'compressed'
      });

      writeFileSync(join(targetDir, `${parsedPath.name}.css`), result.css);
    } catch (error) {
      console.error(`Error compiling SCSS for ${relativePath}:`, error);
    }
  }));
}

async function processStructure(sourceDir, outDir) {
  const sections = ['components', 'layouts'];

  await Promise.all(sections.map(async (section) => {
    const sectionPath = join(sourceDir, section);
    const outputPath = join(outDir, section);

    if (!existsSync(sectionPath)) return;

    const entries = await readdir(sectionPath, { withFileTypes: true });
    await Promise.all(entries.map(async (entry) => {
      if (!entry.isDirectory()) return;

      const itemPath = join(sectionPath, entry.name);
      const itemOutputPath = join(outputPath, entry.name);

      mkdirSync(itemOutputPath, { recursive: true });

      const files = await readdir(itemPath);
      await Promise.all(files.map(async (file) => {
        const filePath = join(itemPath, file);
        const fileInfo = parse(file);

        if (file.endsWith('.svelte')) {
          try {
            // Dynamically import the Svelte component
            const module = await import(filePath);
            const Component = module.default;

            // Basic render with no props
            const { html } = Component.render();

            writeFileSync(join(itemOutputPath, `${fileInfo.name}.html`), html);
          } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
          }
        }
      }));
    }));
  }));
}

const adapterCustomStatic = (options = {}) => {
  return {
    name: 'adapter-custom-static',
    async adapt(builder) {
      const outDir = options.outDir || 'build';
      const sourceDir = options.sourceDir || 'src';
      const distDir = options.distDir || 'dist';

      console.log(outDir, sourceDir, distDir);

      const directories = [
        outDir,
        distDir,
        join(outDir, 'assets'),
        join(outDir, 'components'),
        join(outDir, 'layouts')
      ];

      await cleanupPreviousBuild(directories);

      await Promise.all(directories.map(async (dir) => {
        mkdirSync(dir, { recursive: true });
      }));

      await processScssFiles(sourceDir, outDir, distDir);
      await processStructure(sourceDir, outDir);

      console.log('Build completed:');
      console.log(`- Distribution files: ${distDir}`);
      console.log(`- Public files: ${outDir}`);
    }
  };
};

export { adapterCustomStatic as default };