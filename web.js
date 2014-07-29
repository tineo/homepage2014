var app, express, oneDay, pushState;

express = require("express");

app = express();

console.log(app.settings.env);

oneDay = 86400000;

pushState = function(req, res) {
    var newUrl;
    newUrl = req.protocol + '://' + req.get('Host') + '/#' + req.url;
    return res.redirect(newUrl);
};

app.configure('development', function() {
    app.use(express.compress());
    app.use(express["static"](__dirname + '/dist'));
    return app.use(express.logger());
});

app.configure('staging', function() {
    app.use(express.basicAuth('whateveruser', 'whateverpassword'));
    app.use(express.compress());
    return app.use(express["static"](__dirname + '/dist'));
});

app.configure('production', function() {
    app.use(express.compress());
    return app.use(express["static"](__dirname + '/dist', {
        maxAge: oneDay
    }));
});

app.get('*', function(req, res) {
    var newUrl;
    newUrl = req.protocol + '://' + req.get('Host') + '/#' + req.url;
    return res.redirect(newUrl);
});

exports.startServer = function(port, path, callback) {
    var p;
    p = process.env.PORT || port;
    console.log("Starting server on port: " + p + ", path /" + path);
    app.listen(p);
    if (callback != null) {
        return callback(app);
    }
};

if (process.env.PORT) {
    this.startServer(process.env.PORT, "dist");
}
