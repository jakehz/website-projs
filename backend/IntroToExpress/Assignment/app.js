// get express fn
var express = require("express");
// get express object returned
var app = express();

app.get("/", function(req, res){
    res.send("Hello, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Bark"
    }
    if (sounds[animal]){
        res.send(sounds[animal]);
    } else {
        res.send("Sorry, I don't know that animal...");
    }
});

app.get("/repeat/:word/:num", function(req, res){
    var num = Number(req.params.num);
    var msg = "";
    var word = req.params.word;
    for (var i = 0; i < num; i++){
        msg += (word + " ");
    }
    res.send(msg);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});
app.listen(8000, function(){
    console.log("Server Started");
})