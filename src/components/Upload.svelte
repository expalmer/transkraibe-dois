<script>
  export let handleUpload;
</script>
<style>
  .upload {
    background-color: #ddd;
  }
</style>
<div class="upload">
  <label for="input-file">Upload a mp4</label>
  <input type="file" id="input-file" accept="video/mp4" on:change={handleUpload}/>
</div>