// import { Link } from 'react-router-dom';
// import MenuButton from '../components/MenuButton';

// import backIcon from '../assets/icons/back.png';

// export default function LearnPage() {
//    return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
//          <h1 className="text-5xl text-[#EEC520] mb-5">Learn</h1>
//          <Link to="/learn-play">
//             <MenuButton icon={backIcon} text="Back" bgColor="#FB8313" />
//          </Link>
//       </div>
//    );
// }

import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';
import NumberButton from '../components/NumberButton';
import PageTitle from '../components/PageTitle';

import backIcon from '../assets/icons/back.png';
// import learnIcon from '../assets/icons/learning.png';
// import playIcon from '../assets/icons/play.png';
// import trainIcon from '../assets/icons/test.png';

// import heroImage from '../assets/heroes/girl.png';
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
            {/* <img
               src={heroImage}
               alt="Superheroes"
               className="w-2/3 max-w-sm mt-4"
            /> */}
         </div>

         <div className="w-full max-w-sm space-y-4">
            <div className="mb-7">
               {btnColors.map((color, index) => {
                  const btnNumber = (index + 2).toString();
                  return (
                     <Link
                        key={btnNumber}
                        to={`/learn-play/learn/${btnNumber}`}
                     >
                        <NumberButton text={btnNumber} bgColor={color} />
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
