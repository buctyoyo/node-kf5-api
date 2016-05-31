/**
 * Created by yuansc on 16/5/30.
 */
'use strict';

var util        = require('util'),
  Client      = require('./../client').Client;

var Forums = exports.Forums = function (options) {
  this.apiName = 'forums';
  this.apiNameSingular = 'forums';
  Client.call(this, options);
};

util.inherits(Forums, Client);
/**
 * 文档分类列表
 * @param cb
 */
Forums.prototype.list = function (cb) {
  console.log(this);
  

  this.request('GET', ['forums'], cb);
};

/**
 *
 * @param requestID
 * @param cb
 */
Forums.prototype.listById = function (requestID, cb) {
  this.request('GET', ['forums', requestID], cb);
};


