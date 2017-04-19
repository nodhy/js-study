「GoFのデザインパターンをJavaScriptで実装してみる」シリーズの第3段はFactoryMethodパターンを実装します。

参考にしている書籍は以下になります。

「<a href="http://www.hyuki.com/dp/" target="_blank">Java言語で学ぶデザインパターン入門</a>」

## はじめに

前回の記事にて「ES2015で書く！」みたいに豪語していましたが、どうやら時代は**TypeScript**が主流になりそうな雰囲気しか感じません！！
（Googleの社内標準言語に採用されたようです。<a href="http://www.publickey1.jp/blog/17/googletypescriptng-conf_2017.html" target="_blank">こちら</a>）

### 非常に洗練された言語

正直、JavaScriptとは違う言語と考えていいと思います。

オブジェクト指向畑から来た人は迷わずTypeScript一択でしょうし、機能の中でも

* 型チェック
* インターフェース
* デコレータ（AOPも出来る）

があるのは、そこそこ規模のある開発では助かりますからね。

これ作った人すげーって思いました。


あと、公式サイトの「<a href="https://www.typescriptlang.org/play/index.html" taget="_blank">Playground</a>」はTypeScriptがどのようにJavaScriptに変換されているかが分かってすごく楽しいです。


ってなわけで、これからは**TypeScript**を使って実装していきます。

githubはコンパイル出来る様に変更していますので、興味ある方は実際に触って見て下さい

それでは本題に入ります。

## Factory Methodパターンとは

Factoryという名の通り「工場」を表します。インスタンスを生成する役割を担当します。
インスタンスをどのように作るかは親クラスで決められており、実際に「工場」を作成する場合は継承して肉付けを行っていきます。親クラスでは前回解説しました**Templateパターン**が利用されています。

## 実装する

### Github

<a href="https://github.com/nodhy/js-study/tree/master/FactoryMethod" target="_blank">js-study/FactoryMethod</a>

### サンプルの設定

<img src="http://front-end-engineer.com/wp-content/uploads/2017/04/factoryMethod.png" />

#### 説明  
* 「工場」→「商品」を生成します。（枠組み）
* 「工場」を元に「ハンバーガー工場」を、「商品」を元に「ハンバーガー」を実装します。（継承）
* 「ハンバーガー工場」→ 「ハンバーガー」を生成します。

### オブジェクト一覧

* class/framework/Factory.ts
  * createメソッドを実装している。他はprotected|
* class/framework/Product.ts
  * 抽象メソッドeatのみ定義されている|
* class/hamburger/HamburgerFactory.ts
  * Factoryで抽象化されたcreateProduct,registerProductを実装している|
* class/hamburger/Hamburger.ts
  * 抽象メソッドeatを実装している|
* index.ts
  * 実行ファイル

### 実装

class/framework/Factory.ts
```
import {Product} from './Product';

export abstract class Factory {
    public create(owner: string): Product {
        let p: Product = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    }
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
}
```

class/framework/Product.ts
```
export abstract class Product {
    public abstract eat(): void;
}
```

class/hamburger/HamburgerFactory.ts
```
import {Factory} from '../framework/Factory';
import {Product} from '../framework/Product';
import {Hamburger} from './Hamburger';

export class HamburgerFactory extends Factory {
    private names: string[] = [];

    protected createProduct(name: string): Product {
        return new Hamburger(name);
    }
    protected registerProduct(product: Product) {
        this.names.push((<Hamburger>product).getName());
    }
    public getNames(): string[] {
        return this.names;
    }
}
```

class/hamburger/Hamburger.ts
```
import {Product} from '../framework/Product';

export class Hamburger extends Product {
    private name: string;
    constructor(name: string) {
        super();
        console.log(`${name}バーガーを作ります`);
        this.name = name;
    }
    public eat(): void {
        console.log(`${this.name}バーガーを食べます`);
    }
    public getName() {
        return this.name;
    }
}
```

### コンパイルする

```
$ npm run tsc
```


### 実行する

```
import {Factory} from './class/Factory';
import {Product} from './class/Product';
import {IDCardFactory} from './class/IDCardFactory';

let factory: Factory = new IDCardFactory();
let card1: Product = factory.create('ほげ男');
let card2: Product = factory.create('ふが子');
let card3: Product = factory.create('ぴよ爺');

card1.use();
card2.use();
card3.use();

```

package.jsonで定義されたnpmコマンドを実行しています。

※ `node **/index.js`を実行しているだけです。
```
$ npm run start 


## 以下が表示されます
テリヤキバーガーを作ります
ベーコンチーズバーガーを作ります
てりたまバーガーを作ります
テリヤキバーガーを食べます
ベーコンチーズバーガーを食べます
てりたまバーガーを食べます

```