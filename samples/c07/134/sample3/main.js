const box = document.querySelector('.box');

// dragoverイベントの無効化
box.addEventListener('dragover', (event) => {
  event.preventDefault();
});

box.addEventListener('drop', () => {
  console.log('dropイベント');
});
