var express = require('express');
var router = express.Router();


var handler = require('../controllers/index') /* GET home page. */
router.get('/', handler.homePage);
/* GET home page. */
/* router.get('/', function(req, res, next) {
    res.render('index.html', { title: 'Express' });
}); */

module.exports = router;