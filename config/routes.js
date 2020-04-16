var express = require('express');
var router = express.Router();

var carController = require('../controllers/carController');
var apiController = require('../controllers/apiController');
var assessmentController = require('../controllers/assessmentController');

router.route('/assessment')
  .get(assessmentController.getForm)
  .post(assessmentController.sendAssessment)

router.route('/assessment/success')
  .get(assessmentController.success)

module.exports = router;
