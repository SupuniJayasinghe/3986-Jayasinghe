const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('3986-Jayasinghe-Assignment-2');
});
module.exports = app;
