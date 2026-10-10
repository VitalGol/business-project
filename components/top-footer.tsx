"use client";
import { skillsLine } from "@/data";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

export default function TopFooter() {
  const { theme } = useTheme();

  return (
    <div className="flex m-auto py-0 md:py-4 text-md md:text-lg text-gray-600 dark:text-[#70a3cf] ">
      <Marquee
        speed={30}
        direction="left"
        gradient={true}
        gradientWidth="50px"
        gradientColor={theme === "dark" ? "#1a1a1a" : "#ffffff"}
      >
        <ul className="flex justify-center items-center">
          {skillsLine.map((skill) => {
            return (
              <li key={skill.id} className="flex items-center md:px-2 px-1.5">
                <skill.icon className="mr-1" />
                {skill.name}
              </li>
            );
          })}
        </ul>
      </Marquee>
    </div>
  );
}
