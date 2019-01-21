// 3秒後に処理を行う
setTimeout(() => {
  const parentElement = document.querySelector('#parent');
  const childElement = document.querySelector('#child');
  // #child要素を取り除く
  parentElement.removeChild(childElement);
}, 3000);
