import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';

import backIcon from '../assets/icons/back.png';

export default function LeaderboardPage() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <h1 className="text-5xl text-[#EEC520] mb-5">Leaderboard</h1>
         <Link to="/">
            <MenuButton icon={backIcon} text="Back" bgColor="#FB8313" />
         </Link>
      </div>
   );
}
