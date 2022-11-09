import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>
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
        className="w-24 h-24 rounded-full xl:w-32 xl:h-32 object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBcvTly3FsJwkeD92bjh7qh5Thn_xrgbk7A&usqp=CAU"
        alt=""
      />
      <div>
        <h4>Office Manager/ Operations</h4>
        <p>Pizza VIP LTD</p>
        <div></div>
        <p>Started work.... ended ....</p>
        <ul className="list-disc space-y-4 ml-5">
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
