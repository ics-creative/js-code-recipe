// 今日の日付を取得
const today = new Date();

// #main内に、HTMLコードを動的に書き出す
document.querySelector('#main').innerHTML = `
  <h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
  <p>東京は、晴れでしょう</p>
`;
