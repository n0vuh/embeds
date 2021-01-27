var express = require('express');
var router = express.Router();
var qs = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  encodedTitle = qs.escape(req.query.title);
  encodedDescription = qs.escape(req.query.desc);
  actTitle = decodeURIComponent(encodedTitle);
  actDescription = decodeURIComponent(encodedDescription);
  res.render('index', { title: actTitle, desc: actDescription, color: req.query.color, image: req.query.image});
});

module.exports = router;
