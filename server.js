const express = require('express');
const path = require('path');

const saveNote = require('./helpers/saveNote');
const deleteNote = require('./helpers/deleteNote')

const PORT = process.env.port || 3001;

const app = express();

app.post("/", )







app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);