import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuButton from '../components/MenuButton';

import backIcon from '../assets/icons/back.png';

export default function TrainingPage() {
   const { numbers } = useParams<{ numbers: string }>();
   const selectedNumbers = numbers?.split(',');

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0275E6] text-[#FDF7CF] p-6">
         <h1 className="text-5xl text-[#EEC520] mb-5">Train</h1>
         <h2>{selectedNumbers}</h2>
         <Link to="/learn-play/play">
            <MenuButton icon={backIcon} text="Back" bgColor="#FB8313" />
         </Link>
      </div>
   );
}
