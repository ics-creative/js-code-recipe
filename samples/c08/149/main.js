setTimeout(() => {
  // #myBox要素を子ノードも含めて複製
  const clonedBox = document.querySelector('#myBox').cloneNode(true);
  document.querySelector('.container').appendChild(clonedBox);
}, 3000);
