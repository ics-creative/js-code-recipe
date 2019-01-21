const section = document.querySelector('.localStorage'); // 親要素を取得
const btnRead = section.querySelector('.btnRead'); // ボタン要素を取得
const btnSave = section.querySelector('.btnSave'); // ボタン要素を取得
const input = section.querySelector('input'); // テキスト入力欄の要素

// 「保存する」ボタンをクリックしたとき
btnSave.addEventListener('click', () => {
  // テキスト入力欄の文字列を取得
  const data = input.value;

  // ローカルストレージに保存
  localStorage.setItem('myKey', data);
});

// 「読み出す」ボタンをクリックしたとき
btnRead.addEventListener('click', () => {
  // ローカルストレージから読み出す
  const data = localStorage.getItem('myKey');

  // テキスト入力欄の文字列に代入
  input.value = data;
});
