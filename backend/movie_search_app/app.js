var express = require("express");
var request = require("request");

// returns express object
var app = express();

// set templating to look for ejs 
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("search");
});
app.get('/results', (req, res) => {
    var searchTerm = req.query.search;
    if (searchTerm !== "") {
        var requestURL = 'https://omdbapi.com/?s='+ String(searchTerm) + '&apikey=thewdb';
        request(requestURL, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var parsedData = JSON.parse(body);
                if (parsedData["Search"] && parsedData["Search"].length > 0) {
                    res.render("results", {search: parsedData["Search"], term: searchTerm});
                } else {
                    res.send("No results found for that movie.");
                }
            }
        });
    } else {
        res.redirect("/")
    }
});

app.listen(8000, () => {
    console.log("Server started");
});