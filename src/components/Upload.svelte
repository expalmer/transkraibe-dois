<script>
  export let handleVideo;

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const selectedVideoUrl = URL.createObjectURL(selectedFile);

      handleVideo(selectedVideoUrl);

      // getAudioBuffer(selectedVideoUrl).then(buffer => {
      // 	console.log('buffer', buffer)
      // 	src = buffer;
      // })
    }
  };
</script>

<div class="upload">
  <label for="input-file">Upload a mp4</label>
  <input type="file" id="input-file" accept="video/mp4" on:change={handleUpload} />
</div>

<style>
  .upload {
    background-color: #ddd;
  }
</style>
