// run nodemon: npm run start


const express = require('express')
const app = express()
const port = 3000

// show homepage
app.get('/', (req, res) => res.send('Hello World!'))

// GET:     /api/v1/messages - geeft messages terug
app.get('/api/v1/messages', (req, res) =>{
    res.send("get messages");
})

// GET:     /api/v1/messages/:id - geeft message met specifiek ID terug
app.get('/api/v1/messages/:id', (req, res) =>{
    res.send("get message " + req.params.id);
})

// POST:    /api/v1/messages - kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
app.post('/api/v1/messages', (req, res) =>{
    res.send("post messages");
})

// PUT:     /api/v1/messages/:id - kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
app.put('/api/v1/messages/:id', (req, res) =>{
    res.send("Update message " + res.params.id);
})

// DELETE:  /api/v1/messages/:id - kan een message met id verwijderen en geeft een response terug
app.delete('/api/v1/messages/:id', (req, res) =>{
    res.send("Delete message " + req.params.id);
})

// GET:     /api/v1/messages?user=username - kan berichten teruggeven voor een bepaalde username
app.get('/api/v1/messages?user=:username', (req, res) =>{
    res.send("get message of " + req.params.username);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
