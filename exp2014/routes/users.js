var express = require('express'),
    mongoose = require("mongoose");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('users').find(function(err, users){
        if(err) console.dir(err);
        else {
            console.log(users);
            res.render('users', {users: users});
        }
    });
});

module.exports = router;
