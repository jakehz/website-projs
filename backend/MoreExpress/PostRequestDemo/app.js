var express = require("express");
var app = express();

app.use(express.json({type: 'application/json'}));
// set express to look for ejs files
app.set("view engine", "ejs");

// default route
app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req,res){
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
   
    console.log(req.body);
    res.send("You have attempted to add a friend");
})
// server listen
app.listen(8000, function(){
    console.log("Server started.")
});