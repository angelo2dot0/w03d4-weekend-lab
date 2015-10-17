//SERVER SIDE JAVASCRIPT

//requires express and body-parser modules to start
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//configuration section
//cofigures app to use ejs as the view engine
app.set('view engine', 'ejs');

//updates app's GET '/' route to render index.ejs as its response
app.get('/', function (req, res) {
	res.render('index');
});
//REVIEW THE ABOVE, DOUBLE CHECK INCLUDING THE OBJECT LIKE {posts: posts} AFTER "INDEX"!!!

//configures app to serve the static assets from public dir
app.use(express.static('public'));


//route to handle GET requests at the '/' path
app.get('/', function(req, res) {
res.send("Hello World");
});




//sets up server to listen on a port
var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('sanity check app listening on port', port);
});


