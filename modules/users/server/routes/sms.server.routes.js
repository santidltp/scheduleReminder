'use strict';

module.exports = function(app) {
  // Routing logic   
  // ...
   app.route('/categories')
    .get(function (request, response) {
      response.json([{
        name: 'Beverages'
      }, {
        name: 'condiments'
      }]);
    });
};
