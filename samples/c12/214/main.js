// キャンバス要素の参照を取得
const canvas = document.querySelector('#my-canvas');
// コンテキストを取得
const context = canvas.getContext('2d');
// Imageインスタンスを作成
const img = new Image();
// 画像読み込み後の処理
img.onload = () => {
  // コンテキストを通してcanvasに描く
  context.drawImage(img, 0, 0);
};
// 画像を読み込みを開始する
img.src = 'sample.jpg';

// マウスが動いたとき
canvas.addEventListener('mousemove', (event) => {
  // マウスの座標を取得
  const x = event.layerX;
  const y = event.layerY;
  // ImageDataを取得
  const imageData = context.getImageData(x, y, 1, 1);
  // 画素配列を取得
  const data = imageData.data;
  const r = data[0]; // 赤
  const g = data[1]; // 緑
  const b = data[2]; // 青
  const a = data[3]; // アルファ
  // 文字列として色情報を扱う
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;

  const el = document.querySelector('.log');
  // 背景色に指定
  el.style.background = color;
  // 文字として指定
  el.textContent = color;
});
