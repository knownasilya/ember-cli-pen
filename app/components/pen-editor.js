import PenEditor from 'ember-cli-pen/components/pen-editor';
import ENV from '../config/environment';

var config = ENV['ember-cli-pen'];

export default PenEditor.extend({
  list: config.defaultList,
  debug: config.debug
});
