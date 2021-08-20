const path = require('path');

const saveNote = (req, res) => {
    //console.log("save res", res);
    console.log("save req", req.body);
    res.json("nice one")

}

module.exports = saveNote;