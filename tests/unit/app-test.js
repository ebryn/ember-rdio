import startApp from "ember-rdio-w-ember-cli/tests/helpers/start-app";

var App;

module("Some integration tests", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(function() {
      App.destroy();
    });
  }
});

test("Navigating to an album", function() {
  expect(1);

  visit("/");

  click(".main a:eq(0)");

  andThen(function() {
    ok(exists('h1:contains(Frozen)'));
  });
});

test("Navigating to a track", function() {
  expect(2);

  visit("/");

  click(".main a:eq(0)");

  andThen(function() {
    ok(exists('h1:contains(Frozen)'));
  });

  click(".main a:eq(0)");

  andThen(function() {
    ok(exists('h2:contains(Frozen Heart)'));
  });
});