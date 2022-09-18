<script>
  export let handleVideo;
  const files = [
    {
      value:
        'https://expalmer.s3.us-east-1.amazonaws.com/video/charlie-puth-we-cont-talk-anymore.mp4',
      label: 'Charlie Puth - We dont talk anymore',
    },
    {
      value: 'https://expalmer.s3.us-east-1.amazonaws.com/video/EXPLORER_360P.mp4',
      label: 'Asato - Explorer',
    },
    {
      value: 'https://expalmer.s3.us-east-1.amazonaws.com/video/Fireflies-OwlCity.mp4',
      label: 'Asato - Fireflies Owl City',
    },
    {
      value: 'https://expalmer.s3.us-east-1.amazonaws.com/video/jean-stil-1.mp4',
      label: 'Jean Stil',
    },
    {
      value:
        'https://expalmer.s3.us-east-1.amazonaws.com/video/Mateus%20Asato%20Live%20In%20Singapore%202019.mp4',
      label: 'Asato - Tell me why',
    },
    {
      value:
        'https://expalmer.s3.us-east-1.amazonaws.com/video/SnapInsta_270091390_3129857940593914_1585741968958779798_n.mp4',
      label: 'SnapInsta',
    },
    { value: 'https://expalmer.s3.us-east-1.amazonaws.com/video/so.mp3', label: 'So' },
    {
      value:
        'https://expalmer.s3.us-east-1.amazonaws.com/video/somebody-else-1975-jam-%20mateus-asato.mp4',
      label: 'Asato - Somebody Else 1975',
    },
  ];

  const handleSubmit = (e) => {
    handleVideo(e.target.value);
  };
</script>

<div class="remote">
  <select on:change={handleSubmit}>
    <option value="">-</option>
    {#each files as file}
      <option value={file.value}>
        {file.label}
      </option>
    {/each}
  </select>
</div>

<style>
  .remote {
    margin: auto;
    padding: 40px;
    background-color: #ddd;
    text-align: center;
  }
</style>
