<script>
  import { snapshots } from "../../../store/store"

  let items = [];

  snapshots.subscribe((state) => {
    items = state.items.filter(i => i.id === state.currentId);
  });
</script>
<style>
  .grids {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .grid__limiter {
    position: relative;
    width: 640px;
  }

  .grid {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #141111;
  }

  /* .grid.selected {
    background-color: var(--primary);
    z-index: 1;
  } */
</style>

<div class="grids">
  <div class="grid__limiter">
    {#each items as item}
      <div class="grid" style="transform: translate3d({item.markerA+1}px,0,0);"></div>
      <div class="grid" style="transform: translate3d({(639 + item.markerB)}px,0,0);"></div>
    {/each}
  </div>
</div>