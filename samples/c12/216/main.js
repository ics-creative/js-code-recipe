// キャンバス要素の参照を取得
const canvas = document.querySelector('#my-canvas');
// コンテキストを取得
const context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 100);
context.fillStyle = 'green';
context.fillRect(25, 25, 50, 50);

// Base64の文字列を得る
const data = canvas.toDataURL();
console.log(data);

// img要素に代入する
const img = document.querySelector('#my-img');
img.src = data;
