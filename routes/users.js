var express = require('express');
var router = express.Router();
var times = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(times++,'User accesses are:',times++);
});

module.exports = router;
navigator