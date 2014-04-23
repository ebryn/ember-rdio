export default Ember.Handlebars.makeBoundHelper(function(rawSeconds) {
  var mins = (Math.floor(rawSeconds / 60) || 0).toString(),
      secs = (rawSeconds % 60).toString();

  if (secs.length < 2) {
    secs = "0" + secs;
  }
  
  return "%@:%@".fmt(mins || "0", secs)
});