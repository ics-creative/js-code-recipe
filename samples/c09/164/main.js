// textareaの参照
const element = document.querySelector('#myText');
// イベントを登録
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 値を取得
  const value = event.target.value;

  // 改行コードを改行タグに変換
  const htmlStr = value.split('\n').join('<br />');
  document.querySelector('.log').innerHTML = htmlStr;
}
