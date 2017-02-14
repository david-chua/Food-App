var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var auth = require('../helpers/auth.js')
var User = require('../models/user.js');

router.post('/login', auth.loginUser, function(req, res) {
    console.log('sessions', req.session.currentUser);
    res.json({
        status: 200,
        data: req.session.currentUser
    });
});

router.delete('/', function(req, res) {
    req.session.destroy(function() {
        res.json({
            status: 204,
            message: 'destroyed'
        });
    });
});


module.exports = router;
