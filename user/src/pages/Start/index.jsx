import React from "react";
import { Link } from "react-router-dom";
import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";

const Start = () => {
  return (
    <div className="w-full min-h-screen gap-10 flex flex-col justify-center items-center bg-primary">
      <h1 className="text-secondary logo text-3xl">
        Just Fill a form and be a part of our family as a{" "}
      </h1>
      <div className="flex w-full justify-center gap-8 ">
        <div className="w-[360px] min-h-[360px] flex flex-col justify-center items-center rounded-xl shadow-md shadow-black/30 bg-forth">
          <div className="min-h-[300px]">
            <dotlottie-player
              src="https://lottie.host/80c2f94c-34ea-44b4-8d16-aba970791fd6/mcCgVyWclQ.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <button>Client</button>
        </div>
        <div className="w-[360px] min-h-[360px] flex justify-center items-center rounded-xl shadow-md shadow-black/30 bg-forth">
          <div className="min-h-[300px]"></div>
          <button></button>
        </div>
      </div>
      <button className="px-5 py-3 border-2 border-secondary rounded-md text-secondary">
        <Link>Home</Link>
      </button>
    </div>
  );
};

export default Start;
