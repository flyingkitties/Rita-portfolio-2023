import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { log } from 'console';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ritaguilherme@msn.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="h-screen relative flex flex-col md:flex-row 
    text-center md:text-left items-center mx-auto justify-evenly
    px-10 max-w-7xl ">
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl ">
        Contact Me
      </h3>

      <div className=" absolute top-36  flex flex-col space-y-3 pt-10 mx-56 sm:px-10">
        <h4 className=" text-xl sm:text-4xl font-semibold text-center">
          Get in touch
        </h4>
        <p className=" sm:text-xl text-center font-extralight">
          I&apos;m currently open to new opportunities.
        </p>
        <p className="text-lg sm:text-xl text-center ">Let&apos;s talk</p>

        <div className="space-y-2 sm:space-y-5 pt-2 sm:pt-5 px-32 sm:px-0 text-xs ">
          <div className="flex text-left space-x-5 items-center">
            <EnvelopeIcon className="text-[#f7ab0a]/60 hover:text-[#f7ab0a]/70 h-7 w-7  " />
            <p>Email me</p>
          </div>
          <div className="flex text-left space-x-5 pb-2 sm:pb-5 items-center">
            <MapPinIcon className="text-[#f7ab0a]/60 hover:text-[#f7ab0a]/70 h-7 w-7  " />
            <p>Brighton</p>
          </div>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col space-y-5 ">
            <div className="flex  sm:space-x-2  ">
              <input
                {...register('name')}
                placeholder="Name"
                className="contactInput "
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input
              {...register('subject')}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#f7ab0a]/60 py-3 rounded-lg text-[rgb(48,48,48)] font-bold hover:bg-[#f7ab0a]/70">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
