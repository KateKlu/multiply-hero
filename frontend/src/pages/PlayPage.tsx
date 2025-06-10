import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import MenuButton from '../components/MenuButton';
import NumberButton from '../components/NumberButton';
import CheckBox from '../components/CheckBox';
import backIcon from '../assets/icons/back.png';
import playIcon from '../assets/icons/play.png';

export default function PlayPage() {
   const [selected, setSelected] = useState<string[]>([]);

   const col1 = ['2', '3', '4', '5'];
   const col2 = ['6', '7', '8', '9'];

   const toggle = (num: string) =>
      setSelected((prev) =>
         prev.includes(num) ? prev.filter((i) => i !== num) : [...prev, num]
      );

   const selectAll = () => setSelected([...col1, ...col2]);
   const clearAll = () => setSelected([]);

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <div className="mb-6">
            <PageTitle part1="Select" part2=" Numbers" />
         </div>

         {/* Колонки с чекбоксами */}
         <div className="w-full max-w-md grid grid-cols-2 gap-4">
            {/* Левая колонка */}
            <div className="flex flex-col space-y-4">
               {col1.map((num) => (
                  <CheckBox
                     key={num}
                     value={num}
                     checked={selected.includes(num)}
                     onToggle={toggle}
                  />
               ))}

               <NumberButton
                  text="All"
                  bgColor="#1CBC50"
                  textColor="#FDF7CF"
                  onClick={selectAll}
               />
            </div>

            {/* Правая колонка */}
            <div className="flex flex-col space-y-4">
               {col2.map((num) => (
                  <CheckBox
                     key={num}
                     value={num}
                     checked={selected.includes(num)}
                     onToggle={toggle}
                  />
               ))}

               <NumberButton
                  text="Clear"
                  bgColor="#F86837"
                  textColor="#FDF7CF"
                  onClick={clearAll}
               />
            </div>
         </div>

         <div className="w-full max-w-sm mt-8 space-y-4">
            <Link to="/learn-play/play/training">
               <MenuButton icon={playIcon} text="Start" bgColor="#FB8313" />
            </Link>
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
