'use srtict';

import {mustImplFunc} from '../service/AbstractService';

export default class AbstractDisplay {

  open() {
    mustImplFunc();
  }
  print() {
    mustImplFunc();
  }
  close() {
    mustImplFunc();
  }
  display() {
    let char = '';
    char += this.open();
    // 5回繰り返す
    for (let i = 0; i < 5; i++) {
      char += this.print();
    }
    char += this.close();
    return char;
  }
}
