import React from "react";
import img from "../../images/event3.jpeg";
import { services } from "../../data";
import { Link } from "react-router-dom";
// import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";

const Services = () => {
  return (
    <div id="upcomingEvents">
      <div className="w-full min-h-[100vh] pt-[10vh] bg-fifth flex flex-col items-center pb-8 relative">
        <h1 className="text-4xl text-secondary logo pt-2 pb-5">
          {" "}
          Upcoming Events
        </h1>
        <div className="relative">
          <img
            src={img}
            alt=""
            className="w-[95vw] h-[380px] rounded-3xl object-cover opacity-70 m-auto"
          />
          <div className="absolute w-[95vw] h-[380px] rounded-3xl top-0 left-[2.5vw] bg-[#848f76b0]"></div>
          <div className="flex w-[100vw] justify-start items-center gap-8 overflow-x-scroll relative bottom-14 h-[420px] px-[3vw] vsm:px-[5.5vw]  ">
            {services.map((service) => {
              const { id, image, description, title } = service;
              return (
                <div
                  className="flex group min-w-[360px] h-[360px] vsm:min-h-[95vw] vsm:min-w-[90vw] [perspective:1000px] relative "
                  key={id}
                >
                  <div
                    className="w-full h-full rounded-3xl transition-all duration-500 [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)] shadow-xl shadow-black/30"
                  >
                    <div className="absolute w-full h-full object-cover rounded-3xl overflow-hidden">
                      <img src={image} alt="" className="bg-fifth" />
                    </div>
                    <div className="absolute w-full h-full flex flex-col text-center gap-2 logo justify-center px-4 py-10  rounded-3xl bg-fifth [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                      <h1 className="text-2xl">{title}</h1>
                      <p className="logo text-third text-center">
                        {description}
                      </p>
                      <Link  to="/events" className="underline text-sixth">
                        Explore now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
//   <dotlottie-player
//     src="https://lottie.host/2e51e1d9-4157-4694-a1d3-72260948558b/IkSJEk9MFo.json"
//     background="rgba(194, 230, 141, 0.737)"
//     speed="1"
//     loop
//     autoplay
//     className="absolute top-0 left-0"
//   ></dotlottie-player>;
