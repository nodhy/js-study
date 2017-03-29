'use strict';

import assert  from 'assert';
import Time from '../../src/interface/Time';

describe('Time getCurrentTime() test', () => {

  before(function() {
    this.time = new Time();
  });

  it('Case 1', function() {
    this.time.getCurrentTime().should.throw();
  });
});
