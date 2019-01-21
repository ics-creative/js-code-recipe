// マウスストーカーの要素を取得
const el = document.querySelector('.stoker');

// マウス座標
let mouseX = 0;
let mouseY = 0;
// ストーカーの座標
let currentX = 0;
let currentY = 0;
// マウス移動時
document.body.addEventListener('mousemove', (event) => {
  // マウス座標を保存
  mouseX = event.clientX;
  mouseY = event.clientY;
});

tick();
function tick() {
  // アニメーションフレームを指定
  requestAnimationFrame(tick);

  // マウス座標を遅延してストーカーの座標へ反映する
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  // ストーカーの要素へ反映
  el.style.transform = `translate(${currentX}px, ${currentY}px)`;
}
