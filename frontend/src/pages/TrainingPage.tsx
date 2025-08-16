import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import {
   generateTrainingExamples,
   Example,
} from '../utils/generateTrainingExamples';
import PageTitle from '../components/PageTitle';
import NumberButton from '../components/NumberButton';
import InfoModal from '../components/InfoModal';
import heroImage from '../assets/img/girl-cat.png';
import backIcon from '../assets/icons/back.png';
import heartIcon from '../assets/icons/heart.png';

export default function TrainingPage() {
   const { numbers } = useParams<{ numbers: string }>();

   const questions: Example[] = useMemo(() => {
      const selected = numbers ? numbers.split(',') : [];
      return generateTrainingExamples(selected);
   }, [numbers]);

   const [currentIdx, setCurrentIdx] = useState(0);
   const [score, setScore] = useState(0);
   const [lives, setLives] = useState(3);
   const [chosen, setChosen] = useState<number | null>(null);
   const [showFinish, setShowFinish] = useState(false);

   const navigate = useNavigate();
   const question = questions[currentIdx];

   function handleAnswer(option: number) {
      if (chosen !== null) return;
      setChosen(option);

      const isCorrect = option === question.correct;
      if (isCorrect) {
         setScore((s) => s + 1);
      } else {
         setLives((l) => l - 1);
      }

      setTimeout(() => {
         const newLives = lives - (isCorrect ? 0 : 1);
         const isLast = currentIdx === questions.length - 1;

         if (newLives <= 0 || isLast) {
            setShowFinish(true);
         } else {
            setCurrentIdx((i) => i + 1);
            setChosen(null);
         }
      }, 1200);
   }

   function handleClose() {
      setShowFinish(false);
      navigate('/learn-play');
   }

   return (
      <div className="min-h-screen flex flex-col bg-[#0275E6] text-[#FDF7CF] p-6">
         <nav className="w-full flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
               <Link to="/learn-play/play">
                  <button
                     className="w-10 h-10 bg-[#F9CA14] border-2 border-[#3D2604]
                               rounded-full shadow-md flex items-center justify-center
                               hover:opacity-80 transition"
                  >
                     <img src={backIcon} alt="Back" className="w-6 h-6" />
                  </button>
               </Link>
               {Array.from({ length: lives }).map((_, i) => (
                  <img key={i} src={heartIcon} alt="Life" className="w-8 h-8" />
               ))}
            </div>
            <div className="text-3xl font-bold mPlusFont">{score}</div>
         </nav>

         {!showFinish && (
            <div className="flex-1 flex flex-col items-center justify-center">
               <div className="flex flex-col items-center mb-8">
                  <PageTitle part1="How" part2=" much?" />
               </div>

               <div className="w-full max-w-sm">
                  <div
                     className="bg-[#FDF7CF] text-[#0275E6]
                            rounded-2xl py-3 px-6 mb-6
                            flex justify-center items-center
                            text-5xl font-extrabold mPlusFont shadow-md"
                  >
                     {question.left}
                     <span className="mx-2">×</span>
                     {question.right}
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                     {question.options.map((opt, idx) => {
                        let bg = '#FB8313';
                        if (chosen !== null) {
                           if (opt === question.correct) bg = '#1CBC50';
                           else if (opt === chosen) bg = '#F86837';
                        }
                        return (
                           <NumberButton
                              key={idx}
                              text={opt.toString()}
                              bgColor={bg}
                              onClick={() => handleAnswer(opt)}
                           />
                        );
                     })}
                  </div>
               </div>

               <img
                  src={heroImage}
                  alt="Superheroes"
                  className="w-full max-w-xs mt-10"
               />
            </div>
         )}

         {showFinish && (
            <InfoModal
               text={`Finished! Your score: ${score}`}
               onClose={handleClose}
            />
         )}
      </div>
   );
}
