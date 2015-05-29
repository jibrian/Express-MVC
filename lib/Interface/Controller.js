var ControllerInterface = function(req, res){
    var method = req.method;
    var path = req.route.path;
    var controller;
    if( path == '/' ){
        controller = 'Home';
    }else{
        var segments = path.split('/');
            segments.shift();
        var i = segments.length;
        while(i--){
            if( segments[i].match(':') ){
                segments.splice(i, 1);
                continue;
            }
            segments[i] = segments[i].charAt(0).toUpperCase() + segments[i].slice(1).toLowerCase();
        }
        controller = segments.join('/');
    }

    var ControllerRef = require('../controllers/'+controller+'.js')[method](req, res);
};

module.exports = ControllerInterface;
