
const express = require('express');
const routes = express.Router();
const data = require('../data');

routes.get('/:user', function(req, res) {
  let userName = req.params.user;
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].username === userName) {
      res.render('bio', data.users[i]);
    }
  }
});

module.exports = routes;
