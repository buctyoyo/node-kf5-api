/**
 * Created by yuansc on 16/5/30.
 */
'use strict';

var util        = require('util'),
  Client      = require('./../client').Client;

var Tickets = exports.Tickets = function (options) {
  this.apiName = 'tickets';
  this.apiNameSingular = 'tickets';
  Client.call(this, options);
};

util.inherits(Tickets, Client);
/**
 * 查看工单列表
 * @param cb
 */
Tickets.prototype.list = function (cb) {
  this.requestAll('GET',['tickets'], cb);
};

/**
 * 查看工单
 * @param requestID
 * @param cb
 */
Tickets.prototype.show = function (requestID, cb) {
  this.request('GET', ['tickets', requestID], cb);
};


/**
 * 客服创建工单
 * @param ticket
 * @param cb
 */
Tickets.prototype.create = function(ticket, cb){
  this.request('POST', ['tickets', ticket], cb)
};
