const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');

// .name-inputに文字を入力するたびに処理を実行する
nameInput.addEventListener('input', () => {
  // 入力された文字を取得する
  const inputStr = nameInput.value;
  // 入力された文字を小文字に変換する
  const normalStr = inputStr.toLowerCase();
  // 文字に「test」が含まれていれば警告を表示する
  if (normalStr.includes('test') === true) {
    warningMessage.textContent = '「test」が含まれてます';
  } else {
    warningMessage.textContent = '';
  }
});
