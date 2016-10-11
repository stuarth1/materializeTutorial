const HOST = "0.0.0.0";
const PORT = 8000;

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.use(express.static('public'));

var server = app.listen(8000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
