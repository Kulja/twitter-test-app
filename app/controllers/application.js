import Ember from 'ember';

export default Ember.ObjectController.extend({
  newTweetText: '',

  actions: {
    createTweet: function(tweetText) {
      var tweet = this.store.createRecord('tweet');
      tweet.set('text', tweetText);
      tweet.set('ownerName', this.get('user.name'));
      tweet.set('ownerAvatar', this.get('user.avatar'));
      tweet.save();

      this.set('newTweetText', '');
    }
  }
});
