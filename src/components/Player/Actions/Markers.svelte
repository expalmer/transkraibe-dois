<script>
  import { draggable } from 'svelte-drag';

  export let markerA;
  export let markerB;
  export let onDragMarkerA;
  export let onDragMarkerB;
  // export let rangeLength;
  // export let rangeOffset;

</script>

<style>
  .marker {
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background: transparent;
    transition: ease-out .1s transform;
    cursor: pointer;
  }

  .marker::after {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 12px;
    height: 100%;
    background: #fff;
  }

  .marker::before {
    content: "";
    position: absolute;
    bottom: 5px;
    display: block;
    width: 1px;
    height: 12px;
    background: #fff;
  }

  .marker--a {
    left: 0;
  }

  .marker--a::after {
    left: -14px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
  }

  .marker--b {
    right: 0;
  }
  
  .marker--b::after {
    right: -14px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
</style>

<div class="markers">
  <!-- <div class="range" style="width: {rangeLength}px; transform: translateX({rangeOffset}px);"></div> -->
  <div 
    class="marker marker--a"
    use:draggable={{ axis: 'x', position: { x: markerA, y: 0 }, bounds: 'parent' }}
    on:svelte-drag={onDragMarkerA}></div>
  <div
    class="marker marker--b"
    use:draggable={{ axis: 'x', position: { x: markerB, y: 0 }, bounds: 'parent' }}
    on:svelte-drag={onDragMarkerB}></div>
</div>