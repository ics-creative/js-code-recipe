// idキーとnameキーを持つユーザーデータの配列
const userDataList = [
  { id: 123, name: '高橋' },
  { id: 1021, name: '鈴木' },
  { id: 6021, name: '後藤' }
];

/** 検索IDを入力するinput要素 */
const searchIdInput = document.querySelector('#search-id-input');

/** 検索結果を表示する要素 */
const searchResult = document.querySelector('#search-result');

// 文字が入力される度に、内容のチェックを行う
searchIdInput.addEventListener('keyup', () => {
  // 検索IDを取得する
  const searchId = Number(event.target.value);
  findUser(searchId);
});

/*** ユーザーを検索する */
function findUser(searchId) {
  // 該当データを取得する
  const targetData = userDataList.find((data) => data.id === searchId);

  // 該当データが存在しなかったら、「該当者なし」と表示して終了
  if (targetData == null) {
    searchResult.textContent = '該当者なし';
    return;
  }

  // 該当データの名前を表示する
  searchResult.textContent = targetData.name;
}
