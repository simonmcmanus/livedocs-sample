'use strict';
var restify = require('restify');
var config = require('./config');


var server = restify.createServer({
  name: 'My API'
});

require('livedocs-route-loader')(
  './routes',
  config.verbMapping,
  console.log,
  function(error, scope) {
    scope.load(server);
  }
);

server.listen(8000);
