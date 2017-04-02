'use strict';

import riot from 'riot';
import './tag/import.js';
import router from './service/router';
import './mixin/event_func';


window.obs = riot.observable();
router().start(true);
