// input要素の参照
const element = document.querySelector('#myRange');
// 変更イベントを監視
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 現在の値を取得
  const value = event.target.value;

  // 画面に表示
  document.querySelector('.log').innerHTML = `現在の値は ${value} です`;
}
