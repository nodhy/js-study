'use srtict';

export default class StringUtil {
  static paddingZero(num, len = 2) {
    const incrementZero = (len) => {
      let zs = '';
      for (let i = 0; i < len - 1; i++) {
        zs += '0';
      }
      return zs;
    };
    return (incrementZero(len) + num).slice(-len);
  }
}
