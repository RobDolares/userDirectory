const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data');
const app = express();

//tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//static files
app.use(express.static('public'));

app.get('/home', function(req, res) {
  res.render('home', data)
})

app.get('/bio/:user', function(req, res) {
  let userName = req.params.user;
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].username === userName) {
      res.render('bio', data.users[i]);
    }
  }
});

app.listen(3000, function() {
  console.log('Successfully started express application!');
})


// app.get('/food/:fruit', function(req, res){
//
//   res.render('fruits', {
//     fruit: req.params.fruit
//   });
//
// })
