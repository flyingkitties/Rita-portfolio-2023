import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic2 from "../pages/images/rita2.jpeg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen 
  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        animate={{}}
        src="https://live.staticflickr.com/65535/52488679029_6382831232_m.jpg"
        className=" w-48 h-48 rounded-full -mb-20 md:mb-0 flex-shrink-0 
        object-cover md:w-64 md:h-64 lg:h-[320px] lg:w-[320px] mt-10 "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#f7AB0A]/50">litle</span>
          {""} {""}background
        </h4>
        <p className=" font-light text-gray-400 tracking-[2px] ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </motion.div>
  );
}

export default About;
