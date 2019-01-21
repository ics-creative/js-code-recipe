// キャンバス要素の参照を取得
const canvas1 = document.querySelector('#canvas-original');
// コンテキストを取得
const context1 = canvas1.getContext('2d');
// Imageインスタンスを作成
const img = new Image();
// 画像読み込み後の処理
img.onload = () => {
  // コンテキストを通してcanvasに描く
  context1.drawImage(img, 0, 0);

  // 画素情報を得る
  const imageData = context1.getImageData(0, 0, 150, 150);
  const data = imageData.data;

  const monoImageData = new ImageData(150, 150);

  const monoArr = monoImageData.data;
  for (let i = 0; i < data.length / 4; i += 1) {
    // 画素情報を取得
    const r = data[i * 4 + 0];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    // 平均値を求める（簡易的な計算のため）
    const color = (r + g + b) / 3;

    // 新しい配列に色を指定
    monoArr[i * 4 + 0] = color;
    monoArr[i * 4 + 1] = color;
    monoArr[i * 4 + 2] = color;
    monoArr[i * 4 + 3] = a;
  }

  // キャンバス要素の参照を取得
  const canvas2 = document.querySelector('#canvas-effected');
  // コンテキストを取得
  const context2 = canvas2.getContext('2d');
  // コンテキストに新しい画素情報を割り当てる
  context2.putImageData(monoImageData, 0, 0);
};
// 画像を読み込みを開始する
img.src = 'sample.jpg';

const btnDownload = document.querySelector('#btnDownload');
btnDownload.addEventListener('click', () => {
  // キャンバス要素の参照を取得
  const canvas2 = document.querySelector('#canvas-effected');

  // ファイルの種類とファイル名を指定
  const mimeType = 'image/png';
  const fileName = 'download.png';

  // Base64文字列を取得
  const base64 = canvas2.toDataURL(mimeType);

  // Base64文字列からUint8Arrayに変換
  const bin = atob(base64.replace(/^.*,/, ''));
  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }

  // Blobを作成
  const blob = new Blob([buffer.buffer], {
    type: mimeType
  });

  // 画像をダウンロードする
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
    // for Other
    window.open(base64, '_blank');
  }
});
