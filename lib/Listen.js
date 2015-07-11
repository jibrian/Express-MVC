var loader  = require(__dirname+'/Loader')('Listen');
var morgan  = require('morgan');
var fs      = require('fs');
var modules = loader.modules,
    config  = loader.configs,
    service = loader.services;

/**
* @constructor
* @param {object} router
* @param {number} port Port #
*/
var Listen = function(router, port){
    var port = port || 3000;
    // create instance of express 
    var app  = modules.express();
    var accessLogStream = fs.createWriteStream(global._MY.log_dir + '/access.log', {flags: 'a+'});
        app.set('trust proxy', 'uniquelocal');
        app.use(morgan('combined', {stream: accessLogStream}));
        app  = router.load(app);

    app  = router.load(app);

    return app.listen(port, function(){
        console.log('ExpressMVC Started Listening on Port ' + port + '...');
    });
};

module.exports = Listen;
