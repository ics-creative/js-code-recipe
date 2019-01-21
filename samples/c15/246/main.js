const btnRead = document.querySelector('.btnRead'); // ボタン要素を取得
const btnSave = document.querySelector('.btnSave'); // ボタン要素を取得

// 「保存する」ボタンをクリックしたとき
btnSave.addEventListener('click', () => {
  // クッキーを保存する（代入しているが、それぞれが保存できる）
  document.cookie = 'id=1';
  document.cookie = 'age=30';
  document.cookie = `name=${encodeURIComponent('山田')}`;
});

// 「読み出す」ボタンをクリックしたとき
btnRead.addEventListener('click', () => {
  // クッキーを読み出す
  alert(document.cookie);
});
