'use strict';

export const inherits = (...args) => {
  let o = class{};
  let impF = (Base, Extd) => class Base extends Extd {};
  args.forEach((v, i)=>{
    i === 0 ? o = impF(o, v): o = impF(v, o);
  });
  return o;
};
<<<<<<< HEAD
=======


const excludeKeys = [
  'constructor',
];

export const inherits = (...args) => {
  let o = class{};
  const impF = (Base, Extd) => {
    if (typeof Extd !== 'function') return;
    const e = Extd.prototype;
    for (const k of Reflect.ownKeys(e)) {
      console.log(k);
      if (excludeKeys.indexOf(k) === -1) continue;
      const descriptor = Object.getOwnPropertyDescriptor(e, k);
      descriptor.configurable = true;
      descriptor.enumerable = false;
      if (descriptor.hasOwnProperty('writable')) descriptor.writable = true;

      Object.defineProperty(Base.prototype, k, descriptor);
    }
  };
  args.forEach((v)=>{
    impF(o, v);
  });
  return o;
};
>>>>>>> dcb3750... first commit. Make skeleton for package. Make init package script.
