'use strict';

import assert from 'assert';
import Display from '../../src/class/Display';

describe('Display .open() Test', ()=>{
  it('Case 1', ()=>{
    let disp = new Display('Hello Test');
    // コンソール出力のため、戻り値の比較は
    assert.equal(disp.open(), '<<');
  });
});

describe('Display .print() Test', ()=>{
  it('Case 1', ()=>{
    let disp = new Display('Hello Test');
    // コンソール出力のため、戻り値の比較は
    assert.equal(disp.print(), 'Hello Test');
  });
});

describe('Display .close() Test', ()=>{
  it('Case 1', ()=>{
    let disp = new Display('Hello Test');
    // コンソール出力のため、戻り値の比較は
    assert.equal(disp.close(), '>>');
  });
});

describe('Display .display() Test', ()=>{
  it('Case 1', ()=>{
    let disp = new Display('Hello Test');
    // コンソール出力のため、戻り値の比較は
    assert.equal(disp.display(), '<<Hello TestHello TestHello TestHello TestHello Test>>');
  });
});
