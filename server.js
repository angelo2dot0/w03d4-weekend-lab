//SERVER SIDE JAVASCRIPT

//requires express and body-parser modules to start
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

//configuration section
//cofigures app to use ejs as the view engine
app.set('view engine', 'ejs');

//configures app to serve the static assets from public dir
app.use(express.static('public'));

var db = require('./models');

//updates app's GET '/' route to render index.ejs as its response
app.get('/', function (req, res) {
	db.Post.find({}, function (err, posts) {
	  console.log('here are the posts: ', posts);
	  res.render('index', {postArray: posts});	
	});
});
//REVIEW THE ABOVE, DOUBLE CHECK INCLUDING THE OBJECT LIKE {posts: posts} AFTER "INDEX"!!!

//route to handle GET requests at the '/' path
// //app.get('/', function(req, res) {
// res.send("Hello World");
// });

//routes section
//GET /api/posts
app.get("/api/posts", function (req, res) {
	res.json(postArray);
});
//GET /api/posts/:id
app.get("/api/posts/:id", function (req, res) {
	res.json(postArray[i].id);
});
//POST /api/posts
app.post("/api/posts", function(req, res) {
	var newPost = req.body;
	if (postArray.length !== 0) {
		newPost.id = postArray[postArray.length -1].id + 1;
	} else {
		newPost.id = 0;
	}
postArray.push(newPost);
res.json(newPost);
});

//PUT /api/posts/:id
app.patch("/api/postArray/:id", function(req, res) {
	var targetId = parseInt(req.params.id);
	var targetItem = findWhere(postArray, {id: targetId});
	targetItem.postItem = req.body.postItem || targetItem.postItem;
	res.json(targetItem);
});

//DELETE /api/posts/:id
app.delete("/api/posts/:id", function(req,res) {
	var targetId = parseInt(req.params.id);
	var targetItem = findWhere(posts, {id: targetId});
	var index = postArray.indexOf(targetItem);
	postArray.splice(index, 1);
	res.json(targetItem);
});

app.post('/postArray', function (req, res) {
	//console.log(req.body);
	var postArray = req.body;
	postArray.push(postArray);
res.sendStatus(200).json(postArray);
});

//sets up server to listen on a port
var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('sanity check app listening on port', port);
});


