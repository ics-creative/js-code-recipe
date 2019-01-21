window.addEventListener('focus', () => {
  document.querySelector('#log').innerHTML = 'フォーカスがあたっている';
});

window.addEventListener('blur', () => {
  document.querySelector('#log').innerHTML = 'フォーカスがはずれている';
});
