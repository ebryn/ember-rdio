export default Ember.Route.extend({
  model: function(params) {
    var album = this.modelFor('album');
    return album.tracks.findBy('id', params.track_id);
  },

  actions: {
    play: function(track) {
      R.player.play({source: track.id}); // Alice In Chains - The Devil Put Dinosaurs Here
    }
  }
})