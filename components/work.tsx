import { servicesENG, servicesUKR } from '@/data';
// import { FileUser, Mail, Phone, QrCode } from 'lucide-react';

type PageWorkProps = {
  flag: boolean;
};
export default async function Work({ flag }: PageWorkProps) {
  return (
    <div className="flex flex-col  py-4 px-2 lg:px-6 text-lg  text-gray-600 dark:text-[#70a3cf]">
      <h1 className="text-xl lg:text-2xl uppercase font-semibold tracking-widest">
        {flag ? (
          <span>areas of my activity</span>
        ) : (
          <span>сфери моєї діяльності</span>
        )}
      </h1>

      <div className="flex flex-col justify-center items-center text-wrap p-4  ">
        {(flag ? servicesENG : servicesUKR).map((servise) => {
          return (
            <div
              key={servise.id}
              className="flex flex-row justify-center items-center p-4 mb-2 lg:border-1 lg:rounded-lg  lg:border-slate-400/50  text-gray-600 dark:text-[#70a3cf] "
            >
              <servise.pic size={48} strokeWidth={2} className="ml-4 mr-6" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xl uppercase mb-2">{servise.title}</p>
                <p>{servise.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
