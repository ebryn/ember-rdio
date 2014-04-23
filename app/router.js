var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource('album', {path: 'albums/:album_id'}, function() {
    this.route('track', {path: 'tracks/:track_id'});
  });
  this.route('recent');

});

export default Router;
