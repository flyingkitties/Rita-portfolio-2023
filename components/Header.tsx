import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-3  ">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/rita-guilherme-b2632140"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          url="https://email.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
          Get in Touch
        </p>
      </div>
    </header>
  );
}

export default Header;
