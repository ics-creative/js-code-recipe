// ボタンの参照
const btn = document.querySelector('button');

// ボタンをクリックしたとき
btn.addEventListener('click', (event) => {
  // コンファームを表示
  const isYes = confirm('天気は晴れていますか？');
  // ユーザーが入力した結果を画面に表示
  document.querySelector('.log').innerHTML = isYes;
});
