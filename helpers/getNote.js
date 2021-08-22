const path = require('path');
const fs = require('fs');
const util = require('util')


const readFromFile = util.promisify(fs.readFile);

const getNote = (req, res)=> {

    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));

}

module.exports = getNote;