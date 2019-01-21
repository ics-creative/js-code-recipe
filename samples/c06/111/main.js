const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  // フルスクリーンにする
  myReqeustFullScreen(document.body);
});

function myReqeustFullScreen(element) {
  if (element.requestFullscreen) {
    // 標準仕様
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Safari, Chrome
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    // IE11+
    element.msRequestFullscreen();
  }
}

const btnExit = document.querySelector('#btnExit');
btnExit.addEventListener('click', (event) => {
  // フルスクリーンを解除する
  myCancelFullScreen();
});

function myCancelFullScreen() {
  if (document.exitFullscreen) {
    // 標準仕様
    document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
    // Safari, Chrome
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    // IE 11+
    document.msExitFullscreen();
  }
}
