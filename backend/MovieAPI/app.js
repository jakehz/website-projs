var express = require("express");
var app = express();
// assume ejs file format 
app.set("view engine", "ejs");

// home route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(8000, () => {
    console.log("Server has started");
});