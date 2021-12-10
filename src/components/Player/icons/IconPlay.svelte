<script>
  export let paused;
  export let onVideoPlayPause;
</script>

<style>
  .play {
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 12px;;
    color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 24px;
    justify-content: center;
    min-width: 24px;
    position: relative;
    /* width: 1px;
    height: 1px;
    border-left: solid 16px #fff;
    border-right: solid 16px transparent;
    border-top: solid 12px transparent;
    border-bottom: solid 12px transparent;
     */
  }
  .playIcon {

  }
</style>
<button class="play" on:click={onVideoPlayPause}>
  <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="playIcon">
    {#if paused}
      <path d="M4.018 14L14.41 8 4.018 2z"></path>
	  {:else}
      <path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
	  {/if}
  </svg>
</button>