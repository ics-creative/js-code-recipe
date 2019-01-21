// ジェネレータの定義
function* range(start, end) {
  let result = start;
  while (result <= end) {
    yield result;
    result++;
  }
}

// 使用例
for (let value of range(2, 6)) {
  console.log(value); // 結果: 2, 3, 4, 5, 6...と順番に出力される
}
