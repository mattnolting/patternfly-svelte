<script lang='ts'>
  import { setContext } from 'svelte';
  import Table from '$components/Table/Table.svelte';
  import TableBody from '$components/Table/TableBody.svelte';
  import { defaultStates } from '$props/defaultStates.svelte.ts';
  export const cardState = $state({
    ...defaultStates
  });

  setContext('card', cardState);
</script>
<Table>
  Table content
</Table>
<TableBody>
  Table body content
</TableBody>