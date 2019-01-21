const btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', () => {
  // ボタンをクリックしたとき
  // XHRを作成
  const req = new XMLHttpRequest();
  // データの種類を設定
  req.responseType = 'blob';

  req.addEventListener('progress', (event) => {
    // 読み込みの割合を算出(0〜1)
    const rate = event.loaded / event.total;

    // プログレスバーの幅を変更する
    const element = document.querySelector('.progress-bar');
    element.style.width = `${rate * 100}%`;
  });

  // 読み込み完了時のイベント
  req.addEventListener('load', (event) => {
    // レスポンスを受け取る
    const data = event.target.response;
    // 画像データに変換
    const source = URL.createObjectURL(data);

    // 画像を作成
    const image = new Image();
    image.src = source;
    // テキストを出力
    document.querySelector('#log').appendChild(image);
  });
  // ファイルを指定
  req.open('GET', './sample.jpg');
  // 読み込み開始
  req.send();
});
