'use strict';

import Sample from './class/Sample.js';

var base = {
  age: 23,
  dic: {
    id: 12,
    name: 'hoge',
  },
  arr: [
    {
      id: 23, sex: 1, name: 'piyo'
    },
    {
      id: 25, sex: 2, name: 'fuga'
    },
  ]
};

var apd = {
  dic: {
    name: 'hogehoge'
  },
}



let s = new Sample();
console.log(s);
console.log(s.fuga());
console.log(s.hoge());
