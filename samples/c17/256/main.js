const a = 10;

try {
  a = 20; // aへの再代入。エラー
} catch (error) {
  console.log(`エラーが発生しました: ${error.message}`);
}

// 中断されることなく実行される
console.log(`定数aの値は${a}です`);
