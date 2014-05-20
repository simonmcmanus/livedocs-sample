'use strict';


module.exports = {
  name: 'GET an asset',
  synopsis: 'GET an asset by its ID',
  method: 'get',
  middleware: [],
  url: ':id',
  parameters: [
    {
      name: 'id',
      location: 'query',
      type: 'string',
      description: 'A JSON object.'
    }
  ],
  action: function(req, res) {
    res.send('create good item.', req.params.id);
  }
};


