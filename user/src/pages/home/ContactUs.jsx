import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";

const ContactUs = () => {
  return (
    <div
      id="ContactUs"
      className="flex w-[100vw] min-h-[100vh] pt-[10vh] bg-fifth md:flex-col md:min-h-0 py-5"
    >
      <div className="w-1/2 h-full p-10 md:w-full">
        <h1 className="text-3xl logo text-center text-secondary">Contact Us</h1>
        <dotlottie-player
          src="https://lottie.host/074631f5-e5f8-4eb2-a9b8-cb75a8242a72/8A37bLt7kF.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
        <p className="text-2xl logo text-center text-third md:text-xl vsm:text-lg">
          Have questions or want to learn more about our services? We're here to
          help! Feel free to reach out to us using the contact information below
          or fill out the form, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="w-1/2 p-10 flex flex-col logo text-3xl text-center sm:px-10 md:w-full md:min-h-0 text-secondary">
        <h1 className="text-3xl">OUR DETAILS</h1>
        <div className="w-full min-h-[70vh] text-third tracking-widest flex flex-col gap-5 justify-center items-center md:min-h-0 md:mt-6 vsm:tracking-normal">
          <div className="flex flex-col items-center w-full justify-center gap-5 text-xl">
            <IoLogoWhatsapp className="text-5xl text-sixth" />
            <h1>8082135208</h1>
          </div>
          <div className="flex flex-col items-center w-full justify-center gap-5 text-xl">
            <MdEmail className="text-5xl text-sixth" />
            <h1>Yash619agrawal@gmail.com</h1>
          </div>
          <div className="flex flex-col items-center w-full justify-center gap-5 text-xl">
            <FaLocationDot className="text-5xl text-sixth" />
            <h1>Nit Srinagar</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
