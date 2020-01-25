//TODO: Create an array variable that will store the user's post
// This post[] will store objects that will be the equivalent to a post

//TODO: populate this array belo from the post text input & your name input
//the array should populate once the user has filled in both fields and pressed the post button
var posts = [];

//TODO: Create global variables using jquery to get the element
//TODO: Use the global variables to listen for events
var postButton = $('#post-button').on('click', function () {
    //TODO: Grab the data from both input fields
    var postText = $('#post-text').val();
    var usernamePost = $('#post-username').val();
    // console error if postText or usernamePost return undefined
    if (postText === "" || usernamePost === "") {
        console.error('Please fill out BOTH the Post Text & Username field!')
        alert('Please fill out BOTH the Post Text & Username field!')
        return false
    } else {
        // TODO: Create a object that will store the values that were just retrieved
        var newPost = {
            text: postText,
            user: usernamePost,
            postComment: []
        }
        //TODO: Need a way to push an object to the postComment Key
        var newComment = {
            commentText: 'Hello',
            commentUser: 'Ben'
        }
        //Now push the newPost {} into the posts []
        posts.push(newPost); 
        //Now push the newComment {} into the array associate it with the postComment KEY
        newPost.postComment.push(newComment);
        //Invoke the renderPosts function so that our page will update with ne post every time we write one
        renderPosts();
        return true
    }
});

//TODO: Create a renderPosts function
var renderPosts = function() {
    //Clear posts div for re-rendering 
    $('.posts').empty();
    // Create a for each loop that will allow the page to render all the objects within the posts []
    return posts.forEach(function(post) {
        // input values fo the post text and Username
        var postText = post.text;
        var postUser = post.user;
        $('.posts').append("<div class='post'>" + postText + "<br>" + "Posted By: " + postUser + "</div>");
        //This creates the comment container 
        $('.post').append("<div class='comment-container form-group'></div>");
        // The renderComment should be invoked every time this forEach method is run
        renderComment();
    });
}

// This piece below is commented out because it is for future use
// var commentButton = $('.comment-container').on('click', '#comment-button', function () {});


//There needs to be a render Comment function just like the render post 

var renderComment = function() {
    // Clear comment container div  for re rendering
    $('.comment-container').empty();

    //Below is the comment container that is added every time a post is rendered to the page
    $('.comment-container').append('<input id="comment-text" type="text" class="form-control col-xs-3" placeholder="Comment Text" aria-label="Small">');
    $('.comment-container').append('<input id="comment-username" type="text" class="form-control col-xs-3" placeholder="Username" aria-label="Small">');
    $('.comment-container').append('<button id="comment-button" class="btn btn-default btn-primary">Comment</button>');

     // posts.postComment.forEach(function(comment) {
        //     $('.post').append("<div class='comment-container'>" + comment + "</div>");


        // })
}
