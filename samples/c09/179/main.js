// form要素の参照
const formElement = document.querySelector('form');
// 送信イベントを監視
formElement.addEventListener('submit', handleSubmit);

// 送信イベント発生時
function handleSubmit(event) {
  // confirmでユーザーに確認する
  const isYes = confirm('この内容で送信していいですか？');

  // 「いいえ」を選択した場合
  if (isYes === false) {
    // 挙動をキャンセル
    event.preventDefault();
  }
}
