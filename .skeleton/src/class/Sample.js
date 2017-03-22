'use strict';

import {inherits} from '../service/classutil';
import Hoge from './Hoge';
import Fuga from './Fuga';

export default class Sample extends inherits(Hoge, Fuga) {
  constructor() {
    super();
    this.l = 'sss';
  }
  fuga() {
    console.log('complete implement fuga()');
  }
}
