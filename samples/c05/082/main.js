const date = new Date();
const year = date.getFullYear(); // 年

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = `今年は西暦${year}年です`;
