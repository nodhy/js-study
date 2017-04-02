'use strict';

import riot from 'riot';
import route from 'riot-route';

const appTag = 'app';

export default function() {
  console.log('routing start');
  route('', (...args)=>{
    riot.mount(appTag, 'content');
  });

  // route('sub', (...args)=>{
  //   riot.mount(appTag, 'subcontent');
  // });
  return route;
};
