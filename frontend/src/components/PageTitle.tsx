type PageTitleProps = {
   part1: string;
   part2: string;
};

export default function PageTitle({ part1, part2 }: PageTitleProps) {
   return (
      <h1 className="text-center font-extrabold uppercase stroke-text">
         <span className="text-[2.75rem] text-[#EEC520] leading-none ">
            {part1}
         </span>
         <span className="text-[4rem]  leading-none">{part2}</span>
      </h1>
   );
}
