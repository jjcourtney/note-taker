const path = require('path');

const saveNote = (req, res) => {
   
    console.log("save req", req.body);
    res.json("Save request successful")
}

module.exports = saveNote;