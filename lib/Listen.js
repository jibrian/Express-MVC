// @see Loader/Listen.js
var loader  = require(__dirname + '/Loader')('Listen');
var modules = loader.modules;
var config  = loader.configs;
var service = loader.services;
/**
* @constructor
* @param {object} router
* @param {number} port Port #
*/
var Listen = function(router, port){
    var port = port || 3000;
    // create instance of express 
    var app  = modules.express();
   
    app  = router.load(app);
    
    return app.listen(port, function(){
        console.log('ExpressMVC Started Listening on Port ' + port + '...');
    });
};

module.exports = Listen;
