const date = new Date();
// 日時を設定
date.setFullYear(2015);
date.setMonth(0);
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = date.toLocaleString();
