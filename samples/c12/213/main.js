// キャンバス要素の参照を取得
const canvas = document.querySelector('#my-canvas');
// コンテキストを取得
const context = canvas.getContext('2d');
// 塗りの色を指定
context.fillStyle = 'red';
// 矩形を描く
context.fillRect(0, 0, 100, 100);

// 画素情報を得る
const imageData = context.getImageData(0, 0, 100, 100);
console.log(imageData.data); // 画素配列
