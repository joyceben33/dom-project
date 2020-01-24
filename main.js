//TODO: Create an array variable that will store the user's post
// This post[] will store objects that will be the equivalent to a post
//TODO: populate this array belo from the post text input & your name input
//the array should populate once the user has filled in both fields and pressed the post button

var posts = [
    { text: 'hey yall', user: 'Aaron'},
    { text: 'what up', user: 'Cindy'},
    { text: 'Its nice out', user: 'Jake'}
];
$('posts')[0];

//TODO: Create global variables using jquery to get the element
//TODO: Use the global variables to listen for events
var postButton = $('#post-button').on('click', function() {
    //TODO: Grab the data from both input fields
    var postText = $('#post-text').val();
    var usernamePost = $('#username-post').val();
    // console error if postText or usernamePost return undefined
    if(postText === "" || usernamePost === "") {
        console.error('Please fill out BOTH the Post Text & Username field!')
        alert('Please fill out BOTH the Post Text & Username field!')
    } else {
        console.log(postText, usernamePost);
    }
   
    

   
});

var commentButton = $('#comment-button').on('click','button', function() {});

