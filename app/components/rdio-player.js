export default Ember.Component.extend({
  trackId: null,

  isPlaying: false,
  currentTime: null,

  positionChanged: function(newValue) {
    this.set('currentTime', newValue);
  },

  actions: {
    play: function() {
      R.player.play({source: this.trackId});
      this.toggleProperty('isPlaying');

      R.player.on('change:position', $.proxy(this, 'positionChanged'));
    },

    pause: function() {
      R.player.pause();
      this.toggleProperty('isPlaying');
      R.player.off('change:position', $.proxy(this, 'positionChanged'));
    }
  },

  willDestroyElement: function() {
    var self = this;

    R.player.off('change:position', $.proxy(this, 'positionChanged'));
  }
});