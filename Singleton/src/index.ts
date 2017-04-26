'use strict';

import Singleton from './class/Singleton';

let obj1: Singleton = Singleton.getInstance();
let obj2: Singleton = Singleton.getInstance();

// カウンタを出力　初期値の0が出力されるはず
console.log('obj1 counter', obj1.getCounter());
console.log('obj2 counter', obj2.getCounter());

// カウントアップ
obj1.countUp();

// カウンタを出力　同じインスタンスの為、両方1が出力されるはず
console.log('obj1 counter', obj1.getCounter());
console.log('obj2 counter', obj2.getCounter());

// 新しくインスタンスを取得
let obj3: Singleton = Singleton.getInstance();

// カウンタを出力　こちらも同じインスタンスの為、両方1が出力されるはず
console.log('obj3 counter', obj3.getCounter());