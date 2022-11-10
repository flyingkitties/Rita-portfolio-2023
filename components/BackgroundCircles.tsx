import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "40%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        id=""
        className="absolute border border-[#333333] rounded-full h-[500px] w-[500px]
      mt-52 animate-ping-short duration-100 "
      />
      <div
        id=""
        className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping-short "
      />
      <div
        className="absolute border border-[#333333] rounded-full h-[500px] w-[500px]
      mt-52 "
      />
      <div
        className="absolute border border-[#333333] rounded-full h-[450px] w-[450px]
      mt-52 animate-pulse-short opacity-10"
      />
      <div
        className="absolute border border-[#333333] rounded-full h-[500px] w-[500px]
      mt-52 an"
      />
    </motion.div>
  );
}

export default BackgroundCircles;
