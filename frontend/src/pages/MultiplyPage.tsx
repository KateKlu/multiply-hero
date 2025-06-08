import { useParams, Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import MenuButton from '../components/MenuButton';
import backIcon from '../assets/icons/back.png';

export default function MultiplyPage() {
   const { number } = useParams<{ number: string }>();
   const num = Number(number);

   const examples = Array.from({ length: 10 }, (_, i) => {
      const multiplier = i + 1;
      const product = num * multiplier;
      return `${num} × ${multiplier} = ${product}`;
   });

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <div className="flex flex-col items-center mb-6">
            <PageTitle part1="Multiplying by" part2={` ${num}`} />
         </div>

         <div className="w-full max-w-sm space-y-2">
            {examples.map((example, index) => (
               <div
                  key={index}
                  className="bg-[#FDF7CF] text-[#0275E6] text-4xl font-semibold text-center rounded-2xl py-1 shadow-md"
               >
                  {example}
               </div>
            ))}
         </div>

         <div className="w-full max-w-sm mt-8">
            <Link to="/learn-play/learn">
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
