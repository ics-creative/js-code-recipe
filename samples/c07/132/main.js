const boxElement = document.querySelector('#myBox');

boxElement.addEventListener('click', () => {
  boxElement.innerHTML = 'クリックされました';
});

setTimeout(() => {
  boxElement.dispatchEvent(new Event('click'));
}, 1000);
