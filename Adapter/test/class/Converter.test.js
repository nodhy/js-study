'use strict';

import assert  from 'assert';
import Converter from '../../src/class/Converter';

describe('Converter getCurrentTime() test', () => {
  before(function () {
    this.conv = new Converter();
  });
  it('Case 1', function() {
    let res = this.conv.getCurrentTime();
    // 現時刻の比較はテストでは出来ない為、分が0か30、秒が0であることを確認する
    assert.equal(res.mm, (30 || 0));
    assert.equal(res.ss, 0);
  });
});
