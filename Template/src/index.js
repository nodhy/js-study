'use strict';

import Display from './class/Display';

// 出力する文字列を指定してDisplayインスタンスを生成
let d = new Display('Hello Template!');
// 実行
console.log(d.display());
