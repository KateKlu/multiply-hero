import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';
import NumberButton from '../components/NumberButton';
import PageTitle from '../components/PageTitle';

import backIcon from '../assets/icons/back.png';

const btnColors = [
   '#FB8313',
   '#1CBC50',
   '#F86837',
   '#4F5DDC',
   '#FB8313',
   '#1CBC50',
   '#F86837',
   '#4F5DDC',
];

export default function LearnPage() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <div className="flex flex-col items-center mb-6">
            <PageTitle part1="Select a" part2=" number" />
         </div>

         <div className="w-full max-w-sm space-y-4">
            <div className="mb-7 mPlusFont">
               {btnColors.map((color, index) => {
                  const btnNumber = (index + 2).toString();
                  return (
                     <Link
                        key={btnNumber}
                        to={`/learn-play/learn/${btnNumber}`}
                     >
                        <NumberButton
                           text={btnNumber}
                           bgColor={color}
                           withStroke
                        />
                     </Link>
                  );
               })}
            </div>

            <Link to="/learn-play">
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
