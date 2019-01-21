const weatherElement = document.querySelector('#weather');

// 3秒後に#weatherの中身を書き換える
setTimeout(() => {
  weatherElement.innerHTML = '気温は<strong>-3℃</strong>の予想です。';
}, 3000);
