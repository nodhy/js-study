'use strict';

import AbstractDisplay from './AbstractDisplay';

export default class Display extends AbstractDisplay {
  constructor(char = '') {
    super();
    this.char = char;
  }
  open() {
    return '<<';
  }
  print() {
    return this.char;
  }
  close() {
    return '>>';
  }
}
