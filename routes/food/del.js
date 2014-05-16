'use strict';


module.exports = {
  name: 'Delete some food',
  synopsis: 'Delete some food based on an ID.',
  middleware: [],
  url: ':id',
  parameters: [
    {
      name: 'id',
      location: 'query',
      type: 'string',
      description: 'The id of the food item you wish to delete.'
    }
  ],
  action: function(req, res) {
    res.send({
      deleted: {
        id: req.params.id
      }
    });
  }
};


