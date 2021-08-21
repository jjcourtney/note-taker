const express = require('express');


const saveNote = require('./helpers/saveNote');
const deleteNote = require('./helpers/deleteNote');
const getNote = require('./helpers/getNote');


const PORT = process.env.port || 3001;

const app = express();

// Middleware being parsed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/notes", getNote);

app.post("/api/notes", saveNote);

app.delete("/api/notes/:id", (req, res) => {
    
    deleteNote(req.params.id);
    res.json("Deleted", req.params.id)
});






app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);