// 保存ボタンをクリックしたときの処理
document.querySelector('#btnSave').addEventListener('click', saveFile);

// ファイルとして保存
function saveFile() {
  // ファイル名
  const fileName = `mySvg.svg`;
  // SVG要素を取得
  const content = document.querySelector('#mySvg').outerHTML;
  // データを準備
  const dataUrl = 'data:image/svg+xml,\n' + encodeURIComponent(content);

  // BOMの文字化け対策
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, content], { type: 'text/plain' });

  if (window.navigator.msSaveBlob) {
    // for IE
    window.navigator.msSaveBlob(blob, fileName);
  } else if (window.URL && window.URL.createObjectURL) {
    // for Firefox, Chrome, Safari
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    // for Safari
    window.open(dataUrl, '_blank');
  }
}
