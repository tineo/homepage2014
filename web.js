// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

var gzippo = require('gzippo');

app.use(logfmt.requestLogger());


app.use(gzippo.staticGzip("" + __dirname + "/dist"));
/*
app.get('/', function(req, res) {
    res.send('Hello World!');
});*/

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});


