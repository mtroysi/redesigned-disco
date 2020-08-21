var express = require('express');
var wiki = require('./wiki.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.use('/wiki', wiki);

module.exports = router;
