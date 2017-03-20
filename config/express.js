var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport'),
    _ = require('lodash');
module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/articles.server.routes.js')(app);
    require('../app/routes/faculties.server.routes.js')(app);
    require('../app/routes/courses.server.routes.js')(app);
    require('../app/routes/lectures.server.routes.js')(app);


//     // Add Middleware necessary for REST API's
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(bodyParser.json());
//     app.use(methodOverride('X-HTTP-Method-Override'));

// // CORS Support
//     app.use(function(req, res, next) {
//         res.header('Access-Control-Allow-Origin', '*');
//         res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//         res.header('Access-Control-Allow-Headers', 'Content-Type');
//         next();
//     });
    // var routes = require('./routes');
    // _.each(routes, function (controller, route) {
    //     app.use(route, controller(app, route))
    // });

    app.use(express.static('./public'));
    return app;
};