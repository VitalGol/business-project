import * as React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { Button } from "./ui/button";

export default function ModeToggle({
  theme,
  setTheme,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTheme: any;
}) {
  const themeContent = theme === "light" ? "dark" : "light";
  return (
    <Button
      variant="outline"
      className="cursor-pointer text-[#486ca7] hover:text-[#1e5483] hover:bg-gray-200 p-0  dark:hover:bg-[#9cbbd6]"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <IoMoonOutline
          color="#486ca7"
          size={22}
          className="text-[#486ca7] dark:text-[#70a3cf] scale-105"
        />
      ) : (
        <GoSun color="#486ca7" size={24} className="scale-120" />
      )}
      {themeContent}
    </Button>
  );
}
