'use strict';


module.exports = {
  name: 'Create an asset',
  synopsis: 'Create a new AdBank asset.',
  method: 'get',
  middleware: [],
  parameters: [
    {
      name: 'body',
      location: 'body',
      type: 'json',
      input: 'textarea',
      description: 'A JSON object.'
    }
  ],
  action: function(req, res) {
    res.send('create good item.', req.body);
  }
};

