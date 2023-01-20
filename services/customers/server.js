const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to customers service');
  console.log('Welcome to customers service');
});

app.listen(3000, '0.0.0.0', () => console.log('Running on port 3000'));