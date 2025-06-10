type CheckBoxProps = {
   value: string;
   checked: boolean;
   onToggle: (value: string) => void;
};

export default function CheckBox({ value, checked, onToggle }: CheckBoxProps) {
   return (
      <label
         className={`
                bg-[#FDF7CF] text-[#0275E6] 
                rounded-2xl py-1 px-4 shadow-md 
                flex items-center justify-center space-x-4`}
      >
         <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(value)}
            className="form-checkbox w-6 h-6 accent-[#0467CE]"
         />

         <span className="text-3xl mPlusFont font-extrabold">{value}</span>
      </label>
   );
}
