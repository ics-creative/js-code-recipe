// #submitButtonをクリックしたときの処理を設定
document.querySelector('#submitButton').addEventListener('click', (event) => {
  // 電話番号を取得
  const phoneNumber = document.querySelector('#phoneNumberText').value;

  // 電話番号に「-」が含まれている場合は、''（空文字）に置き換える
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  // 09012345678
  alert(`電話番号は${trimmedPhoneNumber}です`);

  // ボタンのデフォルトの挙動をキャンセル
  event.preventDefault();
});
