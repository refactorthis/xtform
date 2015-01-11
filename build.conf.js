/**
 *  This file contains all of the user settings for the gulp build process
 */
module.exports = {

  srcJs: ['component/**/*.module.js', 'component/**/*.js', '!component/**/*.test.js'],
  tests: 'component/**/*.test.js',
  views: 'component/**/*.html',
  docs: {
    views: 'docs/templates/*.html',
    items: 'docs/**/*',
    templateBanner: '/*!\n' +
    ' * This has been generated from "gulp docs", please edit the templates instead templates/*.html\n' +
    ' */\n',
    templateJsFilename: 'js/docs.tpl.js',
    build: 'docs/dist'
  },
  coverageFolder: 'coverage',
  buildFolder: 'dist',
  buildJsFilename: 'xtForm.js',
  templateJsFilename: 'xtForm.tpl.js',
  banner: '/*!\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',
  closureStart: '(function(){\n\'use strict\';\n',
  closureEnd: '\n})();'
};