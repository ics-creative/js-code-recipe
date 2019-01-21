// 真偽値の基本
const a = 10;
const b = 20;

console.log(a < b); // 結果：true
console.log(a > b); // 結果：false

// iOSかどうかの判定
const isIOs = navigator.userAgent.includes('iPhone');

if (isIOs) {
  // iOS用の処理
}

// 「こんにちは鈴木さん」とアラートが表示される
const userName = '鈴木';
if (userName) {
  alert(`こんにちは${userName}さん`);
}
// addressが''なので、アラートは表示されない
const address = '';
if (address) {
  console.log(`あなたは${address}に住んでいますね？`);
}
