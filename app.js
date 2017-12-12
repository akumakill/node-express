var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

//setup statics files and view engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

//setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes js
var mainRouter = require('./src/routes/mainRoutes');
app.use('/', mainRouter);

var itemRouter = require('./src/routes/itemRoutes');
app.use('/items', itemRouter);

var bootRouter = require('./src/routes/bootRoutes');
app.use('/boot', bootRouter);

//set server listening port
app.listen(port, function() {
    console.log('Server is running on port: ' + port);
});

//connect to mongose DB
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://mdb_admin:abc123@ds137686.mlab.com:37686/jc_test', {
        useMongoClient: true,
    }).then(function() { // if all is ok we will be here
        console.log('Connected to mongoose db');
    })
    .catch(function(err) { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });