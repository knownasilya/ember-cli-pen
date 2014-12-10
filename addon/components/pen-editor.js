/* global Pen */

import Ember from 'ember';

export default Ember.Component.extend({
  debug: false,

  initPen: function () {
    var $this = this.$();
    var editor = new Pen({
      editor: $this.get(0),
      debug: this.get('debug')
    });

    this.set('pen', editor);
  }.on('didInsertElement'),

  destroyPen: function () {
    var editor = this.get('pen');

    if (editor) {
      editor.destroy();
    }
  }.on('willDestroyElement')
});
