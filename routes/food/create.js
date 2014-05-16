'use strict';


module.exports = {
  name: 'Create an some food',
  synopsis: 'Create a food object.',
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
    res.send(req.body);
  }
};


