const container = document.querySelector('.container');
const myBox1 = document.querySelector('#myBox1');
const myBox2 = document.querySelector('#myBox2');
const box2 = document.querySelector('#box2');

// 3秒後に#myBox1要素を.containerの先頭に追加する
setTimeout(() => {
  container.insertBefore(myBox1, container.firstElementChild);
}, 3000);

// 4秒後に#myBox2要素を#box2要素の前に追加する
setTimeout(() => {
  container.insertBefore(myBox2, box2);
}, 4000);
