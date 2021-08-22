
const { readFromJson, addNoteToJson } = require('./fsUtils')

const deleteNote = title => {

    const file = './db/db.json';
    readFromJson(file)
    .then((data) => JSON.parse(data))
    .then((json) => {
      
      const result = json.filter((note) => note.title !== title);


      addNoteToJson(file, result);


      res.json(`Notes with the title ${title} have been deleted 🗑️`);
    });

}

module.exports = deleteNote;