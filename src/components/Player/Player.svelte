<script>
  import { snapshots, store } from '../../store/store'
  import Actions from './Actions/Actions.svelte';
  import Snapshots from './Snapshots/Snapshots.svelte';

  // === PROPS === //
  export let src;

  // === VIDEO ELEMENT BINDINGS === //
  let currentTime = 0;
	let duration;
	let paused = true;
  let playbackRate = 1.0;

  // === APP VARS === //
  let startTimeSlice = 0;
  let endTimeSlice = 0;
  let markerA = 0;
  let markerB = 0;


  // === REACTIVE === //
  $: rangeOffset = markerA;
  $: rangeLength = (639 + markerB) - markerA;

  let currentId;
  let items = [];
  snapshots.subscribe(state => {
    items = state.items;
    if (currentId !== state.currentId) {
      currentId = state.currentId;
      console.log({item:state.items, currentId});
      const item = state.items.find(i => i.id === state.currentId);
      if (!item) return;
      onChangeSnapshot(item);
    }
  })

  //-------------------------------------------------------------------------------------------------------------------
  // STORE ACTIONS
  //-------------------------------------------------------------------------------------------------------------------
  function onStore() {
    const already = items.some(i => (
      i.startTimeSlice === startTimeSlice && 
      i.endTimeSlice === endTimeSlice && 
      i.playbackRate === playbackRate
    ));

    if (already) return;

    store({
      startTimeSlice,
      endTimeSlice,
      playbackRate,
      markerA,
      markerB
    })
  }

  function onChangeSnapshot(item) {
    startTimeSlice = item.startTimeSlice;
    endTimeSlice = item.endTimeSlice;
    markerA = item.markerA;
    markerB = item.markerB;
    playbackRate = item.playbackRate;
    currentTime = item.startTimeSlice;
  }

  //-------------------------------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  //-------------------------------------------------------------------------------------------------------------------
  function onWindowKeyDown() {
  }

  function onWindowKeyUp(e) {
    switch (e.code) {
      case 'Space': {
        paused = !paused;
        break;
      }
    }
  } 

  function onVideoLoadedData(e) {
    endTimeSlice = duration;
  }

  function onVideoTimeUpdate() {
    if (currentTime > endTimeSlice) {
      currentTime = startTimeSlice;
    }
  }

  function onVideoPlaying(e) {
    console.log(e)
  }

  function onVideoPlayPause(e) {
    paused = !paused
  }

  function onProgressClick(e) {
    const nextCurrentTime = (duration / 640) * e.offsetX;
    if (nextCurrentTime > endTimeSlice) return;
    paused = false;
    currentTime = nextCurrentTime;
  }

  function onDragMarkerA(e) {
    markerA = e.detail.offsetX
    startTimeSlice = (duration / 640) * markerA;
  }

  function onDragMarkerB(e) {
    markerB = e.detail.offsetX;
    endTimeSlice = (duration / 640) * (639 + markerB);
  }

  function onChangePlaybackRate(v) {
    playbackRate = v;
  }

  
</script>

<style>
  .player {
    display: block;
  }

  .player__video {
    display: flex;
    justify-content: center;
    min-height: 360px;
    min-width: 640px;
    position: relative;
  }

  .video {
    position: relative;
    max-width: 640px;
    max-height: 360px;
  }

  .video video {
    width: 100%;
  }

</style>

<svelte:window on:keydown={onWindowKeyDown} on:keyup={onWindowKeyUp} />

<div class="player">
  <div class="player__video">
    <div class="video">
      <video
        {src}
        bind:duration
        bind:currentTime={currentTime}
        bind:paused
        bind:playbackRate
        on:click={onVideoPlayPause}
        on:timeupdate={onVideoTimeUpdate}
        on:playing={onVideoPlaying}
        on:loadeddata|once={onVideoLoadedData}
      >
        <track kind="captions" >
      </video>
      <Actions 
        {duration}
        {currentTime}
        {onProgressClick}
        {rangeLength}
        {rangeOffset}
        {paused}
        {onVideoPlayPause}
        {onChangePlaybackRate}
        {playbackRate}
        {markerA}
        {markerB}
        {onDragMarkerA}
        {onDragMarkerB}  
        {onStore}
      />
    </div>
  </div>
  <Snapshots />
</div>
