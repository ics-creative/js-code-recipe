// 要素の class 指定の切り替え
document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (element.classList.contains('state-show') === true) {
    element.classList.remove('state-show');
  } else {
    element.classList.add('state-show');
  }
});

const element = document.querySelector('.rect');
element.addEventListener('transitionend', (event) => {
  document.querySelector('.log').innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
});
