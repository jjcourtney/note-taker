const { readFromJson } = require('./fsUtils')

const getNote = (req, res)=> {

    readFromJson('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));

}

module.exports = getNote;