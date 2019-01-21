const video = document.querySelector('#myVideo');

document.querySelector('#btnPlay').addEventListener('click', () => {
  video.play();
});
document.querySelector('#btnPause').addEventListener('click', () => {
  video.pause();
});
