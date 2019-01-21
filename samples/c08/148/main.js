// create-modal-buttonをクリックしたときの処理
document
  .querySelector('#create-modal-button')
  .addEventListener('click', displayModalWindow);

/** モーダルウインドウを表示する */
function displayModalWindow() {
  // モーダルウインドウを生成する
  const modalElement = document.createElement('div');
  // modalクラスを付与する
  modalElement.classList.add('modal');

  // モーダルウインドウの内部要素を生成する
  const innerElement = document.createElement('div');
  innerElement.classList.add('inner');
  innerElement.innerHTML = `
    <p>モーダルウインドウの中身です</p>
    <div class="character"></div>
  `;
  // モーダルウインドウに内部要素を配置する
  modalElement.appendChild(innerElement);
  // body要素にモーダルウインドウを配置する
  document.body.appendChild(modalElement);

  // 内部要素をクリックしたらモーダルウインドウを削除する処理
  innerElement.addEventListener('click', () => {
    closeModalWindow(modalElement);
  });
}

/** モーダルウインドウを閉じる */
function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}
