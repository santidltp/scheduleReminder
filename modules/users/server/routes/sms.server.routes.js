'use strict';

module.exports = function (app) {
  // Routing logic   
  // ...
  var sms = require('../controllers/sms.server.controller.js');
  app.route('/sms').get(sms.create);

};
