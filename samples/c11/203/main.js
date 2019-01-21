let stream;

async function loadAndPlay() {
  const video = document.getElementById('myVideo');
  stream = await getDeviceStream({
    video: { width: 640, height: 320 },
    audio: false
  });
  video.srcObject = stream;
}

function stop() {
  const video = document.getElementById('myVideo');
  const tracks = stream.getTracks();

  tracks.forEach((track) => {
    track.stop();
  });

  video.srcObject = null;
}

function getDeviceStream(option) {
  if ('getUserMedia' in navigator.mediaDevices) {
    return navigator.mediaDevices.getUserMedia(option);
  } else {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(option, resolve, reject);
    });
  }
}
