// 配列を作成
const arrFunc = [];
for (let i = 0; i < 5; i++) {
  const func = (resolve) => {
    console.log(`処理${i}を開始`, new Date().toLocaleTimeString());
    // 0〜2秒ぐらいで遅延
    const delayMsec = 2000 * Math.random();

    // 遅延処理
    setTimeout(() => {
      console.log(`処理${i}が完了`, new Date().toLocaleTimeString());
      resolve();
    }, delayMsec);
  };
  // 配列に保存
  arrFunc.push(func);
}

console.log(arrFunc);

// 関数を含めた配列を、Promiseの配列に変換
const arrPromise = arrFunc.map((func) => new Promise(func));

console.log(arrPromise);

// 並列処理を実行
Promise.all(arrPromise).then(() => {
  console.log('すべての処理が完了しました');
});
