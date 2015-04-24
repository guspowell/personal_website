var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});

module.exports = server;
