import NumberButton from './NumberButton';
import heroImage from '../assets/heroes/dog.png';

type InfoModalProps = {
   text: string;
   onClose: () => void;
};

export default function InfoModal({ text, onClose }: InfoModalProps) {
   return (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50 ">
         <div className="bg-[#FDF7CF] text-[#0275E6] rounded-2xl p-8 shadow-xl flex flex-col items-center max-w-xs">
            <img
               src={heroImage}
               alt="Superdog"
               className="w-1/2 max-w-sm mb-4"
            />
            <p className="text-2xl mb-6 text-center">{text}</p>

            <NumberButton text="Ok" bgColor="#FB8313" onClick={onClose} />
         </div>
      </div>
   );
}
