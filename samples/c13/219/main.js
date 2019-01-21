console.log('起動時の時刻', new Date().toLocaleTimeString());

setTimeout(() => {
  // 任意の処理
  console.log('setTimeout後の時刻', new Date().toLocaleTimeString());
}, 1000); // 1000ミリ秒後に実行
