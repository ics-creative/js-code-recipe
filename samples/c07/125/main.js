// タッチイベントをキャッチするボックス
const targetBox = document.querySelector('.box');
// ログのエリア
const logArea = document.querySelector('.log');

// 画面上でタッチ開始したら、対象内にログを表示
targetBox.addEventListener('touchstart', () => {
  logArea.innerHTML = 'タッチ開始';
});

// 画面上でタッチ位置を移動したら、ログを表示
targetBox.addEventListener('touchmove', () => {
  logArea.innerHTML = 'タッチ位置移動';
});

// 画面上でタッチ位置を移動したら、ログを表示
targetBox.addEventListener('touchend', () => {
  logArea.innerHTML = 'タッチ終了';
});
