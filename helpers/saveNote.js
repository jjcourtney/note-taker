
const fs = require('fs');
const { addNoteToJson } = require('./fsUtils')



const saveNote = (req, res) => {
    const noteContent = req.body;
    const file = "./db/db.json";

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedData = JSON.parse(data);
          parsedData.push(noteContent);
          addNoteToJson(file, parsedData);
        }
      });

    console.log("save req", req.body);
    res.status(418).send("Wrote to file");
}

module.exports = saveNote;