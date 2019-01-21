// タッチエリア
const targetBox = document.querySelector('.box');
// ログ
const log = document.querySelector('.log');

// 画面上でタッチ位置を移動したら、ログを表示
targetBox.addEventListener('touchmove', () => {
  const touch = event.changedTouches;

  log.innerHTML = `
   ${touch[0].pageX.toFixed(2)}<br>
   ${touch[0].pageY.toFixed(2)}
  `;
});
