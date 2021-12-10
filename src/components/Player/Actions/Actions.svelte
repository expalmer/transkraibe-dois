<script>
  import Progress from '../components/Progress.svelte';
  import IconPlay from '../icons/IconPlay.svelte'
  import IconPlus from '../icons/IconPlus.svelte'
  
  import Markers from './Markers.svelte'
  import Speed from './Speed.svelte'
  import Time from './Time.svelte'

  export let duration;
  export let currentTime;
  export let onProgressClick;
  export let rangeLength;
  export let rangeOffset;
  export let paused;
  export let onVideoPlayPause;
  export let onChangePlaybackRate;
  export let playbackRate;
  export let markerA;
  export let markerB;
  export let onDragMarkerA;
  export let onDragMarkerB;

  export let onStore;

</script>
<style>
  .actions {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(21, 17, 24, 0.5);
  }

  .action__row {
    display: grid;
    grid-template-columns: 42px 72px 1fr 42px;
    column-gap: 12px;
    justify-content: flex-start;
  }
  
  .action__col {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px; 
  }

  .action__col--icon {
    height: 42px;
  }

  .action__progress {
    position: relative;
    /* background-color: tomato; */
  }
</style>

<div class="actions">
  <div class="action__row">
    <div class="action__col action__col--icon">
      <IconPlay {paused} {onVideoPlayPause} />
    </div>
    <div class="action__col">
      <Time {currentTime} {duration} />
    </div>
    <div class="action__col">
      <Speed {onChangePlaybackRate} {playbackRate} />
    </div>
    <div class="action__col action__col--icon" on:click={onStore}>
      <IconPlus />
    </div>
  </div>
  <div class="action__progress">
    <Progress
      onClick={onProgressClick}
      value={(currentTime / duration) || 0}
    />
    <Markers {markerA} {markerB} {rangeLength} {rangeOffset} {onDragMarkerA} {onDragMarkerB} />
  </div>
</div>