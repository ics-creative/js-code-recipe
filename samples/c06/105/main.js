// ハッシュ変更のイベントを監視
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
  // 変更後のハッシュの値
  const hash = location.hash;
  document.querySelector('.log').innerHTML = `現在のアンカーは「${hash}」です`;
}
