module.exports = function(app) {
  var data = [
      {id: '0', text: "Another note regarding the OpenSSL vulnerability: SSH is not affected. You don't need to do anything with your SSH keys.", ownerName: '@GitHub', ownerAvatar: 'https://pbs.twimg.com/profile_images/426158315781881856/sBsvBbjY_400x400.png', favorite: '0'},
      {id: '1', text: 'So “Alpha" Centauri is the brightest star in the constellation Centaurus. And “Beta" Pictoris is the 2nd brightest in Pictor.', ownerName: '@neiltyson', ownerAvatar: 'https://pbs.twimg.com/profile_images/74188698/NeilTysonOriginsA-Crop_400x400.jpg', favorite: '0'},
      {id: '2', text: 'Calendar app w tap to nav & traffic predictor in Tesla V6.0 release will radically improve how the car adapts to the owner over time', ownerName: '@elonmusk', ownerAvatar: 'https://pbs.twimg.com/profile_images/420314816444502016/xj5TnUsx.jpeg', favorite: '0'}
    ];

  var express = require('express');
  var tweetRouter = express.Router();

  tweetRouter.get('/', function(req, res) {
    res.send(data);
  });

  tweetRouter.get('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        res.send(data[i]);
        return;
      }
    }
    res.status(404).end();
  });

  tweetRouter.put('/:id', function(req, res) {
    var id = req.params.id;
    id = parseInt(id);
    for(var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i] =  req.body;
        data[i].id = id;
        res.send();
        return;
      }
    }
    res.status(400).end();
  });

  tweetRouter.post('/', function(req, res) {
    var tweet = req.body;
    tweet.id = data.length;
    tweet.favorite = '0';
    data.push(tweet);
    res.send(tweet);
  });

  app.use('/api/tweet', tweetRouter);
};
