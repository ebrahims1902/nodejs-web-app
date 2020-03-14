'use strict'
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const morgan = require('morgan');
const https = require('https');
const http = require('http');
require('dotenv').config();

let logger = require("./utils/logger").getLogger("APP");
let accessLogStream = require('./utils/logger').accessLogStream;
let errorLogStream = require('./utils/logger').errorLogStream;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(compression());

// log only 4xx and 5xx responses to console
app.use(morgan('short', {
    skip: function (req, res) {
        return res.statusCode > 400;
    },
    stream: accessLogStream
}));

app.use(morgan('short', {
    skip: function (req, res) {
        return res.statusCode < 400;
    },
    stream: errorLogStream
}));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    var allowedOrigins = [
        "http://127.0.0.1:3000",
    ];

    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "*"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,Content-Type,X-Auth-Token,x-device-id,x-secret-key"
    );

    // Set to true if you need the website to
    // include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        // Pass to next layer of middleware
        next();
    }
});

var socketController = require('./router/socketrouter');

app.use('/api/socket', socketController);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") == "development" ? err : {};
    // render the error page
    logger.error("Error handler : ", err);
    return res.status(err.status || 500).send(err);
});

let server;
if (process.env.SERVER == 'LOCAL') {
    server = https.createServer(app);
} else {
    server = http.createServer(app);
    logger.info('APP to serve http requests.')
}

var socket = require('./controller/socket');
(async () => {
    try {
        await socket.socketobject(server)
        logger.info("Socket connected")
    } catch (ex) {
        logger.error("Could not able to connect socket server", ex)
    }
})();

server.listen(process.env.PORT || 3000);