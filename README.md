# MEAN Social Media

* local folder name: meansocialapp

## The Steps

Create new folder named app

Create new folder named server

Create new file named index.html and write basic syntax bellow:

	<html>
	<head>
		<meta charset="UTF-8">
		<title>Mean Social Media</title>
	</head>
	<body>
		<h1>MEAN Social Media</h1>
	</body>
	</html>

Create new file named package.json, and write basic syntax bellow:

	{
	  "name": "Mean SosMed",
	  "version": "0.0.1"
	  
	}

Create new file name server.js, and write syntax as bellow:

### Install Dependencies

Install Express

	npm install express --save

Install mongoose 

	npm install mongoose --save

Install boody parser

	npm install body-parser --save

Edit file server.js:

	var express 	= require('express');
	var mongoose	= require('mongoose');
	var bodyParser	= require('body-parser');

	var app = express();

	app.get('/', function (req, res) {
	   res.sendfile('index.html');
	});

	app.listen(3000, function() {
		console.log('This is running on port 3000');
	});

Refresh server and open localhost:3000 >> it's work!

### Install MongoDB

Install mongodb in your computer

	https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

Run mongodb:

	--dbpath ~~/data/db

Open another terminal, to open mongo command:

	mongo

It will run mongo command, do bellow command:

Create new database:

	use databasename 

	use time-waste

### Connect to database:

Open file server.js

	mongoose.connect('mongodb://localhost:27017/time-waste');

### Setup Dataset

Create new folder inside server folder named datasets

Inside folder datasets create new file named user.js

In user.js give this code:

	var mongoose = require('mongoose');
	module.export = mongoose.model('user', {
		email: String,
		password: String
	});	

### Setup Angular (tobe continue) 	