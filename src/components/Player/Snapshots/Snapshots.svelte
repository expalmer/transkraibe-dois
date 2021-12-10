<script>
  import { format } from '../../../utils/utils'
  import { snapshots, selectCurrentId, destroy } from '../../../store/store'
  import Progress from '../components/Progress.svelte' 

  let items = [];
  let currentId = 0;
  snapshots.subscribe(state => {
    items = state.items;
    currentId = state.currentId;
  });

</script>

<style>
  .snapshots {
    margin: 0 auto;
    max-width: 640px;
    padding: 24px;
  }

  .snapshots__item {
    position: relative;
    border-bottom: solid 1px #141113;
    margin-bottom: 12px;
    cursor: pointer;
    opacity: .5;
    color: #423f42;
    padding: 12px 0;
  }

  .selected.snapshots__item {
    color: #fff;
    opacity: 1;
  }

  .snapshots__item__time {
    line-height: 16px;
    font-size: 109%;
    white-space: nowrap;
    font-size: 11px;
    
  }

  .snapshots__delete {
    position: absolute;
    top: 27px;
    right: -24px;
    opacity: 0;
    color: var(--primary);
    font-size: 18px;
  }

  .snapshots__item:hover .snapshots__delete {
    opacity: 1;
  }
</style>

<div class="snapshots">
  {#each items as item}
    <div
      on:click={() => selectCurrentId(item.id)}
      class="snapshots__item"
      class:selected={item.id === currentId}
    >
      <div style="width: {(639 + item.markerB) - item.markerA}px; transform: translate3d({item.markerA}px, 0, 0);">
        <div class="snapshots__item__time">
          <span>{format(item.startTimeSlice)}</span>
          <span> / </span>
          <span>{format(item.endTimeSlice)}</span>
          <span>&bull;</span>
          <span>{item.playbackRate}</span>
        </div>  
        <Progress value={1} />
      </div>
      <span class="snapshots__delete" on:click|stopPropagation={() => destroy(item.id)}>&times;</span>
    </div>
  {/each}
</div>