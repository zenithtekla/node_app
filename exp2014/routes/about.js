var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('p_about.html', {
    title : 'My First Nunjucks Page',
    items : [
      { name : 'item #1' },
      { name : 'item #2' },
      { name : 'item #3' },
      { name : 'item #4' },
    ]
  });
  
  // -= access query object =-
  // so if /about?age=30 is passed, console prints { age: '30' }
  console.log(req.query);
  
  /* 
  router.post .. {
    req.query.name // to access name that is sent through post
  }
  */
});

module.exports = router;