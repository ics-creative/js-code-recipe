const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき
  async function load() {
    // ファイルを読み込む
    const response = await fetch('sample.xml');
    // テキストとして解析
    const text = await response.text();
    // XMLとして解析
    const xml = new DOMParser().parseFromString(text, 'application/xml');

    console.log(xml); // 結果: #document
    // テキストを出力
    document.querySelector('#log').textContent = text;
  }

  load();
});
