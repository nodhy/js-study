'use strict';

import inherits from 'inherits-class';
import Time from '../interface/Time';
import DateService from '../service/DateService';

export default class Converter extends inherits(Time, DateService) {
  constructor() {
    super();
  }
  getCurrentTime() {
    let ct = this.nowTime();
    return Object.assign(ct, {
      mm: ct.mm < 30? 0: 30,
      ss: 0,
    });
  }
}
