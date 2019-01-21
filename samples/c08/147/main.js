// 3秒後に処理を行う
setTimeout(() => {
  const childElement = document.querySelector('#child');
  // #child要素を取り除く
  childElement.remove();
}, 3000);
