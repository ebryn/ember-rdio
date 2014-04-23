export default Ember.Route.extend({
  model: function(params) {
    var albums = this.modelFor('application');
    return albums.findBy('id', params.album_id);
  }
});