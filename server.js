const HOST = "0.0.0.0";
const PORT = 8000;

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/public/" + "about.html");
});
app.get('/page1', (req,res) => {
    res.sendFile(__dirname + "/public/" + "page1.html");
});
app.get('/page2', (req,res) => {
    res.sendFile(__dirname + "/public/" + "page2.html");
});


app.use(express.static('public'));

var server = app.listen(8000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
