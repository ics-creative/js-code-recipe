// .button要素すべてについて処理をする
document.querySelectorAll('.button').forEach((button) => {
  // .button要素をクリックしたときの処理を設定する
  button.addEventListener('click', () => {
    // .button要素の次の要素のクラスを切り替える
    button.nextElementSibling.classList.toggle('show');
  });
});
