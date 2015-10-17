//SERVER SIDE JAVASCRIPT

//require express and body-parser modules to start
var express = require('express');
//(add or remove var?) var bodyParser = require('body-parser');
var app = express();


//route to handle GET requests at the '/' path
app.get('/', function(req, res) {
res.send("Hello World");
});




//set up server to listen on a port
var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('sanity check app listening on port', port);
});


