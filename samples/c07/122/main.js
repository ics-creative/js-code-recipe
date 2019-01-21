/** 動かしたいキャラクター */
const character = document.querySelector('.character');

// ページ上でマウスボタンを押したら、キャラクターの移動開始
document.addEventListener('mousedown', () => {
  // マウスの動きに合わせてキャラクターを動かす
  document.addEventListener('mousemove', onMouseMove);

  // ページ上でマウスボタンを離したら、キャラクターの移動を終了
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

/**
 * マウスが動いた時の処理
 */
function onMouseMove(event) {
  character.style.left = `${event.clientX - 100}px`;
  character.style.top = `${event.clientY - 100}px`;
}
