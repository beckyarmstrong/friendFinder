
var express = require('express');
var bodyParser = require('body-parser');

// starts express

var app = express();
var PORT = process.env.PORT || 3000;

// parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// listen
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

// route
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
