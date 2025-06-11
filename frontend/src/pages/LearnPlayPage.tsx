import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';
import PageTitle from '../components/PageTitle';

import backIcon from '../assets/icons/back.png';
import learnIcon from '../assets/icons/learning.png';
import playIcon from '../assets/icons/play.png';

import heroImage from '../assets/heroes/girl.png';

export default function LearnPlayPage() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <div className="flex flex-col items-center mb-6">
            <PageTitle part1="Learn &" part2=" Play" />
            <img
               src={heroImage}
               alt="Supergirl"
               className="w-2/3 max-w-sm mt-4"
            />
         </div>

         <div className="w-full max-w-sm space-y-4">
            <Link to="/learn-play/learn">
               <MenuButton icon={learnIcon} text="Learn" bgColor="#1CBC50" />
            </Link>
            <Link to="/learn-play/play">
               <MenuButton icon={playIcon} text="Play" bgColor="#FB8313" />
            </Link>
            <Link to="/">
               <MenuButton
                  icon={backIcon}
                  text="Back"
                  bgColor="#F9CA14"
                  textColor="#063F74"
               />
            </Link>
         </div>
      </div>
   );
}
