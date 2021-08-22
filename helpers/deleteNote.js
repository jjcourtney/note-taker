
const { readFromJson, addNoteToJson } = require('./fsUtils')

const deleteNote = id => {

    const file = './db/db.json';
    readFromJson(file)
    .then((data) => JSON.parse(data))
    .then((json) => {
      
      const result = json.filter((note) => note.id !== id);


      addNoteToJson(file, result);


      return `Notes with the id ${id} have been deleted 🗑️`;
    });

}

module.exports = deleteNote;