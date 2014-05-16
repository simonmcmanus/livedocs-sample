'use strict';


module.exports = {
  name: 'Get food item',
  synopsis: 'Get the details of a food item based on an ID.',
  middleware: [],
  url: ':id',
  parameters: [
    {
      name: 'id',
      location: 'query',
      type: 'string',
      description: 'The id of the food item you wish to GET.'
    }
  ],
  action: function(req, res) {
    res.send({
      data: {}
    });
  }
};


