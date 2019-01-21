const box = document.querySelector('.box');

box.addEventListener('dragenter', () => {
  console.log('dragenterイベント');
});

box.addEventListener('dragover', () => {
  console.log('dragoverイベント');
});

box.addEventListener('dragleave', () => {
  console.log('dragleaveイベント');
});
