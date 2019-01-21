/** 引数valueが数値でない場合にエラーを発生させる関数 */
function myFunction(value) {
  if (typeof value !== 'number') {
    // エラーを生成する
    const error = new Error(`「${value}」はNumberではありません`);
    // エラー内容をアラートで表示する
    alert(error.message);
    // エラーを投げる
    throw error;
  }

  console.log(`「${value}」は数値です`);
}

// 関数に数値を渡す（エラーなし）
myFunction(5);
// 関数に文字列を渡す（エラーが発生する）
myFunction('鈴木');
