type RawExample = {
   left: number;
   right: number;
   correct: number;
};

export type Example = RawExample & {
   options: number[];
};

function makeExamples(n: number): RawExample[] {
   return Array.from({ length: 10 }, (_, i) => ({
      left: n,
      right: i + 1,
      correct: n * (i + 1),
   }));
}

function shuffle<T>(arr: T[]): T[] {
   for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr;
}
function calculateDelta(correct: number): number {
   let delta = 2;
   if (correct > 10 && correct <= 20) delta = 3;
   else if (correct > 20 && correct <= 30) delta = 4;
   else if (correct > 30 && correct <= 40) delta = 5;
   else if (correct > 40 && correct <= 50) delta = 6;
   else if (correct > 50) delta = 7;
   return delta;
}

function getWrongAnswers(correct: number): number[] {
   const delta = calculateDelta(correct);
   const min = correct - delta;
   const max = correct + delta;
   const wrongs = new Set<number>();

   while (wrongs.size < 3) {
      const rand = Math.floor(Math.random() * (max - min + 1)) + min;
      if (rand !== correct) wrongs.add(rand);
   }

   return Array.from(wrongs);
}

export function generateTrainingExamples(selected: string[]): Example[] {
   let rawPool: RawExample[] = [];

   if (selected.length === 1) {
      const n = Number(selected[0]);
      const base = makeExamples(n);
      rawPool = [...base, ...base];
   } else {
      const arrays: RawExample[][] = selected.map((num) => {
         const n = Number(num);
         return shuffle(makeExamples(n));
      });

      let idx = 0;
      while (rawPool.length < 20) {
         for (const arr of arrays) {
            if (rawPool.length >= 20) break;
            rawPool.push(arr[idx]);
         }
         idx++;
      }
   }
   rawPool = shuffle(rawPool);

   return rawPool.map(({ left, right, correct }) => {
      const wrongs = getWrongAnswers(correct);
      const options = shuffle([correct, ...wrongs]);
      return { left, right, correct, options };
   });
}
