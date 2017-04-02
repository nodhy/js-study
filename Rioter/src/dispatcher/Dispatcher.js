'use strict';

export default new class Dispatcher {
  constructor() {
    this._observableStores = [];
  }
  addStore(s) {
    this._observableStores.push(s);
  }
  trigger(event, args) {
    this._observableStores.forEach((s) => {
      s.trigger(event, args);
    });
  }
}();
