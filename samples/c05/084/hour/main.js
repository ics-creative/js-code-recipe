const date = new Date();
const hour = date.getHours();
let meridiem; // 午前か午後か
let hour2; // 時刻
if (hour < 12) {
  meridiem = '午前';
  hour2 = hour;
} else {
  meridiem = '午後';
  hour2 = hour - 12;
}

const label = `${meridiem}${hour2}時`;

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = `現時刻は${label}です`;
