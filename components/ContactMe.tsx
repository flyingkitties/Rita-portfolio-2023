import React from "react";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div
      className="h-screen relative flex flex-col md:flex-row 
    text-center md:text-left items-center mx-auto justify-evenly
     px-10 max-w-7xl"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl "
      >
        Contact Me
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-4xl font-semibold text-center">Get in touch</h4>
        <p className="text-xl text-center">
          I&apos;m currently open to new opportunities.
        </p>
        <p className="text-xl text-center ">Lets talk</p>
      </div>
    </div>
  );
};

export default ContactMe;
