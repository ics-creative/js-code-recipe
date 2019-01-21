const date = new Date();
const month = date.getMonth() + 1; // 月
const day = date.getDate(); // 日
const label = `${month}月${day}日`; // 日付表記

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = `今日は${label}です`;
