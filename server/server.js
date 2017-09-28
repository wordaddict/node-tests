const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello world')
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Micheal',
      age: 22
    },
    {
      name: 'Bukunmi',
      age: 22
    },
    {
      name: 'Morife',
      age: 23
    }
  ])
});

app.listen(3000);

module.exports.app = app;
