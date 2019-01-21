// ウインドウ上でスクロールする毎に「スクロール」と座標が出力される
window.addEventListener('scroll', () => {
  console.log('スクロール', window.scrollX, window.scrollY);
});
