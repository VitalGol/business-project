import Top from '@/components/top';
import Skills from '@/components/skills';
import Work from '@/components/work';
// import Courses from "@/components/courses";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const changeFlag = resolvedParams.flag !== 'false';
  return (
    <div className="flex min-h-screen flex-col w-full max-w-6xl mx-auto px-2 mb-8 text-base bg-white dark:bg-[#1a1a1a] text-gray-600 dark:text-[#7dacd6]">
      <Top />
      <div className="flex flex-col lg:flex-row dark:text-slate-400 ">
        <div className="flex  w-full   lg:w-2/6 ">
          <Skills />
        </div>
        <div className="flex flex-col  w-full  lg:w-4/6">
          <Work flag={changeFlag} />
          {/* <Courses /> */}
        </div>
      </div>
    </div>
  );
}
