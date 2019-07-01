var express = require("express");
var app = express();

app.use(express.urlencoded({extended: true}));
// set express to look for ejs files
app.set("view engine", "ejs");
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
// default route
app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req,res){
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    friends.push(req.body.newfriend);
    res.redirect("/friends");
})
// server listen
app.listen(8000, function(){
    console.log("Server started.")
});