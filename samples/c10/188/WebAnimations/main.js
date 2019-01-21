document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (event.target.checked === true) {
    element.animate(
      {
        filter: [
          'grayscale(0%)', // 開始値
          'grayscale(100%)' // 終了値
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
        filter: [
          'grayscale(100%)', // 開始値
          'grayscale(0%)' // 終了値
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
