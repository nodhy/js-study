'use strict';

export default class DateService {

  today() {
    let d = new Date();
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDay(),
      hh: d.getHours(),
      mm: d.getMinutes(),
      ss: d.getSeconds(),
    };
  }

  nowDate() {
    let d = new Date();
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDay(),
    };
  }

  nowTime() {
    let d = new Date();
    return {
      hh: d.getHours(),
      mm: d.getMinutes(),
      ss: d.getSeconds(),
    };
  }
}
