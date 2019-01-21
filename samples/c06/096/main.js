// ボタンの参照
const btn = document.querySelector('button');
// ボタンをクリックしたとき
btn.addEventListener('click', (event) => {
  const text = prompt('今日の天気は？', '');
  // ユーザーが入力した文字列を画面に表示
  document.querySelector('.log').innerHTML = text;
});
