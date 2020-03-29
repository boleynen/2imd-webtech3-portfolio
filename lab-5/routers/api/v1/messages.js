const express = require('express');
const router = express.Router();


// GET:     /api/v1/messages - geeft messages terug
router.get('/', (req, res) =>{
    res.send("get messages");
})

// GET:     /api/v1/messages/:id - geeft message met specifiek ID terug
router.get('/:id', (req, res) =>{
    res.send("get message " + req.params.id);
})

// POST:    /api/v1/messages - kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
router.post('/', (req, res) =>{
    res.send("post messages");
})

// PUT:     /api/v1/messages/:id - kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
router.put('/:id', (req, res) =>{
    res.send("Update message " + res.params.id);
})

// DELETE:  /api/v1/messages/:id - kan een message met id verwijderen en geeft een response terug
router.delete('/:id', (req, res) =>{
    res.send("Delete message " + req.params.id);
})

// GET:     /api/v1/messages?user=username - kan berichten teruggeven voor een bepaalde username
// router.get('/api/v1/messages?user=:username', (req, res) =>{
//     res.send("get message of " + req.params.username);
// })

module.exports = router;