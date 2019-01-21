const date = new Date();

const locale = date.toLocaleString(); // 例: '2018/8/29 16:15:34'
const localeDate = date.toLocaleDateString(); // 例: '2018/8/29'
const localeTime = date.toLocaleTimeString(); // 例: '16:15:34'

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = `${locale}<br />
   ${localeDate}<br />
   ${localeTime}`;
