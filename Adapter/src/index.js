'use strict';

import DateService from './service/DateService';
import Converter from './class/Converter';
import su from './service/StringUtil';

let ds = new DateService();
let ct = ds.nowTime();

let cv = new Converter();
// let ct = cv.getCurrentTime();

let hh = su.paddingZero(ct.hh);
let mm = su.paddingZero(ct.mm);
let ss = su.paddingZero(ct.ss, 4);

console.log(`${hh}:${mm}:${ss}`);
