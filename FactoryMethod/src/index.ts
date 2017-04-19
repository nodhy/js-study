'use strict';

import {Factory} from './class/framework/Factory';
import {Product} from './class/framework/Product';
import {HamburgerFactory} from './class/hamburger/HamburgerFactory';

let factory: Factory = new HamburgerFactory();
let burger1: Product = factory.create('テリヤキ');
let burger2: Product = factory.create('ベーコンチーズ');
let burger3: Product = factory.create('てりたま');

burger1.eat();
burger2.eat();
burger3.eat();
