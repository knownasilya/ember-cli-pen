/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pen',

  included: function (app) {
    app.import('bower_components/pen/src/font/fontello.eot', {
      destDir: 'assets/font'
    });
    app.import('bower_components/pen/src/font/fontello.svg', {
      destDir: 'assets/font'
    });
    app.import('bower_components/pen/src/font/fontello.ttf', {
      destDir: 'assets/font'
    });
    app.import('bower_components/pen/src/font/fontello.woff', {
      destDir: 'assets/font'
    });

    app.import('bower_components/pen/src/pen.css');
    app.import('bower_components/pen/src/pen.js');
    app.import('bower_components/pen/src/markdown.js');
  }
};
