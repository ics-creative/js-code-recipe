// input要素を参照
const element = document.querySelector('#myFile');

// ファイル選択ダイアログが選択されたら
element.addEventListener('change', (event) => {
  const target = event.target;
  // 選択されたファイルを参照
  const files = target.files;
  // 配列になってるので、0番目のファイルを参照
  const file = files[0];

  // ユーザーが選択したファイル名を表示
  alert(`${file.name}が選択されました`);
});
