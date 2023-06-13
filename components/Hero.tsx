import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import profilePic from '../pages/images/rita.jpeg';
import Link from 'next/link';
import Snowfall from 'react-snowfall';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, My name is Rita', 'I love baking!', '<ButLoveToCodeMore/>'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen relative flex flex-col top-24 space-y-8 items-center 
    justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        alt=""
        loading="lazy"
        src={profilePic}
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Web Engineer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10 pb-12">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-12 mt-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
