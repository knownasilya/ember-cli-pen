/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pen',

  included: function (app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-cli-pen'];

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

    if (config.markdown) {
      app.import('bower_components/pen/src/markdown.js');
    }
  }
};
