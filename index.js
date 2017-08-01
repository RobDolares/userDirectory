const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const bioRoutes = require('./routes/bio')
const rootRoutes = require('./routes/root')

//tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//static files
app.use(express.static('public'));

//Need to replace "null" value for string



app.use('/', rootRoutes);

app.use('/bio', bioRoutes);

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
