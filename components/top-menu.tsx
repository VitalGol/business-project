"use client";

import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";
import { TbFileCv } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TopMenu() {
  const downloadCV = () => {
    console.log("downloadCV");
    const link = document.createElement("a");
    const file = "Goloborodko-dev.pdf";
    link.href = "./Goloborodko-dev.pdf";
    // link.href = "../Goloborodko-dev.pdf";
    link.setAttribute("download", file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const callMe = () => {
    window.open("tel:+380680564880", "tel");
  };
  const writeMe = () => {
    window.open("mailto:vital.goloborodko@gmail.com", "mailto");
  };
  const telegram = () => {
    window.open("https://telegram.im/@VitalyGol", "telegram");
  };
  return (
    <div className="flex flex-row  justify-center items-center gap-2 ">
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            onClick={callMe}
            className="  rounded-md dark:bg-[#1a1a1a] bg-[#ffffff] transition-colors duration-600   cursor-pointer "
          >
            <FiPhone
              // size={20}
              className=" text-[#1a1a1a] dark:text-[#7dacd6] size-5"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={12}
          className="py-2 px-4 text-sm"
        >
          Call me
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            onClick={writeMe}
            className="p-2  rounded-md dark:bg-[#1a1a1a] bg-[#ffffff] transition-colors duration-600   cursor-pointer "
          >
            <LuMail
              // size={20}
              className="text-[#1a1a1a] dark:text-[#7dacd6] size-5"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={10}
          className="py-2 px-4 text-sm"
        >
          Write me
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            onClick={telegram}
            className="p-2  rounded-md dark:bg-[#1a1a1a] bg-[#ffffff] transition-colors duration-600   cursor-pointer "
          >
            <PiTelegramLogo
              // size={22}
              className="text-[#1a1a1a] dark:text-[#7dacd6] size-5"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={10}
          className="py-2 px-4 text-sm"
        >
          Telegram
        </TooltipContent>
      </Tooltip>
      {/* <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            onClick={downloadCV}
            className="p-2  rounded-md dark:bg-[#1a1a1a] bg-[#ffffff] transition-colors duration-600   cursor-pointer "
          >
            <TbFileCv
              // size={22}
              className="  text-[#1a1a1a] dark:text-[#7dacd6] size-5.5"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={10}
          className="py-2 px-4 text-sm"
        >
          Download CV
        </TooltipContent>
      </Tooltip> */}
    </div>
  );
}
