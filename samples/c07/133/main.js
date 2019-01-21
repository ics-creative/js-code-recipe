/** マウスホイールを有効にするかどうか */
let enableMouseWheel = true;

// チェックボックスをクリックしたときの処理
document
  .querySelector('#mouseWheelToggle')
  .addEventListener('click', (event) => {
  // チェックボックスに値が入っていたら、マウスホイールを無効化する
    enableMouseWheel = event.target.checked === false;
  });

// スクロール可能な要素上でマウスホイールしたときの処理
document
  .querySelector('.scrollable-element')
  .addEventListener('wheel', (event) => {
    // マウスホイールが有効な場合は処理を抜ける
    if (enableMouseWheel === true) {
      return;
    }

    // マウスホイールが無効な場合はevent.preventDefault()を実行
    event.preventDefault();
  });