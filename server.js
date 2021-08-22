const express = require('express');

const api = require('./routes/api');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.static('public'));

// Middleware being parsed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/notes', (req, res) =>{
  console.log("/notes hit")
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);