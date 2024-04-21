const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'Title 1',
    },
    {
      id: '2',
      title: 'Title 2',
    },
    {
      id: '3',
      title: 'Title 3',
    },
  ]);
});
module.exports = app;
