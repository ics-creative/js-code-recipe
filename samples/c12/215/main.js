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
