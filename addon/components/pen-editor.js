/* global Pen */

import Ember from 'ember';

var on = Ember.on;

export default Ember.Component.extend({
  debug: false,

  initPen: on('didInsertElement', function () {
    var $this = this.$();
    var editor = new Pen({
      editor: $this.get(0),
      debug: this.get('debug')
    });

    this.set('pen', editor);
  }),

  destroyPen: on('willDestroyElement', function () {
    var editor = this.get('pen');

    if (editor) {
      editor.destroy();
    }
  })
});
