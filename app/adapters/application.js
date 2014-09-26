import DS from 'ember-data';

export default DS.Adapter.extend({
  namespace: 'api',

  findAll: function(store, type) {
    return this.ajax(this.namespace + '/' + type.typeKey, 'get');
  },

  find: function(store, type, id) {
    return this.ajax(this.namespace + '/' + type.typeKey + '/' + id, 'get');
  },

  createRecord: function(store, type, record) {
    return this.ajax(this.namespace + '/' + type.typeKey, 'post', record.serialize());
  },

  updateRecord: function(store, type, record) {
    return this.ajax(this.namespace + '/' + type.typeKey + '/' + record.get('id'), 'put', record.serialize());
  },

  ajax: function(url, type, data) {
    var options = { type: type, url: url};
    if (data) {
      options.data = data;
    }
    return $.ajax(options);
  }

});
