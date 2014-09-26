import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  ownerName: DS.attr(),
  ownerAvatar: DS.attr(),
  favorite: DS.attr()
});
