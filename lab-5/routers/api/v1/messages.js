const express = require('express');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages.js');

// GET:     /api/v1/messages - geeft messages terug
router.get('/', messagesController.getAll);

// GET:     /api/v1/messages/:id - geeft message met specifiek ID terug
router.get('/:id', messagesController.getOne)

// POST:    /api/v1/messages - kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
router.post('/', messagesController.postAll)

// PUT:     /api/v1/messages/:id - kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
router.put('/:id', messagesController.update)

// DELETE:  /api/v1/messages/:id - kan een message met id verwijderen en geeft een response terug
router.delete('/:id', messagesController.remove)

// GET:     /api/v1/messages?user=username - kan berichten teruggeven voor een bepaalde username
// router.get('/api/v1/messages?user=:username', (req, res) =>{
//     res.send("get message of " + req.params.username);
// })

module.exports = router;