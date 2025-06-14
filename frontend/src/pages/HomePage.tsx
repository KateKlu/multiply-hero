import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';

import playIcon from '../assets/icons/play.png';
import profileIcon from '../assets/icons/profile.png';
import fixIcon from '../assets/icons/fix.png';
import trophyIcon from '../assets/icons/trophy.png';
import loginIcon from '../assets/icons/login.png';
import heroImage from '../assets/heroes/boy.png';

import '../index.css';

export default function HomePage() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <div className="w-full max-w-sm flex mb-3 items-center">
            <h1 className=" item-left uppercase stroke-text font-black flex-3/5">
               <span className="text-[2.75rem] text-[#EEC520] leading-none block">
                  Multiply
               </span>
               <span className="text-[4rem] leading-none block">Hero</span>
            </h1>
            <img
               src={heroImage}
               alt="Superboy"
               className="flex-2/5 max-w-2/5"
            />
         </div>

         <div className="w-full max-w-sm space-y-4 ">
            <Link to="/learn-play">
               <MenuButton
                  icon={playIcon}
                  text="Learn & Play"
                  bgColor="#FB8313"
               />
            </Link>
            <Link to="/my-profile">
               <MenuButton
                  icon={profileIcon}
                  text="My Profile"
                  bgColor="#1CBC50"
               />
            </Link>
            <Link to="/fix-it">
               <MenuButton icon={fixIcon} text="Fix It!" bgColor="#F86837" />
            </Link>
            <Link to="/leaderboard">
               <MenuButton
                  icon={trophyIcon}
                  text="Leaderboard"
                  bgColor="#4F5DDC"
               />
            </Link>
            <Link to="/login">
               <MenuButton
                  icon={loginIcon}
                  text="Login"
                  bgColor="#F9CA14"
                  textColor="#063F74"
               />
            </Link>
         </div>
      </div>
   );
}
