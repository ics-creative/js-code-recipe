const section = document.querySelector('.localStorage'); // 親要素を取得
const btnClear = section.querySelector('.btnClear'); // ボタン要素を取得
const btnRemove = section.querySelector('.btnRemove'); // ボタン要素を取得
const btnSave = section.querySelector('.btnSave'); // ボタン要素を取得
const input = section.querySelector('input'); // テキスト入力欄の要素

// 「保存する」ボタンをクリックしたとき
btnSave.addEventListener('click', () => {
  // テキスト入力欄の文字列を取得
  const data = input.value;

  // ローカルストレージに保存
  localStorage.setItem('myKey1', data);
  localStorage.setItem('myKey2', data);
});

// 「削除する」ボタンをクリックしたとき
btnRemove.addEventListener('click', () => {
  // ローカルストレージから削除する
  localStorage.removeItem('myKey1');
});

// 「クリアする」ボタンをクリックしたとき
btnClear.addEventListener('click', () => {
  // クリアする
  localStorage.clear();
});
