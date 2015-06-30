// import file system module
var fs = require('fs');
/**
* Orchestrates where modules should be imported from
* @constructor
* @param {string} modules_scope 
*/
var Loader = function(modules_scope){
    var loader  = __dirname + '/Loader/' + modules_scope;
    var modules = {};

    // existsSync method checks if file exists
    if ( fs.existsSync(loader + '.js') ){
        modules = require(loader);
    }

    return modules;
};

module.exports = Loader;
