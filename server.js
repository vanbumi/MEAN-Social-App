var express 	= require('express');
var mongoose	= require('mongoose');
var bodyParser	= require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/time-waste');

app.get('/', function (req, res) {
   res.sendfile('index.html');
});

app.listen(3000, function() {
	console.log('This is running on port 3000');
});