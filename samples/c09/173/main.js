// select要素の参照
const element = document.querySelector('#mySelect');
// 変更イベントを監視
element.addEventListener('change', handleChange);

function handleChange(event) {
  // 値を取得
  const value = element.value;

  // 整形して画面に表示
  const log = `選択されているのは ${value} です`;
  document.querySelector('.log').innerHTML = log;
}
