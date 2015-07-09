var express = require('express');
var router = express.Router();

var quizCotroller = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nod_1' });
});


router.get('/quizer/question', quizController.question);
router.get('/quizer/answer', quizController.answer);


module.exports = router;
