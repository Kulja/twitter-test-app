import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
    createTweet: function(tweetText) {
      this.get('controllers.application').send('createTweet', tweetText);
    },
    favorite: function(tweet) {
      tweet.set('favorite', parseInt(tweet.get('favorite')) + 1);
      tweet.save();
    }
  }
});
