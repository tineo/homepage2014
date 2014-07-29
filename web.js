var gzippo = require('gzippo');
var express = require('express');
var app = express();


//app.use(gzippo.staticGzip("" + __dirname + "/dist"));

/*app.use(app.router);
app.use(function(req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});*/

app.use(express.static(__dirname + '/index.html'));

app.listen(process.env.PORT || 5000);