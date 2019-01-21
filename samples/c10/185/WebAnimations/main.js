document.querySelector('#checkbox').addEventListener('change', (event) => {
  const element = document.querySelector('.rect');
  if (event.target.checked === true) {
    element.animate(
      {
        transform: [
          'translateX(0px)', // 開始値
          'translateX(300px)' // 終了値
        ]
      },
      {
        duration: 3000, // ミリ秒指定
        fill: 'forwards', // 終了時にプロパティーを保つ
        easing: 'ease' // 加減速種類
      }
    );
  } else {
    element.animate(
      {
        transform: [
          'translateX(300px)', // 開始値
          'translateX(0px)' // 終了値
        ]
      },
      {
        duration: 3000, // ミリ秒指定
        fill: 'forwards', // 終了時にプロパティーを保つ
        easing: 'ease' // 加減速種類
      }
    );
  }
});
