var express = require('express');
var router = express.Router();

var carController = require('../controllers/carController');
var apiController = require('../controllers/apiController');
var speakOutController = require('../controllers/speakoutController');


// API
router.route('/api/speakout')
  .get(speakOutController.response)

module.exports = router;
