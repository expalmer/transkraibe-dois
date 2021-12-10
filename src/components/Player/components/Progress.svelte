<script>
  export let value;
  export let onClick;
</script>

<style>
  ::-webkit-progress-bar {
    background-color: rgb(32, 26, 32);
    opacity: 0.7;
  }

  ::-webkit-progress-value {
    background-color: var(--primary);
    transition: ease-out .1s all;
  }

  .progress {
    padding-top: 8px;
    padding-bottom: 8px;
    /* backdrop-filter: blur(10px); */
  }

  .progress__item {
		width: 100%;
    display: block;
		height: 6px;
		-webkit-appearance: none;
		appearance: none;
  }
</style>
 
<div class="progress" on:click={onClick}>
  <progress
    value="{value}"
    class="progress__item"
  />
</div>

