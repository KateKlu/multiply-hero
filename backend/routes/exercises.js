const express = require('express');
const getRandomExercise = require('../controllers/getRandomExercise');

const router = express.Router();

router.get('/exercise', getRandomExercise);

module.exports = router;
