document.querySelector('.box').addEventListener('mouseenter', () => {
  log('.box要素にマウスが乗った');
});

document.querySelector('.inner').addEventListener('mouseenter', () => {
  log('.inner要素にマウスが乗った');
});

function log(message) {
  console.log(message);
}
