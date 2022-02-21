// ファイルアップロードゾーン
const fileZone = document.querySelector('.file-zone');

// ファイルアップロードゾーンに着脱するクラス
const className = 'on';

// ドラッグした要素が重なったときの処理
fileZone.addEventListener('dragover', (event) => {
  // デフォルトの挙動を停止
  event.preventDefault();
  fileZone.classList.add(className);
});

// ドラッグした要素が離れたときの処理
fileZone.addEventListener('dragleave', (event) => {
  // デフォルトの挙動を停止
  event.preventDefault();
  fileZone.classList.remove(className);
});

// ドロップした時の処理
fileZone.addEventListener('drop', (event) => {
  // デフォルトの挙動を停止
  event.preventDefault();
  fileZone.classList.remove(className);

  // Fileオブジェクトを参照
  const transferredFiles = event.dataTransfer.files;

  // 画像を表示する
  displayImages(transferredFiles);
});

/** 画像の表示処理 */
function displayImages(transferredFiles) {
  // 画像ファイルの格納配列
  const imageFileList = [];

  // ファイル数
  const fileNum = transferredFiles.length;

  // ファイルが画像のもののみを配列に格納する
  for (let i = 0; i < fileNum; i++) {
    if (transferredFiles[i].type.match('image.*') === false) {
      return;
    }
    imageFileList.push(transferredFiles[i]);
  }

  // 画像表示エリアの参照
  const imagePreviewArea = document.querySelector('.image-list');

  // 各画像ファイルについて処理
  for (const imageFile of imageFileList) {
    // 画像ファイルの読み込み処理
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener('load', (event) => {
      const image = new Image();
      image.src = event.target.result;
      // 表示エリアの先頭に画像ファイルを表示
      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
}
