const audio = document.querySelector('#myAudio');
audio.addEventListener('loadedmetadata', () => {
  console.log(audio.duration); // 音声の長さ(秒)
});

document.querySelector('#btnPlay').addEventListener('click', () => {
  audio.play();
});
document.querySelector('#btnPause').addEventListener('click', () => {
  audio.pause();
});
