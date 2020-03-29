// GET:     /api/v1/messages - geeft messages terug
const getAll = (req, res) =>{
    res.json({
        "status": "success",
        "message": "getting messages"
    })
}

// GET:     /api/v1/messages/:id - geeft message met specifiek ID terug
const getOne = (req, res) =>{
    res.json({
        "status": "success",
        "message": "getting message with id " + req.params.id
    })
}

// POST:    /api/v1/messages - kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
const postAll = (req, res) =>{
    res.json({
        "status": "success",
        "message": "posting messages"
    })
}

// PUT:     /api/v1/messages/:id - kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
const update = (req, res) =>{
    res.json({
        "status": "success",
        "message": "updating message with id " + req.params.id
    })
}

// DELETE:  /api/v1/messages/:id - kan een message met id verwijderen en geeft een response terug
const remove = (req, res) =>{
    res.json({
        "status": "success",
        "message": "removing message with id " + req.params.id
    })
}

// GET:     /api/v1/messages?user=username - kan berichten teruggeven voor een bepaalde username

const getAllUser = (req, res) => {
    res.json({
        "status": "success",
        "message": "getting messages from user " + req.params.user
    })
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.postAll = postAll;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getAllUser = getAllUser;

