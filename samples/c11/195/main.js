// 挿入したい要素の参照を取得
const container = document.querySelector('.container');
for (let i = 0; i < 10; i++) {
  // Imageオブジェクトを作る
  const img = document.createElement('img');
  // src属性にファイルパスを指定
  img.src = `images/photo-${i}.jpg`;
  // 要素に挿入する
  container.appendChild(img);
}
