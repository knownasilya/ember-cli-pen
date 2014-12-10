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
  }.on('didInsertElement')
});
