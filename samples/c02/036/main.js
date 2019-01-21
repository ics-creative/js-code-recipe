/** 姓の入力欄 */
const familyNameText = document.querySelector('#familyNameText');

/** 名前の入力欄 */
const firstNameText = document.querySelector('#firstNameText');

/** 姓名 */
const fullName = document.querySelector('#fullName');

// 文字を入力する度にonKeyUp()を実行する
firstNameText.addEventListener('keyup', onKeyUp);
familyNameText.addEventListener('keyup', onKeyUp);

/** 文字が入力される度に実行される関数 */
function onKeyUp() {
  // 姓
  const familyName = familyNameText.value;

  // 名
  const firstName = firstNameText.value;

  // フルネームを出力
  fullName.innerHTML = familyName + ' ' + firstName;

  // 次のように記述しても可
  // fullName.innerHTML = `${familyName} ${firstName}`;
}
