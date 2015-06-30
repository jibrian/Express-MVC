var loader    = require(__dirname + '/Loader')('Router');
var modules   = loader.modules;
var config    = loader.configs;
var service   = loader.services;
var interface = loader.interfaces;

/**
* @constructor
*/
var Router = function(){
    var _this = this;
    
    this.routes = {};

    /**
    * @constructor
    * @param {string} method
    * @param {string} path
    * @param {interface} interface
    */
    var Route = function(method, path, interface){
        this.method = method || 'GET';
        this.path   = path || '/';
        this.interface = interface;
    };

    /**
    * @param {string} name 
    * @param {string} method
    * @param {string} path
    * @param {string} interface
    */
    this.prototype.addRoute = function(name, method, path, interface){
        _this.routes[name] = new Route(method, path, interface);
    };

    /**
    * @param {string} name
    */
    this.prototype.deleteRoute = function(name){
        delete _this.routes[name];
    };

    this.prototype.load = function(app){
        for(var key in _this.routes){
            var controller;
            if( typeof _this.routes[key].interface === "undefined" ){
                controller = interface.controller;
            }else if( typeof _this.routes[key].interface === "function" ){
                controller = _this.routes[key].interface;
            }else{
                controller = require(_this.routes[key].interface);
            }
            app[_this.routes[key].method.toLowerCase()](_this.routes[key].path, controller);

            return app;
        }
    };
};

module.exports = Router;
