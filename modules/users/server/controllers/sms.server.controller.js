'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');
var accountSid = 'AC4d350c263e2f84dfe3f4203f5f666332';
var authToken = "0539f1ecfa5f9c01ca98e933e0363641";
var sms = require('twilio')(accountSid, authToken);



/**
 * Create a Sm
 */
exports.create = function (req, res) {
  //TODO: when logic here...
  console.log("time: " + req.body.time);
  setTimeout(function () {
    sms.messages.create({
      body: req.body.message,
      to: req.body.phoneNumber,
      from: '+16175536219'
    }, function (err, sms) {
      console.log('err: ' + err);
      console.log('sms: ' + sms);
      if (err) console.log(err);
      console.log(sms.sid);
    });
    }, req.body.time);

 
  res.end();

};

/**
 * Show the current Sm
 */
exports.read = function (req, res) {

};

/**
 * Update a Sm
 */
exports.update = function (req, res) {

};

/**
 * Delete an Sm
 */
exports.delete = function (req, res) {

};

/**
 * List of Sms
 */
exports.list = function (req, res) {

};
