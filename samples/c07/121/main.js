document.querySelector('.box').addEventListener('mouseover', () => {
  log('.box要素にマウスが乗った');
});

document.querySelector('.inner').addEventListener('mouseover', () => {
  log('.inner要素にマウスが乗った');
});

function log(message) {
  console.log(message);
}
