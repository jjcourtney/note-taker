const express = require('express');

const api = require('./routes/api');
const homepage = require('./routes/index');

const PORT = process.env.port || 3001;

const app = express();

// Middleware being parsed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use(homepage)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);