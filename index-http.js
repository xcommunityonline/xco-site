var fs = require('fs');
var http = require('http');
var https = require('https');
//var privateKey  = fs.readFileSync('host.key', 'utf8');
//var certificate = fs.readFileSync('host.cert', 'utf8');

//var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("home",{
    })
});

app.get('/', function(req, res) {
    res.render("home",{
    })
});

app.get('/about', function(req, res) {
    res.render("about",{
    })
});

app.get('/minecraft', function(req, res) {
    res.render("minecraft",{
    })
});


var httpServer = http.createServer(app);
//ar httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
//httpsServer.listen(8443);