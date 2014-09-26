import Ember from 'ember';

export default Ember.Component.extend({
  isReplyingTo: false,
  replyText: '',
  isFavorite: function() {
    if (this.get('tweet.favorite') > 0) {
      return true;
    }
    return false;
  }.property('tweet.favorite'),

  actions: {
    replyTo: function() {
      this.set('isReplyingTo', true);
      this.set('replyText', this.get('tweet.ownerName') + ' ');
    },
    favorite: function() {
      this.sendAction('favorite', this.get('tweet'));
    },
    createTweet: function() {
      this.set('isReplyingTo', false);
      this.sendAction('createTweet', this.get('replyText'));
    }
  }
});
