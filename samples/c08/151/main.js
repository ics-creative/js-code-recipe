setTimeout(() => {
  // 旧ボックス要素
  const oldBox = document.querySelector('.old-box');
  // 新ボックス要素。div要素を作り、「新ボックス」というテキストノードを追加する
  const newBox = document.createElement('div');
  newBox.textContent = '新ボックス';
  // new-box, boxというCSSクラスを追加する
  newBox.classList.add('new-box', 'box');
  // 新旧ボックスを入れ替える
  oldBox.replaceWith(newBox);
}, 3000);
