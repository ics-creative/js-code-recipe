const date = new Date();
const hour = date.getHours(); // 時間
const minutes = date.getMinutes(); // 分
const seconds = date.getSeconds(); // 秒

const label = `${hour}時${minutes}分${seconds}秒`;

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = `現時刻は${label}です`;
