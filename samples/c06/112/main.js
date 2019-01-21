// オンラインであるかの真偽値
const isOnline = navigator.onLine;
if (isOnline === true) {
  console.log('オンラインです');
} else {
  console.log('ネットワークにつながっていません');
}

// オンラインになったら呼び出されるイベント
window.addEventListener('online', () => {
  console.log('オンラインです');
});

// オフラインになったら呼び出されるイベント
window.addEventListener('offline', () => {
  console.log('️ネットワークにつながっていません');
});

// オンラインであるかの真偽値
if (isOnline === true) {
  log('オンラインです');
} else {
  log('ネットワークにつながっていません');
}

// オンラインになったら呼び出されるイベント
window.addEventListener('online', () => {
  log('📶オンラインです');
});

// オフラインになったら呼び出されるイベント
window.addEventListener('offline', () => {
  log('❎️ネットワークにつながっていません');
});

function log(message) {
  document.querySelector('.log').innerHTML = message;
}
