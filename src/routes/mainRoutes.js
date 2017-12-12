var express = require('express');
var app = express();
var mainRouter = express.Router();

mainRouter.route('/').get(function(req, res) {
    res.render('index');
});

module.exports = mainRouter;