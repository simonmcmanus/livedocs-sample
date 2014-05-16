'use strict';


module.exports = {
  name: 'Update a food item',
  synopsis: 'Update a food item by ID.',
  middleware: [],
  parameters: [
    {
      name: 'id',
      location: 'query',
      type: 'string',
      description: 'The id of the food item you wish to delete.'
    },
    {
      name: 'body',
      location: 'body',
      type: 'json',
      input: 'textarea',
      description: 'A JSON object representing the JSON body.'
    }
  ],
  action: function(req, res) {
    res.send({
      updated: req.body
    });
  }
};


