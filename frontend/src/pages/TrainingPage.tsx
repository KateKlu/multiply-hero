import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import NumberButton from '../components/NumberButton';
import heroImage from '../assets/img/girl-cat.png';
import backIcon from '../assets/icons/back.png';
import heartIcon from '../assets/icons/heart.png';

export default function TrainingPage() {
   const exampleLeft = 4;
   const exampleRight = 7;
   const options = [28, 27, 24, 29];
   const lives = 3;
   const score = 10;

   return (
      <div className="min-h-screen flex flex-col bg-[#0275E6] text-[#FDF7CF] p-6">
         <nav className="w-full flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
               <Link to="/learn-play/play">
                  <button className="w-10 h-10 bg-[#F9CA14] border-2 border-[#3D2604] rounded-full shadow-md flex items-center justify-center hover:opacity-80 transition">
                     <img src={backIcon} alt="Back" className="w-6 h-6" />
                  </button>
               </Link>
               {Array.from({ length: lives }).map((_, i) => (
                  <img key={i} src={heartIcon} alt="Life" className="w-8 h-8" />
               ))}
            </div>
            <div className="text-3xl font-bold mPlusFont">{score}</div>
         </nav>

         <div className="flex-1 w-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center mb-15">
               <PageTitle part1="How" part2=" much?" />
            </div>

            <div className="w-full max-w-sm bg-[#FDF7CF] text-[#0275E6] rounded-2xl py-3 px-6 mb-10 flex justify-center items-center text-5xl font-extrabold mPlusFont shadow-md">
               {exampleLeft} <span className="mx-2">×</span> {exampleRight}
            </div>

            <div className="w-full max-w-sm grid grid-cols-2 gap-x-2 gap-y-1 mb-10">
               {options.map((num, idx) => (
                  <NumberButton
                     key={idx}
                     text={num.toString()}
                     bgColor="#FB8313"
                  />
               ))}
            </div>

            <img
               src={heroImage}
               alt="Superheroes"
               className="w-full max-w-xs"
            />
         </div>
      </div>
   );
}
