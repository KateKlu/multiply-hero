type NumberButtonProps = {
   text: string;
   bgColor: string;
   textColor?: string;
   withStroke?: boolean;
   onClick?: () => void;
};

export default function NumberButton({
   text,
   bgColor,
   textColor = '#FDF7CF',
   withStroke = false,
   onClick,
}: NumberButtonProps) {
   return (
      <button
         onClick={onClick}
         className="w-10/12 block mx-auto  text-3xl font-extrabold tracking-wider py-1 rounded-3xl border-4 border-[#3D2604] mb-1 shadow-md transition hover:opacity-80 cursor-pointer"
         style={{
            backgroundColor: bgColor,
            color: textColor,
            boxShadow: '0px 5px 0px #0467CE',
         }}
      >
         <span className={`${withStroke ? ' stroke-text' : ''}`}>{text}</span>
      </button>
   );
}
