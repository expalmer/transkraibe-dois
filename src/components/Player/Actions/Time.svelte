<script>
  import { format } from '../../../utils/utils'
  export let currentTime;
  export let duration;
</script>
<style>
  .time {

  }
  .time span {
    line-height: 47px;
    font-size: 109%;
    white-space: nowrap;
    font-size: 12px;
  }
</style>
<div class="time">
  <span>{format(currentTime)}</span>
  <span> / </span>
  <span>{format(duration)}</span>
</div>