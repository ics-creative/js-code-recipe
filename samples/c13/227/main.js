// 配列を作成
const listFunctions = [];

// 動的に関数を追加
for (let i = 0; i < 5; i++) {
  // 1秒後に処理をする非同期関数を作成
  const func = (resolve) => {
    // setTimeoutで遅延処理
    setTimeout(() => {
      console.log(`関数${i}が完了しました`, new Date().toLocaleTimeString());
      resolve(); // Promiseを完了
    }, 1000);
  };
  // 配列に保存
  listFunctions.push(func);
}
// 配列の中身を出力
console.log(listFunctions); // 結果: [ [Function: func], ...

execute();

async function execute() {
  // 非同期処理を順番に実行
  for (let i = 0; i < listFunctions.length; i++) {
    const func = listFunctions[i];
    await new Promise(func);
  }
}
