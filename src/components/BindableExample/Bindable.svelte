<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts';

	let {
		tag = 'button',
		children,
		...props
	} = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
  this={tag}
  class="test"
  aria-pressed="{isClicked}"
  onclick={handleClick}
  {...props}>
	<select multiple bind:value={fillings}>
		<option value="Rice">Rice</option>
		<option value="Beans">Beans</option>
		<option value="Cheese">Cheese</option>
		<option value="Guac (extra)">Guac (extra)</option>
	</select>
	<span>{fillings}</span>
</svelte:element>
