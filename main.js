//TODO: Create an array variable that will store the user's post
// This post[] will store objects that will be the equivalent to a post

//TODO: populate this array belo from the post text input & your name input
//the array should populate once the user has filled in both fields and pressed the post button
var posts = [];


//TODO: Create global variables using jquery to get the element
//TODO: Use the global variables to listen for events
$('#post-button').on('click', function () {
    addPost();
});

function addPost() {
    //TODO: Grab the data from both input fields
    var postText = $('#post-text').val();
    var usernamePost = $('#post-username').val();
    // console error if postText or usernamePost return undefined
    if (postText === "" || usernamePost === "") {
        alert('Please fill out BOTH the Post Text & Username field!');
        throw new Error('Please fill out BOTH the Post Text & Username field!');
    }
    // Create a counter
    var postCount = posts.length + 1;
    // TODO: Create a object that will store the values that were just retrieved
    var post = {
        id: 'post-' + postCount,
        text: postText,
        user: usernamePost,
        postComment: [],
    }

    //Now push the newPost {} into the posts []
    posts.push(post);

    // Added post to the DOM
    $('.posts').prepend('<div id="' + post.id + '" class="post">' + postText + '<br>' + 'Posted By: ' + usernamePost + '</div>');
    //This creates the comment container 
    $('.post').append("<div class='comment-container form-group'></div>");
    //Elements within the comment container
    $('.comment-container').append('<div class="posted-comments"></div>');
    $('.comment-container').append('<input type="text" class="comment-text form-control col-xs-3" placeholder="Comment Text" aria-label="Small">');
    $('.comment-container').append('<input type="text" class="comment-username form-control col-xs-3" placeholder="Username" aria-label="Small">');
    $('.comment-container').append('<button class="comment-button btn btn-default btn-primary">Comment</button>');
}

// This piece below is commented out because it is for future use
$('#comment-button').on('click', function () {
    //TODO: Grab both input field from the comment-container class to store
    var commentText = $('#comment-text').val();
    var commentUsername = $('#comment-username').val();
    // console error if postText or usernamePost return undefined
    if (commentText === "" || commentUsername === "") {
        console.error('Please fill out BOTH the Comment Text & Username field!')
        alert('Please fill out BOTH the Comment Text & Username field!')
        // return false
    } else {
        // TODO: Create a object that will store the values that were just retrieved
        var newComment = {
            commentText: commentText,
            commentUser: commentUsername
        }

        //forEach loop
        posts.forEach(function (post) {
            //Now loop through the newpost key that points to an []
            post.newPost.forEach(function (commentArray) {
                commentArray.push(newComment);
            })
        })
        //TODO: Need a way to push an object to the postComment Key
        // //Now push the newComment {} into the array associate it with the postComment KEY
        // posts.newPost.postComment.push(newComment);
        //Invoke the renderComments function so that our page will update with new comments every time we write one

        // renderComments();
    }





    // newPost.postComment.push(newComment);
});

console.log(posts)
//There needs to be a render Comment function just like the render post 

var renderComments = function () {
    // Clear posted comment sections
    $('#posted-comment-section').empty();
    // posts.postComment.forEach(function(comment) {
    //     $('#posted-comment-section').append(<p class="posted-comments"></p>);
    // 

    // })
}
