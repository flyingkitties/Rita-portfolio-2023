import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center bg-[rgb(48,48,48)]
    space-y-7 flex-shrink-0 h-120 overflow-scroll w-[400px] md:w-[500px] lg:w-[600px] mt-10 p-7 text-center snap-center
    opacity-60 hover:opacity-100 cursor-pointer hover:animate-wiggle transition-opacity duration-200 "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-16 h-16 rounded-full md:w-24 md:h-24 xl:w-32 xl:h-32 object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBcvTly3FsJwkeD92bjh7qh5Thn_xrgbk7A&usqp=CAU"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl font-light">Office Manager/ Operations</h4>
        <p className="font-bold text-1xl mt-1">Pizza VIP LTD</p>
        <div className="flex space-x-2 my-2">
          {/* teck used */}
          <img
            className="h-10 w-10"
            src="https://live.staticflickr.com/65535/52490406839_816e16120f_q.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm">
          Started work.... ended ....
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm ">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
