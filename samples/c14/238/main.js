const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき
  // XHRを作成
  const req = new XMLHttpRequest();
  // 読み込み完了時のイベント
  req.addEventListener('load', (event) => {
    // レスポンスを受け取る
    const text = event.target.responseText;

    // テキストを出力
    document.querySelector('#log').innerHTML = text;
  });
  // ファイルを指定
  req.open('GET', './sample.txt');
  // 読み込み開始
  req.send();
});
