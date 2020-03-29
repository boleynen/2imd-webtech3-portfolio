const getAll = (req, res) =>{
    res.send("get messages");
}

const getOne = (req, res) =>{
    res.send("get message " + req.params.id);
}

const postAll = (req, res) =>{
    res.send("post messages");
}

const update = (req, res) =>{
    res.send("Update message " + res.params.id);
}

const remove = (req, res) =>{
    res.send("Delete message " + req.params.id);
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.postAll = postAll;
module.exports.update = update;
module.exports.remove = remove;

