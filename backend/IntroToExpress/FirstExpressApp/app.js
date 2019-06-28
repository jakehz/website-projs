var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("hi there");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("goodbye");
});
// "/dog" => "Woof!"
app.get("/dog", function(req, res) {
    res.send("Meow");
    console.log("someone made a request to dog!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to " + subreddit);
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    res.send("Welcome to the comments page!");
})
app.get("*", function(req, res){
    res.send("404 Not found");
});


app.listen(8000, function() {
    console.log("Server has started!");
});