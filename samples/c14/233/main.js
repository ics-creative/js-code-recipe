const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき
  async function load() {
    const data = await fetch('sample.txt'); // ①
    const text = await data.text(); // ②
    console.log(text); // ③
    // テキストを出力
    document.querySelector('#log').innerHTML = text;
  }

  load();
});
