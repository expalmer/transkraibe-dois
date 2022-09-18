<script>
  import Remote from './components/Remote.svelte';
  import Player from './components/Player/Player.svelte';

  // const getAudioBuffer = async (video) => {
  // 	const AudioContext =
  //   window.AudioContext ||
  //   window.webkitAudioContext ||
  //   window.mozAudioContext ||
  //   window.oAudioContext;
  // 	const audioContext = new AudioContext();
  // 	const response = await fetch(video);
  // 	const audioData = await response.arrayBuffer();
  // 	return new Promise((resolve, reject) => {
  // 		audioContext.decodeAudioData(
  // 			audioData,
  // 			(buffer) => {
  // 				resolve(buffer);
  // 			},
  // 			(err) => {
  // 				reject(err);
  // 			}
  // 		);
  // 	});
  // }

  // let src = 'https://expalmer.s3.us-east-1.amazonaws.com/video/EXPLORER_360P.mp4';
  let src = '';

  const handleVideo = (video) => {
    src = video;
  };
</script>

{#if src}
  <Player {src} />
{:else}
  <Remote {handleVideo} />
{/if}
