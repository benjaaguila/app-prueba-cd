const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

app.get('/healthcheck', (req, res) => {
  res.json({ message: 'Server is up and running' });
});

// POST endpoint
app.post('/', (req, res) => {
  const requestBody = req.body;
  res.json({ message: 'Received POST request', requestBody });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
