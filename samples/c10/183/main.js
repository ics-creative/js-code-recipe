// 要素を取得
const element = document.querySelector('.rect');
element.animate(
  {
    transform: [
      'translateX(0px) rotate(0deg)', // 開始値
      'translateX(800px) rotate(360deg)' // 終了値
    ]
  },
  {
    duration: 3000, // ミリ秒指定
    iterations: Infinity, // 繰り返し回数
    direction: 'normal', // 繰り返し挙動
    easing: 'ease' // 加減速種類
  }
);
