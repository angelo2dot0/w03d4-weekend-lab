//CLIENT-SIDE JAVASCRIPT

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// code in here

	// array / model to hold data and also contains seed data
	var postArray = [
		{item: "Wanna go see the Blue Angels this Sunday? Talk to Mary!"},
		{item: "Who is cleaning the apartment this week? John!"}
	];

	// form for new post
	var $newPost = $('#new-post');

	// element for holding list of posts
	var $postList = $('#post-list');

	// append array's seed data to $postList
	for (var i = 0; i < postArray.length; i++) {
		$postList.append('<li class="post">' + postArray[i].item + '</li>');
	}

	// submit form for new post
	$newPost.on('submit', function(event) {
		event.preventDefault();
		// need to grab the form data here
		// before sending it in AJAX request
		text = $(this).serialize();

	$.ajax({
		url: '/api/post',
		type: "POST",
		data: text,
	})
	.done(function(data){
		$(".postArrayList").append('<li class="postArray">' + data.name + ' ----' + data.body + '</li>');
	})
	.fail(function(data){
		console.log(data);
	});

	$.ajax({
		url: '/api/post/:id',
		type: "DELETE",
		data: text,
	});
	done(function(msg) {
		alert("Data deleted: " + msg );
	});
		// create new post object based on data input in the form
		var postItem = $('#post-item').val();
		var postObject = {item: postItem};
		console.log(postItem);
		console.log(postObject);

		// add new post object data into the array / model
		postArray.push(postObject);
		console.log(postArray);

		// add new post object data into the page
		$postList.append('<li class="post">' + postObject.item + '</li>');

		// reset the form
		$newPost[0].reset();
		$('#post-item').focus();
	});
	// add class to post on click event to mark as done 
	$postList.on('click', '.post', function() {
		$(this).addClass('done');
	});
	// add tooltip bootstrap component
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
});
});