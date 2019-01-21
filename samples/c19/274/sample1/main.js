function* myGenerator() {
  console.log('こんにちは');
  yield 1000;
  console.log('今日はいい天気ですね');
  yield 2000;
  console.log('明日は晴れるでしょう');
  yield 3000;
}
const myIterable = myGenerator();

// 結果
// 1秒後、「こんにちは」が出力された後、1000が出力される
// 2秒後、「今日はいい天気ですね」が出力された後、2000が出力される
// 3秒後、「明日は晴れるでしょう」が出力された後、3000が出力される
// それ以降はundfinedが出力される
setInterval(() => {
  console.log(myIterable.next().value);
}, 1000);
