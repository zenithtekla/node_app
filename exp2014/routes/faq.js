var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/faq', function(req, res) {
    res.send('ok');
//   res.render('index', { title: 'Express' });
});

module.exports = router;
