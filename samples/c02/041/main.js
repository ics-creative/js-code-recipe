/** 秒用エレメント */
const secondElement = document.querySelector('.second');

// 15秒後をゴールにする
const goalTime = new Date().getTime() + 15 * 1000;

update();

/** 毎フレーム実行される関数 */
function update() {
  // 現在時刻
  const currentTime = new Date().getTime();

  // 目標時刻までの残り時間
  const leftTime = goalTime - currentTime;

  // 残り時間が0秒未満だったら、タイマーを停止する
  if (leftTime <= 0) {
    secondElement.innerText = '15秒経ちました';
    return;
  }

  // 秒の表示。小数点（ミリ秒は2桁まで）
  secondElement.innerText = (leftTime / 1000).toFixed(2);

  // 次のフレームで再度update()を実行する
  requestAnimationFrame(update);
}
