const myCircle = document.querySelector('#myCircle');
let time = 0;

animate();

function animate() {
  // 時間で変化
  time += 0.1;
  // 色を変化
  myCircle.style.fill = `hsl(0, 100%, ${time}%)`;

  // 目標値に達するまで繰り返す
  if (time < 50) {
    requestAnimationFrame(animate);
  }
}
