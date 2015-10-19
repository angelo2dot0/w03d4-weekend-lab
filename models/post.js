var mongoose = require ("mongoose");

var Schema = mongoose.Schema;
var postSchema = new Schema({
	body: String,
	completed: Boolean
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

