// チェックボックスの参照
const cb = document.querySelector('#cbA');
cb.addEventListener('change', (event) => {
  // 選択状態を確認する
  const value = event.target.checked;

  // 画面に表示する
  const log = `チェックボックスAは ${value} になりました`;
  document.querySelector('.log').innerHTML = log;
});
