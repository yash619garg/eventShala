import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiAlarmClock } from "react-icons/tfi";

import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="Vision"
      className="flex w-[100vw] min-h-[100vh] pt-[10vh] bg-fifth md:flex-col md:min-h-0 py-5"
    >
      <div className="w-1/2 h-full p-10 md:w-full flex flex-col items-center ">
        <h1 className="text-3xl logo text-center text-secondary">Vision</h1>
        <div className="w-2/3 flex justify-center">
          <dotlottie-player
            src="https://lottie.host/a9e71932-5a77-406d-b522-0d5926afcec4/DAmvynhgvw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <p className="text-2xl logo text-center text-third md:text-xl vsm:text-lg">
          Have questions or want to learn more about our services? We're here to
          help! Feel free to reach out to us using the contact information below
          or fill out the form, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="w-1/2 p-10 flex flex-col logo text-3xl text-center sm:px-10 md:w-full md:min-h-0 text-secondary">
        <h1 className="text-3xl">DETAILS</h1>
        <div className="w-full min-h-[70vh] text-third tracking-widest flex flex-col gap-5 justify-center items-center md:min-h-0 md:mt-6 vsm:tracking-normal">
          <div className="flex flex-col items-center w-full justify-center gap-5 text-xl">
            <div className="w-[120px] h-[120px]">
              <dotlottie-player
                src="https://lottie.host/e14f7f96-ac0d-41ec-b834-d356c7b77da5/YkYI6tu6vx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h1>19-sep-2024 12:00pm</h1>
          </div>
          <div className="flex flex-col items-center w-full justify-center gap-5 text-xl">
            <div className="w-[120px] h-[120px]">
              <dotlottie-player
                src="https://lottie.host/b8701fa8-f970-4897-b377-bcd050ab1e3c/ZUlRmTTyf2.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h1>Common Hall</h1>
          </div>
          <Link className="px-4 py-2 text-xl bg-secondary text-white rounded-md ">
            {" "}
            Go to map
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
