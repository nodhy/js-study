「GoFのデザインパターンをJavaScriptで実装してみる」シリーズの第4段はSingletonパターンを実装します。

前回に引き続きTypeScriptで実装していきます。

参考にしている書籍は以下になります。

「<a href="http://www.hyuki.com/dp/" target="_blank">Java言語で学ぶデザインパターン入門</a>」

## Singletonパターンとは

アプリケーション上で、指定のクラスのインスタンスが**絶対に１個しか存在しない**事を保証する為に、適用するデザインパターンです。
グローバルに共通の状態（値）を保持する為に利用したりします。  
Fluxをご存知でしたら、Dispatcher,Store がそれにあたります。

## 実装する

### Github

<a href="https://github.com/nodhy/js-study/tree/master/FactoryMethod" target="_blank">js-study/FactoryMethod</a>

### UML

<img src="http://front-end-engineer.com/wp-content/uploads/2017/04/singleton.png" />


### オブジェクト一覧

* class/Singleton.ts
  * このクラスのみ。インスタンスをプライベートに生成し、それを返却する
* index.ts
  * 実行ファイル

### 実装

class/Singleton.ts
```
export default class Singleton {
    private static singleton: Singleton = new Singleton();
    private counter: number;
    constructor() {
        this.counter = 0;
        console.log('Singletonインスタンスを生成');
    }
    public static getInstance():Singleton {
        return this.singleton;
    }
    public getCounter(): number {
        return this.counter;
    }
    public countUp(): void {
        console.log('counterに1を足します');
        this.counter++;
    }
}
```

### コンパイルする

```
$ npm run tsc
```


### 実行する

```
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
```

package.jsonで定義されたnpmコマンドを実行しています。

※ `node **/index.js`を実行しているだけです。
```
$ npm run start


## 以下が表示されます
Singletonインスタンスを生成
obj1 counter 0
obj2 counter 0
counterに1を足します
obj1 counter 1
obj2 counter 1
obj3 counter 1

```

JavaScriptにあるクロージャーという手法と実装方法は異なりますが、やっていることは同じです。