"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicDark from "../public/photo2021-1.png";
import profilePicGrey from "../public/photo2021-g.png";
import qrCodePic from "../public/qr-code.png";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export default function FlipImage() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const profilePic = theme === "dark" ? profilePicDark : profilePicGrey;
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    if (isFlipped) {
      const changePhoto = setInterval(() => {
        setIsFlipped(!isFlipped);
      }, 5000);
      return () => {
        clearInterval(changePhoto);
      };
    }
  }, [isFlipped]);

  return (
    <div className="flex justify-center items-center -ml-4 md:ml-2 xl:ml-4 mt-0">
      <motion.div
        className="  perspective-1000 "
        whileHover={{ scale: 1.05, rotate: 1 }}
        onClick={() => setIsFlipped(!isFlipped)}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          variants={cardVariants}
          initial="front"
          animate={isFlipped ? "back" : "front"}
          className="flex justify-center items-center w-30 h-30 transform-style-preserve-3d"
        >
          <motion.div className=" inset-0 ">
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={isFlipped ? qrCodePic : profilePic}
                  alt="photo Goloborodko Vitaly web developer"
                  placeholder="blur"
                  className={`md:mt-0  ${
                    isFlipped ? "rounded-none" : "rounded-2xl"
                  } md:w-22.5 md:h-[90wh] w-17.5 h-[70wh] cursor-pointer`}
                  // className={`  md:mt-0 ${
                  //   isFlipped ? "rounded-none" : "rounded-2xl"
                  // } md:w-22.5 md:h-[90wh] w-17.5 h-[70wh] cursor-pointer`}
                />
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={10}
                className="py-2 px-4 text-sm"
              >
                <div>
                  Click on the photo <hr /> to scan the QR code
                </div>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
