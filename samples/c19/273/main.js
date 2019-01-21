const array = ['鈴木', '高橋', '田中'];

const iterator = array[Symbol.iterator]();

const next1 = iterator.next();
console.log(next1.value); // 結果: '鈴木'
console.log(next1.done); // 結果: false

const next2 = iterator.next();
console.log(next2.value); // 結果: '高橋'
console.log(next2.done); // 結果: false

const next3 = iterator.next();
console.log(next3.value); // 結果: '田中'
console.log(next3.done); // 結果: false

const next4 = iterator.next();
console.log(next4.value); // 結果: undefined
console.log(next4.done); // 結果: true
