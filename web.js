express = require "express"

app = express()

console.log app.settings.env

oneDay = 86400000
pushState = (req, res) ->
    newUrl = req.protocol + '://' + req.get('Host') + '/#' + req.url
res.redirect newUrl


app.configure 'development', () ->
    app.use express.compress()
app.use express.static __dirname + '/dist'
app.use express.logger()

app.configure 'staging', () ->
    app.use(express.basicAuth('whateveruser', 'whateverpassword'))
app.use express.compress()
app.use express.static __dirname + '/dist'

app.configure 'production', () ->
    app.use express.compress()
app.use express.static __dirname + '/dist', { maxAge: oneDay }

app.get '*', (req, res) ->
    newUrl = req.protocol + '://' + req.get('Host') + '/#' + req.url
res.redirect newUrl

exports.startServer = (port, path, callback) ->
    p = process.env.PORT || port
console.log "Starting server on port: #{p}, path /#{path}"
app.listen p
if callback?
    callback app

    if process.env.PORT
        this.startServer(process.env.PORT, "dist")