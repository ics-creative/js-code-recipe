document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (event.target.checked === true) {
    element.animate(
      {
        opacity: [
          1.0, // 開始値
          0.5 // 終了値
        ]
      },
      {
        duration: 500, // ミリ秒指定
        fill: 'forwards', // 終了時にプロパティーを保つ
        easing: 'ease' // 加減速種類
      }
    );
  } else {
    element.animate(
      {
        opacity: [
          0.5, // 開始値
          1.0 // 終了値
        ]
      },
      {
        duration: 500, // ミリ秒指定
        fill: 'forwards', // 終了時にプロパティーを保つ
        easing: 'ease' // 加減速種類
      }
    );
  }
});
