// Middleware between Nodejs and Angular
var express = require('express');
// Module for reading files and directories.
var path    = require('path');
// CORS is used for allowing cross origin requests. 
const cors  = require("cors");

var corsOptions = {
   //origin: "http://localhost:4200/"
};

//require('./app_api/models/db')

// 'app' is the callback function variable returned by the constructor of the 
// 'express' library.
var app = express();

// 'routes/index.js' contains the REST API. 
// This is the place where POST, GET etc functions are placed.
// This way we will be able to call the functions of this file from here.
// 'routesApi' contains the value of 'module.exports' of 'index.js'.
var routesApi = require('./app_api/routes/index');

// CORS is required for allowing cross origin requests.
// cross origin requests are those requests where port/domain/scheme are different.
app.use( cors( corsOptions ));

//app.use('/api', routesApi)
//app.use('/hello', routesApi)

// A route for example: app.use('/apple', ...) will match “/apple”, 
// “/apple/images”, “/apple/images/news”, and so on.
// Since path defaults to “/”, middleware mounted without a path will be executed 
// for every request to the app. This means if we don't specify '/', then by default
// all paths will be accepted.	
app.use('/', routesApi)
//app.use('/say-hello', routesApi)

const port = 3001 
// This listens for connections on a specified port. 
// If port is not specified then a default available port is used.
// 'app.listen()' returns a http.Server object
// 
// https://expressjs.com/en/api.html#app.listen
// This is the port number on which Angular application will be sending REST API requests.
app.listen( port, () => {
                            console.log(`Example app listening at http://localhost:${port}`)
                        })

                    
// This is used to export anything that we assign to it.
module.exports = app;

/// catch 404 and forwarding to error handler
/*pp app.use(function(req, res, next) {
    var err = new Error('Not oooooo Found');
    err.status = 404;
    next(err);
});
*/
/// error handlers

// development error handler
// will print stacktrace
/*pp if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/

// production error handler
// no stacktraces leaked to user
/*pp app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
*/

