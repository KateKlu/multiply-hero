import { useState } from 'react';

interface Exercise {
   id: number;
   question: string;
   answer: number;
}

const Training = () => {
   const [exercise, setExercise] = useState<Exercise | null>(null);
   const [userAnswer, setUserAnswer] = useState<string>('');
   const [feedback, setFeedback] = useState<string>('');

   const fetchExercise = async () => {
      try {
         const response = await fetch('http://localhost:5000/api/exercise');
         const data: Exercise = await response.json();
         setExercise(data);
         setFeedback('');
         setUserAnswer('');
      } catch (error) {
         console.log('Error fetching exercise', error);
      }
   };

   const checkAnswer = () => {
      console.log(userAnswer);
      if (!exercise) return;
      if (parseInt(userAnswer) === exercise.answer) {
         setFeedback('Correct!');
      } else {
         setFeedback('Wrong, try again');
      }
   };

   return (
      <div>
         {!exercise ? (
            <button onClick={fetchExercise}>Training</button>
         ) : (
            <div>
               <p>{exercise.question}</p>
               <form onSubmit={checkAnswer}>
                  <input
                     type="string"
                     value={userAnswer}
                     autoComplete="off"
                     autoFocus
                     onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  <input type="submit" value="Submit" />
               </form>
               {feedback && <p>{feedback}</p>}
            </div>
         )}
      </div>
   );
};

export default Training;
