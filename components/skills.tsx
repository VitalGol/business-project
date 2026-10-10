'use client';
// import { useFlag } from '@/context/FlagContext';
import { skillsHard, skillsSoft } from '@/data';

export default function Skills() {
  // const { changeFlag, setChangeFlag } = useFlag();
  // console.log('-skils', changeFlag);

  return (
    <div className="flex flex-col p-2 lg:p-4   lg:border-1 lg:rounded-lg  lg:border-slate-400/50  text-gray-600 dark:text-[#70a3cf] ">
      <h1 className="text-xl lg:text-2xl uppercase font-semibold tracking-widest ">
        Skills
      </h1>
      <div className="py-4 text-balance lg:text-wrap ">
        <h4 className="mb-2.5 underline underline-offset-4 decoration-slate-500 ">
          <b>Hard Skills</b>
        </h4>
        <ul role="list" className="py-4 divide-y divide-slate-400/50">
          {skillsHard.map((el) => {
            return (
              <li
                key={el.id}
                className="py-3 first:pt-0 last:pb-0 text-balance   "
                // className="py-3 first:pt-0 last:pb-0 lg:text-balance md:text-wrap  "
                // className="py-6 lg:py-4 xl:py-3 md:py-3 first:pt-0 last:pb-0 sm:pr-1 xs:pr-1 ls:pr-1"
              >
                <p>{el.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="py-4 lg:text-wrap text-balance ">
        <h4 className="mb-2.5 underline underline-offset-4 decoration-slate-500 ">
          <b>Soft Skills</b>
        </h4>
        <ul role="list" className="py-4 divide-y divide-slate-400/50">
          {skillsSoft.map((el) => {
            return (
              <li key={el.id} className="py-3 first:pt-0 last:pb-0">
                <p>{el.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
