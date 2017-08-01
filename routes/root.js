const express = require('express');
const routes = express.Router();
const data = require('../data');



for (let i = 0; i < data.users.length; i++){
  if(data.users[i].job === null){
    data.users[i].job = "Available for hire";
  }
};

routes.get('/', function(req, res) {
  res.render('home', data)
})


module.exports = routes;
