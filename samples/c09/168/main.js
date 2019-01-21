const element = document.querySelector('#myFile');
const pEl = document.querySelector('.log');

// ファイル選択ダイアログが選択されたら
element.addEventListener('input', (event) => {
  const target = event.target;
  // 選択されたファイルを参照
  const files = target.files;
  // 配列になってるので、0番目のファイルを参照
  const file = files[0];

  // FileReaderのインスタンスを作成
  const reader = new FileReader();
  // 読み込み終わったら
  reader.addEventListener('load', () => {
    // 結果をp要素に出力する
    pEl.textContent = reader.result;
  });
  // テキストファイルとして読み込む
  reader.readAsText(file);
});
