var express = require('express');
var app = express();

// test with hello world
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// show messages from MongoDB
app.get('/messages', function (req, res) {
	res.send("GET messages");
});

// show message with specific ID from MongoDB
app.get('/api/v1/messages/:id', function (req, res) {
	var id = req.params.id;
	res.send("GET message with :id " + id);
});

// gets and saves JSON object and sends new document back
app.post('/api/v1/messages', function (req, res){
	res.send("POST messages");
});

// update a message from MongoDB
app.put("/api/v1/messages/:id", (req, res) => {
    res.send("Update message " + res.params.id);
})

// delete message with specific ID from MongoDB
app.delete("/api/v1/messages/:id", (req, res) => {
    res.send("Delete message " + req.params.id);
})

// shows messages of user with specific ID
app.get("/api/v1/messages?user=:username", (req, res) => {
    res.send("get message of " + req.params.username);
})

// log path to port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
