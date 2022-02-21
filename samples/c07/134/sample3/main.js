const box = document.querySelector('.box');

// dragoverイベントの無効化
box.addEventListener('dragover', (event) => {
  event.preventDefault();
});

box.addEventListener('drop', (event) => {
  console.log('dropイベント');
  event.preventDefault();
});

// コードレシピ集での解説があやまっていたため修正しています。
// ドロップをキャンセルするには、dragover イベントに対してだけではなく、
// drop イベントに対しても event.preventDefault() を実行する必要があります。
