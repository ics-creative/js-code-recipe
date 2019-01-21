document.querySelector('.textarea').addEventListener('keydown', () => {
  console.log('キーが押された');
});
document.querySelector('.textarea').addEventListener('keypress', () => {
  console.log('文字が入力された');
});
document.querySelector('.textarea').addEventListener('keyup', () => {
  console.log('キーが離された');
});
