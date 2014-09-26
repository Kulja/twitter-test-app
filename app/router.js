import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tweets', {path: '/'}, function() {
    this.route('tweet', {path: "tweet/:id"});
  });
});

export default Router;
