import riot from 'rollup-plugin-riot';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
// import postcss from 'postcss'
// import postcssCssnext from 'postcss-cssnext'
import css from 'rollup-plugin-css-only';
import inject from 'rollup-plugin-inject'; // https://github.com/rollup/rollup-plugin-inject
// import eslint from 'rollup-plugin-eslint'
import fs from 'fs-extra';

/**
 * 設定項目定義
 * @type {Object}
 */
let prop = {
  entry: './src/index.js',
  dest: {
    js: './lib',
  },
  makeDest: function(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.dir === undefined) {
      if (fs.mkdirsSync(this.dest.js)) {
        this.log('create new directory' + this.dest.css);
      }
    } else {
      fs.mkdirsSync(options.dir);
    }
    return true;
  },
  log: function(mes) {
    console.log(mes);
  },
  error: function(e) {
    console.error(e);
  },
};

export default {
  entry: prop.entry,
  dest: prop.dest.js + '/bundle.js',
  plugins: [
    prop.makeDest(),
    riot(),
    nodeResolve({
      jsnext: true,
      browser: true,
    }),
    commonjs(),
        // TODO 今かけると修正する事象が多いため、一旦コメントアウト
        // eslint(),
    buble(),
  ],
  format: 'iife',
};

/**
 * Transforms new CSS specs into more compatible CSS
 */
/*
function cssnext (tagName, css) {
    // A small hack: it passes :scope as :root to PostCSS.
    // This make it easy to use css variables inside tags.
    css = css.replace(/:scope/g, ':root')
    css = postcss([postcssCssnext]).process(css).css
    css = css.replace(/:root/g, ':scope')
    return css
}
*/
