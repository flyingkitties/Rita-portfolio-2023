import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-3  ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <div>
          <SocialIcon
            url="https://linkedin.com/in/rita-guilherme-b2632140"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            rel="noopener noreferrer"
          />

          <SocialIcon
            url="https://www.instagram.com/ritawilliamsarmani/"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            rel="noopener noreferrer"
          />

          <SocialIcon
            url="https://github.com/flyingkitties"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div>
          <SocialIcon
            href="#contact"
            network="email"
            url="#contact"
            fgColor="gray"
            bgColor="transparent"
          />
          <Link href="#contact">
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
              Get in Touch
            </p>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
