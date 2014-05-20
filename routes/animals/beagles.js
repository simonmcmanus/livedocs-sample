'use strict';


module.exports = {
  name: 'Create an asset',
  synopsis: 'Create a new AdBank asset.',
  method: 'post',
  url: '/big/fat/beagle',
  middleware: [],
  parameters: [
    {
      name: 'images',
      label: 'Images',
      input: 'checkbox',
      location: 'body',
      type: 'boolean',
      description: 'Include links to images in the response'
    },
    {
      name: 'mediaTypes',
      location: 'query',
      type: 'string',
      input: 'checkbox',
      options: {
        video: 'Video',
        audio:  'Audio',
        digital: 'Digital',
        image: 'Images',
        print: 'Print',
        document: 'Document'
      },
      description: 'The media types which should be returned'
    },
    {
      name: 'size',
      location: 'query',
      default: 10,
      type: 'number',
      description: 'The number of results to be returned in a page.'
    },
    {
      name: 'fromDate',
      location: 'query',
      type: 'date',
      description: 'Only return results from this date onwards.'
    },
    {
      name: 'order',
      location: 'query',
      default: 'ASC',
      input: 'select',
      type: 'string',
      options: {
        'ASC': 'Ascending',
        'DESC': 'Descending'
      },
      description: 'How to order the fields, ASC or DESC.'
    }
  ],
  action: function(req, res) {
    res.send('create good item.', req.body.images);
  }
};
