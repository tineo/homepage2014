var gzippo = require('gzippo');
var express = require('express');
var app = express();


//app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.use(app.router);
app.use(function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendfile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);