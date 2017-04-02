'use strict';

import riot from 'riot';

const eventCbFunc = {
  onMounted: function(cb) {
    return () => {
      if(this.isMounted) cb.bind(this)();
    };
  },
  notMounted: function(cb) {
    return () => {
      if(!this.isMounted) cb.bind(this)();
    };
  },
};

riot.mixin('eventCbFunc', eventCbFunc);
