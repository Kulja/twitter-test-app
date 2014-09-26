export default {
  name: 'inject-user-into-app',

  initialize: function(container, app) {
    app.deferReadiness();
    var user = {
      name: '@marko',
      avatar: 'https://pbs.twimg.com/profile_images/486927625860825088/1Naj7o2X_400x400.jpeg'
    };
    app.advanceReadiness();

    app.register('user:current', user, {instantiate:false});
    app.inject('controller', 'user', 'user:current');
  }
};
