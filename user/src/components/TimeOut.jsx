import React, { useEffect, useState } from "react";
import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
const eventDate = new Date("apr 16, 2024 00:00:00").getTime();

const TimeOut = () => {
  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date().getTime();
      const distance = eventDate - date;

      setDays(Math.floor(distance / (60 * 60 * 24 * 1000)));
      setHour(
        Math.floor((distance % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000))
      );
      setMinute(Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000)));
      setSeconds(Math.floor((distance % (60 * 1000)) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="w-full min-h-screen flex flex-col pt-[15vh] bg-primary  items-center p-4 ">
      <div className="text-6xl logo min-h-[10vh] text-sixth text-center smd:text-5xl sm:text-4xl tracking-wider">
        GET READY TO EXPLORE THIS EVENT
      </div>
      <div className="w-[250px] ">
        <dotlottie-player
          src="https://lottie.host/e14f7f96-ac0d-41ec-b834-d356c7b77da5/YkYI6tu6vx.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="flex justify-center flex-col">
        <div className="w-full flex gap-8 sm:gap-4 vsm:flex-col justify-center items-center">
          <div className="flex flex-col text-center gap-6">
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo font-light text-secondary  ">
              Days
            </h1>
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo text-third">
              {days}{" "}
            </h1>
          </div>
          <div className="flex flex-col text-center gap-6">
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo font-light text-secondary ">
              Hours
            </h1>
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo text-third">
              {hour}{" "}
            </h1>
          </div>
          <div className="flex flex-col text-center gap-6">
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo font-light text-secondary ">
              Minutes
            </h1>
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo text-third">
              {minute}{" "}
            </h1>
          </div>
          <div className="flex flex-col text-center gap-6">
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo font-light text-secondary ">
              Seconds
            </h1>
            <h1 className="text-5xl smd:text-4xl sm:text-3xl  logo text-third">
              {seconds}
            </h1>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl logo text-sixth vsm:text-2xl text-center">
              Don't Waste Your Time
            </h1>
            <button className="px-4 py-2 text-xl bg-secondary text-white rounded-md ">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeOut;
