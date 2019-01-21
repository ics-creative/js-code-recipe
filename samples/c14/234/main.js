const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき
  async function load() {
    // ファイルを読み込む
    const data = await fetch('sample.json');
    // JSONとして解析
    const obj = await data.json();
    console.log(obj); // 結果: {name: "別所分校", classes: Array(2)}
    // テキストを出力
    document.querySelector('#log').innerHTML = JSON.stringify(obj, null, '  ');
  }

  load();
});
