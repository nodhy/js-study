'use strict';

import should from 'should';
import {mustImplFunc} from '../../src/service/AbstractService';

describe('AbstractService .mustImplFunc() Test', ()=>{
  it('Case 1', ()=> {
    mustImplFunc.should.throw();
  });
});
