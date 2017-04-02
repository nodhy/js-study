'use strict';

import should from 'should';
import AbstractDisplay from '../../src/class/AbstractDisplay';

describe('AbstractDisplay .open() Test', () => {
  before(function() {
    this.absDisp = new AbstractDisplay();
  });
  it('Case 1', function() {
    // 例外が投げられるはず
    this.absDisp.open.should.throw();
  });
});

describe('AbstractDisplay .print() Test', () => {
  before(function() {
    this.absDisp = new AbstractDisplay();
  });
  it('Case 1', function() {
    // 例外が投げられるはず
    this.absDisp.print.should.throw();
  });
});

describe('AbstractDisplay .close() Test', () => {
  before(function() {
    this.absDisp = new AbstractDisplay();
  });
  it('Case 1', function() {
    // 例外が投げられるはず
    this.absDisp.close.should.throw();
  });
});

describe('AbstractDisplay .display() Test', () => {
  before(function() {
    this.absDisp = new AbstractDisplay();
  });
  it('Case 1', function() {
    // 例外が投げられるはず
    this.absDisp.display.should.throw();
  });
});
