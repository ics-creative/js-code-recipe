// 吹き出し用の要素
const balloon = document.querySelector('#balloon');

// 対象の文字列要素
const paragraph = document.querySelector('.paragraph');

// 選択開始したときの処理
paragraph.addEventListener('selectstart', () => {
  // マウスを離したときの処理
  paragraph.addEventListener(
    'mouseup',
    (event) => {
      // 選択されている文字列を取得する※
      const selectionCharacters = window.getSelection().toString();

      if (selectionCharacters.length > 0) {
        // 1文字以上選択されていれば、その文字を表示する
        balloon.innerHTML = selectionCharacters;
        balloon.classList.add('on');
        balloon.style.left =
          `${event.clientX - balloon.clientWidth / 2}px`;
        balloon.style.top =
          `${event.clientY - balloon.clientHeight * 2}px`;
      } else {
        // 選択文字列がなければ吹き出しを閉じる
        removePopup();
      }
    },
    {
      once: true
    }
  );
});

// 吹き出しをクリックしたら閉じる
balloon.addEventListener('click', removePopup);

// 吹き出しを閉じる処理
function removePopup() {
  balloon.classList.remove('on');
}
