const date = new Date();
const day = date.getDay();
const dayList = ['日', '月', '火', '水', '木', '金', '土'];
const label = dayList[day];

// HTMLに表示
document.querySelector('#log').innerHTML = `今日は${label}曜日です`;
