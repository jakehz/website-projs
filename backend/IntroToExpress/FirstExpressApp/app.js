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
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    res.send("Woof");
    console.log("someone made a request to dog!");
});
app.listen(8000, function() {
    console.log("Server has started!");
});