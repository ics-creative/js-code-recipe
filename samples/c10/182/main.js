document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (element.classList.contains('state-show') === true) {
    element.classList.remove('state-show');
  } else {
    element.classList.add('state-show');
  }
});

const targetEl = document.querySelector('.rect');
targetEl.addEventListener('animationstart', (event) => {
  document.querySelector('.log').innerHTML = 'animationstart 発生 : ' + new Date().toLocaleTimeString();
});
targetEl.addEventListener('animationiteration', (event) => {
  document.querySelector('.log').innerHTML = 'animationiteration 発生 : ' + new Date().toLocaleTimeString();
});
targetEl.addEventListener('animationend', (event) => {
  document.querySelector('.log').innerHTML = 'animationend 発生 : ' + new Date().toLocaleTimeString();
});
