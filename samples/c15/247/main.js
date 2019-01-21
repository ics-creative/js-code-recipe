const btnRead = document.querySelector('.btnRead'); // ボタン要素を取得
const btnSave = document.querySelector('.btnSave'); // ボタン要素を取得

// 「保存する」ボタンをクリックしたとき
btnSave.addEventListener('click', () => {
  // クッキーを保存する
  document.cookie = 'id=1';
  document.cookie = 'age=30';
  document.cookie = `name=${encodeURIComponent('山田')}`;
});

// 「読み出す」ボタンをクリックしたとき
btnRead.addEventListener('click', () => {
  // クッキーを読み出す
  const obj = convertCookieToObject(document.cookie);
  console.log(obj); // コンソールに出力

  document.querySelector('#log').innerHTML =
    JSON.stringify(obj, null, '  ');
});

/**
 * クッキーをObjectに変換します。
 * @param cookies クッキー文字列
 * @return 連想配列
 */
function convertCookieToObject(cookies) {
  const cookieItems = cookies.split(';');

  const obj = {};
  cookieItems.forEach((item) => {
    // 「=」で分解
    var elem = item.split('=');
    // キーを取得
    const key = elem[0].trim();
    // バリューを取得
    const val = decodeURIComponent(elem[1]);
    // 保存
    obj[key] = val;
  });
  return obj;
}
