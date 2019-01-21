// DOMにアクセスできるタイミングで処理を実行する
window.addEventListener('DOMContentLoaded', () => {
  // .box要素の数を取得する
  const boxNum = document.querySelectorAll('.box').length;
  // ログを出力
  console.log(`.box要素の数は${boxNum}です`);
});
