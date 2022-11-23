import React from "react";
import { SocialIcon } from "react-social-icons";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {};

const ProjectCards = (props: Props) => {
  return (
    <div
      className="z-10 flex flex-col rounded-lg items-center bg-[rgb(36,36,36)]
    space-y-7 hover:opacity-100 flex-shrink-0 w-[450px] mt-10 p-7 text-center 
    opacity-60  transition-opacity duration-200  hover:-translate-y-2"
    >
      <div className=" relative md:px-10 p-5 mx-5 space-y-7">
        <div className="absolute flex h-25 w-25 top-0 right-0 ">
          <SocialIcon
            className="hover:bg-white hover:rounded-full"
            url="https://github.com/flyingkitties/Amazon-Replicate"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            className="hover:bg-white hover:rounded-full"
            url="https://www.amazonreplicate.ritaguilherme.com/orders"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <h4 className="text-xl font-bold cursor-pointer">Amazon Replicated</h4>
        <p className="font-light text-l mt-1 text-justify cursor-pointer">
          A replica of Amazon's website. The user is able to login using google
          authentication, add items to the basket, checkout and pay for the
          items. Previous succesful orders can be viewed in "Returns & Orders"{" "}
        </p>
        <div className="flex text-sm space-x-4 pt-5 font-extralight cursor-pointer">
          <p className="hover:underline ">React.js</p>
          <p className="hover:underline">Next.js</p>
          <p className="hover:underline">NextAuth</p>
          <p className="hover:underline">Stripe</p>
          <p className="hover:underline">Firebase</p>
          <p className="hover:underline">Webhooks</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
