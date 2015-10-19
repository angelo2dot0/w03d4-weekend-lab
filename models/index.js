//index.js file should require mongoose and connect to your app's mongoose db.

//Modify models/index.js to have it incorporate your Post model. It will need to:
// require your model from the other file

var mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost/w03d4-weekend-lab');
// add your model to index.js's module.exports
module.exports.Post = require('./post.js');


