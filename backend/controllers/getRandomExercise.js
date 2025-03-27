const exercises = require('../data/exercises');

const getRandomExercise = (req, res) => {
   const randomExercise =
      exercises[Math.floor(Math.random() * exercises.length)];
   res.json(randomExercise);
};

module.exports = getRandomExercise;
