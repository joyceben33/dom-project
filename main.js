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
    var usernamePost = $('#username-post').val();
    // console error if postText or usernamePost return undefined
    if (postText === "" || usernamePost === "") {
        console.error('Please fill out BOTH the Post Text & Username field!')
        alert('Please fill out BOTH the Post Text & Username field!')
    } else {
        // TODO: Create a object that will store the values that were just retrieved
        var newPost = {
            text: postText,
            user: usernamePost,
        }
        //Now push the newPost {} into the posts []
        posts.push(newPost); 
        //Invoke the renderPosts function so that our page will update with ne post every time we write one
        renderPosts();
    }
});

//TODO: Create a renderPosts function
var renderPosts = function() {
    //Clear DOM for re-rendering 
    $('.posts').empty();
    // Create a for each loop that will allow the page to render all the objects within the posts []
    return posts.forEach(function(post) {
        var postText = post.text;
        var postUser = post.user;
        $('.posts').append("<div class='post'>" + postText + " user: " + postUser + "</div>");
    });
}

// This piece below is commented out because it is for future use
// var commentButton = $('#comment-button').on('click', '.post', function () {});
