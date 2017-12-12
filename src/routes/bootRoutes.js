var express = require('express');
var app = express();
var bootRouter = express.Router();

bootRouter.route('/').get(function(req, res) {
    res.render('boot');
});

module.exports = bootRouter;