<script>
  export let onChangePlaybackRate;
  export let playbackRate;
  const SPEEDS = [0.3, 0.5, 0.7, 0.9, 1];
</script>

<style>
  .speeds {
    display: flex;
    align-items: center;
  }

  .speed {
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    border:none;
    border-radius: 0;
    margin-right: -1px;
  }

  .speed:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  .speed:last-of-type {
    border-radius: 0 4px 4px 0;
  }

  .speed.selected {
    color: var(--primary);
    transform: scale(1.1);
    font-weight: 600;
  }
</style>

<div class="speeds">
  {#each SPEEDS as value}
    <button
      class="speed speed-{value}"
      class:selected={playbackRate === value}
      on:click={() => onChangePlaybackRate(value)}
    >{value}</button>
  {/each}
</div>

