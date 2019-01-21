const container = document.querySelector('.container');
// 挿入する.new-box要素
const newBox = `<div class="new-box box">.new-box要素</div>`;

setTimeout(() => {
// .container要素内先頭に.new-box要素を追加する
  container.insertAdjacentHTML('afterbegin', newBox);
// .container要素の直後に.new-box要素を追加する
  container.insertAdjacentHTML('afterend', newBox);
}, 3000);
