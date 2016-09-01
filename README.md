## Usage

var express = require('express');
var settings = require('@kadira/settings')
var app = express();

settings.load(app)

app.get('/', function (req, res) {
  res.send('<html><head><script src="ProjectSettings.js"></script></head><body></body></html>');
});

app.get('/server', function (req, res) {
  res.send(settings.get('resserver'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
