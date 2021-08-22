const api = require('express').Router();;

const saveNote = require('../helpers/saveNote');
const deleteNote = require('../helpers/deleteNote');
const getNote = require('../helpers/getNote');

api.post("/notes", saveNote);

api.delete("/notes/:id", (req, res) => {
    
    deleteNote(req.params.id);
    res.json(`Deleted ${req.params.id}`)
});

api.get("/notes", getNote);

module.exports = api;