'use strict';

module.exports = function (app) {
  // Routing logic   
  // ...
  var sms = require('../controllers/sms.server.controller.js');
  app.route('/categories').get(sms.create);

};
