var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    console.log(req.params);
    res.send(req.params.id, 200);
});

module.exports = router;
