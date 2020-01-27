
    //TODO: Create an array variable that will store the user's post
    // This post[] will store objects that will be the equivalent to a post

    //TODO: populate this array belo from the post text input & your name input
    //the array should populate once the user has filled in both fields and pressed the post button
    var posts = [];
    // var $commentBtn;
    // getDomState();
    //TODO: Create global variables using jquery to get the element
    //TODO: Use the global variables to listen for events
    $('#post-button').click(function () {
        addPost();
    });

    function addPost() {
        //TODO: Grab the data from both input fields
        var $postText = $('#post-text').val();
        var $usernamePost = $('#post-username').val();
        // console error if postText or usernamePost return undefined
        if ($postText === "" || $usernamePost === "") {
            alert('Please fill out BOTH the Post Text & Username field!');
            throw new Error('Please fill out BOTH the Post Text & Username field!');
        }
        // Create a counter
        var postCount = posts.length + 1;
        // TODO: Create a object that will store the values that were just retrieved
        var post = {
            id: 'post-' + postCount,
            text: $postText,
            user: $usernamePost,
            postComment: [],
        }

        //Now push the newPost {} into the posts []
        posts.push(post);

        // Added post to the DOM
        $('.posts').prepend('<div id="' + post.id + '" class="post">' + post.text + '<br>' + 'Posted By: ' + post.user + '</div>');
        //This creates the comment container 
        $('#' + post.id).append("<div class='comment-container form-group'></div>");
        //Elements within the comment container
        $('#' + post.id).find('.comment-container').append('<div class="posted-comments"></div>');
        $('#' + post.id).find('.comment-container').append('<input type="text" class="comment-text form-control col-xs-3" placeholder="Comment Text" aria-label="Small">');
        $('#' + post.id).find('.comment-container').append('<input type="text" class="comment-username form-control col-xs-3" placeholder="Username" aria-label="Small">');
        $('#' + post.id).find('.comment-container').append('<button class="comment-button btn btn-default btn-primary">Comment</button>');
        // TODO: update DOM state
        // getDomState();
    }

    // This piece below is commented out because it is for future use
    $(document).on('click','.comment-button', function () {
        //TODO: Grab both input field from the comment-container class to store
        var $commentBtn = $(this);
        var commentText = $commentBtn.siblings('.comment-text').val();
        var commentUsername = $commentBtn.siblings('.comment-username').val();
        // console error if postText or usernamePost return undefined
        if (commentText === "" || commentUsername === "") {
            alert('Please fill out BOTH the Comment Text & Username field!');
            throw new Error('Please fill out BOTH the Comment Text & Username field!');
            // return false
        }
        // TODO: Create a object that will store the values that were just retrieved
        var newComment = {
            commentText: commentText,
            commentUser: commentUsername
        }

        //TODO: push comment correct post
        var postID = $commentBtn.closest('.post').attr('id');

        //TODO: Filter Posts Array to find correct post matching this id 
        var filteredPost = posts.filter(function (post) {
            return post.id === postID
        })

        //TODO: push newComment obj to post comment key that point to an array
        filteredPost[0].postComment.push(newComment);

        //TODO: Append new comment to the Dom
        $commentBtn.siblings('.posted-comments').append('<p>' + commentText + ' Posted By:' + commentUsername + '</p>');
    });

    //TODO: Create a function that updates the DOM state

    // function getDomState() {
    //     $commentButton = $('.comment-button');

    // }
