const fs = require('fs');
const util = require('util')

const readFromJson = util.promisify(fs.readFile);

const addNoteToJson = (file, noteContent) =>
  fs.writeFile(file, JSON.stringify(noteContent, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${file}`)
  );

module.exports = {
    readFromJson,
    addNoteToJson
}