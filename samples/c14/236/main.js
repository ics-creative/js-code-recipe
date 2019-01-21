const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき

  async function load() {
    // データを読み込む
    const res = await fetch('./sample.jpg');
    // blob として解析する
    const blob = await res.blob();

    // img 要素を作る
    const image = new Image();
    // blob を src 属性に代入
    image.src = URL.createObjectURL(blob);
    // 画面に表示する
    document.querySelector('#log').appendChild(image);
  }

  load();
});
