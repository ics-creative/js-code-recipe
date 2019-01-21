// 参照を取得
const numA = document.querySelector('#numA');
const numB = document.querySelector('#numB');
const result = document.querySelector('.result');
const btn = document.querySelector('button');

// ワーカーを作成
const worker = new Worker('worker.js');

// ボタンをクリックしたとき
btn.addEventListener('click', () => {
  worker.postMessage([Number(numA.value), Number(numB.value)]);
  console.log('[メインスクリプト] ワーカーへメッセージを送信');
});

// ワーカーから受信したとき
worker.onmessage = function(e) {
  // 結果を画面に表示
  result.textContent = e.data;
  console.log('[メインスクリプト] ワーカーからメッセージを受信');
};
