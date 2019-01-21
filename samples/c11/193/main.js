// 保存用にMapを用意
const srcMap = new Map();
window.addEventListener('DOMContentLoaded', () => {
  // img要素を一括で参照
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    // 各img要素のdata-src属性をMapに保存
    srcMap.set(img, img.dataset.src);
    // 遅延読み込みのため空にしておく
    img.removeAttribute('src');
  });
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  // img要素を一括で参照
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    // 保存していたMapからsrcを割り当てる
    const source = srcMap.get(img);
    img.src = source;
  });
});
