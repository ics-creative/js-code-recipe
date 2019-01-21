// a要素を一括取得する
const aElementList = document.querySelectorAll('a');

// 各a要素について処理する
aElementList.forEach((element) => {
  // aタグにtarget属性が存在しなかったらreturn
  if (element.hasAttribute('target') === false) {
    return;
  }

  // target属性_blankではなかったらreturn
  if (element.getAttribute('target') !== '_blank') {
    return;
  }

  // rel属性にnoopenerを付与する
  element.setAttribute('rel', 'noopener');
});
