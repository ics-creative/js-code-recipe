// JISコードに対応した都道府県の連想配列
const PREF_LIST = [
  { value: 1, name: '北海道' },
  { value: 2, name: '青森県' },
  { value: 3, name: '岩手県' },
  { value: 4, name: '宮城県' },
  { value: 5, name: '秋田県' },
  { value: 6, name: '山形県' },
  { value: 7, name: '福島県' },
  { value: 8, name: '茨城県' },
  { value: 9, name: '栃木県' },
  { value: 10, name: '群馬県' },
  { value: 11, name: '埼玉県' },
  { value: 12, name: '千葉県' },
  { value: 13, name: '東京都' },
  { value: 14, name: '神奈川県' },
  { value: 15, name: '新潟県' },
  { value: 16, name: '富山県' },
  { value: 17, name: '石川県' },
  { value: 18, name: '福井県' },
  { value: 19, name: '山梨県' },
  { value: 20, name: '長野県' },
  { value: 21, name: '岐阜県' },
  { value: 22, name: '静岡県' },
  { value: 23, name: '愛知県' },
  { value: 24, name: '三重県' },
  { value: 25, name: '滋賀県' },
  { value: 26, name: '京都府' },
  { value: 27, name: '大阪府' },
  { value: 28, name: '兵庫県' },
  { value: 29, name: '奈良県' },
  { value: 30, name: '和歌山県' },
  { value: 31, name: '鳥取県' },
  { value: 32, name: '島根県' },
  { value: 33, name: '岡山県' },
  { value: 34, name: '広島県' },
  { value: 35, name: '山口県' },
  { value: 36, name: '徳島県' },
  { value: 37, name: '香川県' },
  { value: 38, name: '愛媛県' },
  { value: 39, name: '高知県' },
  { value: 40, name: '福岡県' },
  { value: 41, name: '佐賀県' },
  { value: 42, name: '長崎県' },
  { value: 43, name: '熊本県' },
  { value: 44, name: '大分県' },
  { value: 45, name: '宮崎県' },
  { value: 46, name: '鹿児島県' },
  { value: 47, name: '沖縄県' }
];

// select要素を参照
const selectElement = document.querySelector('#pref');

// option要素の初期表示を作成
let optionString = '<option value="">選択ください</option>';
// option要素を配列から作成
PREF_LIST.forEach((item) => {
  // 都道府県ごとにvalueとnameを反映
  optionString +=
    `<option value="${item.value}">${item.name}</option>`;
});
// option要素をselect要素内に追加
selectElement.innerHTML = optionString;

// 変更時のイベント
selectElement.addEventListener('change', (event) => {
  // 現在の値を取得
  const value = event.target.value;

  // メッセージを作成
  const message = value === '' ? '選択されていません' : `選択されているのは ${value} です`;

  // 画面に表示
  document.querySelector('.log').innerHTML = message;
});
