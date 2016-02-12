var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function(req, res) {
    res.sendFile(process.cwd() + '/views/login.html');
});

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + 'home.html');
});    

app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + '/views/help.html');
});

app.post('/login', function(res, res) {
  console.log(req.body);
});

app.listen(Port, function() {
  console.log('App listening on port %s', PORT);
});

