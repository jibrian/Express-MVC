// @see Loader/ExpressMVC.js
var loader  = require(__dirname+'/Loader')('ExpressMVC');
var modules = loader.modules;
var config  = loader.configs;
var service = loader.services;
var object  = loader.objects;

/**
* ExpressMVC class
* @constructor
*/
var ExpressMVC = function(options){
	this.options = options ? modules.extend(true, config.options, options) : config.options;
	this.Router  = object.router;
	this.Listen  = object.listen;
};

module.exports = ExpressMVC;
