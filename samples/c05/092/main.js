const totalTime = 10000; // 10秒
const oldTime = Date.now();

const timerId = setInterval(() => {
  const currentTime = Date.now();
  // 差分を求める
  const diff = currentTime - oldTime;

  // 残りミリ秒を計算する
  const remainMSec = totalTime - diff;
  // ミリ秒を整数の秒数に変換する
  const remainSec = Math.ceil(remainMSec / 1000);

  let label = `残り${remainSec}秒`;

  // 0秒以下になったら
  if (remainMSec <= 0) {
    // タイマーを終了する
    clearInterval(timerId);

    // タイマー終了の文言を表示
    label = '終了';
  }

  // 画面に表示する
  document.querySelector('#log').innerHTML = label;
}, 1000);
