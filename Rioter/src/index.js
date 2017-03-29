'use strict';

import riot from 'riot';
import './tag/import.js';
// import router from './service/router';
import route from 'riot-route';

// window.obs = riot.observable();
// router().start(true)

route('', (...args)=>{
  riot.mount('app', 'subcontent');
});
route('/hoge', function(...args) {
  console.log('hoge route');
});
route('sub', (...args)=>{
  console.log('sub route');
});


route.start(true);
