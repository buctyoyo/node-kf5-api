/**
 * Created by yuansc on 16/5/30.
 */
'use strict';

var util = require('util'),
  Client = require('./../client').Client;

var Posts = exports.Posts = function (options) {
  this.apiName = 'posts';
  this.apiNameSingular = 'posts';
  Client.call(this, options);
};

util.inherits(Posts, Client);
/**
 * 查看文档
 * @param id
 * @param cb
 */
Posts.prototype.show = function (id, cb) {
  this.request('GET', ['posts', id], cb);
};

/**
 * 搜索文档
 * @param keyword
 * @param cb
 */
Posts.prototype.listById = function (keyword, cb) {
  this.request('GET', ['search', {keyword: keyword}], cb);
};


