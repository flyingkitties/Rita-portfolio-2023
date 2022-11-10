import React from "react";
import { motion } from "framer-motion";
import reactLogo from "../pages/images/reactLogo.png";

type Props = {
  directionLeft?: boolean;
};

function SkillCard({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://live.staticflickr.com/65535/52490675493_30f9e0a8c4_q.jpg"
        className="h-12 w-12 rounded-full border-gray-500 object-cover filter group-hover:grayscale
        transition duration-300 ease-out "
      />
      <div
        className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out
       group-hover:bg-white h-12 w-12 rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-sm font-bold text-black opacity-100 ">100%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
