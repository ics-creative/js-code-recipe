// MyClass1.jsをimport
import { MyClass1 } from './MyClass1.js';
// MyClass2.jsをimport
import { MyClass2 } from './MyClass2.js';

// MyClass1のメソッドより文字列を取得する
const message1 = new MyClass1().myMethod1();
// MyClass2のメソッドより文字列を取得する
const message2 = new MyClass2().myMethod2();

// #log要素に出力する
const log = document.querySelector('#log');
log.innerHTML += `<p>${message1}</p>`;
log.innerHTML += `<p>${message2}</p>`;
