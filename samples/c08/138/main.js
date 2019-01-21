// 各.box要素に対してループ
document.querySelectorAll('.box').forEach((targetBox) => {
  // .box要素をクリックしたときの処理
  targetBox.addEventListener('click', () => {
    // クリックされた.box要素のテキストを表示
    alert(`${targetBox.textContent}がクリックされました`);
  });
});
