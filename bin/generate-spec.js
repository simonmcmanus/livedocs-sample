'use strict';


var config = require('../config');
var fs = require('fs');


require('livedocs-route-loader')('./routes', config.verbMapping, console.log,
  function(error, scope) {
    var filename = './livedocs-spec.json';

    scope.spec.server = 'http://example.com';
    scope.spec.title = 'My Well Documented API';
    scope.spec.version = require('../package.json').version;

    fs.writeFile(filename, JSON.stringify(scope.spec, null, 4), function(err) {
      if (err) {
        return console.log('error', err);
      }
      console.log('LiveDocs spec file saved. ', filename);
    });
  }
);
