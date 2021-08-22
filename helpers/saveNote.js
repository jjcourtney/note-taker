
const fs = require('fs');


const addNoteToJson = (file, noteContent) =>
  fs.writeFile(file, JSON.stringify(noteContent, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${file}`)
  );

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