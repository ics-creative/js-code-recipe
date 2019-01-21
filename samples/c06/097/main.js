window.addEventListener('resize', resizeHandler);

function resizeHandler(event) {
  // 新しい画面幅
  const w = innerWidth;
  // 新しい画面高さ
  const h = innerHeight;

  document.querySelector('.value-width').innerHTML = `横幅は ${w}px です`;
  document.querySelector('.value-height').innerHTML = `高さは ${h}px です`;
}
