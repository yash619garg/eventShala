import React from "react";
import "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="flex min-h-[100vh] bg-forth items-center  w-full md:flex-col md:min-h-0 py-5"
      >
        <div className="flex justify-center items-center h-[70vh] w-1/2 md:w-full md:min-h-0 ">
          <dotlottie-player
            src="https://lottie.host/c503d5cf-a552-40bf-b8b5-ddd3a9caa8a4/Nebkzo3uGe.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex min-h-[100vh] w-1/2 flex-col justify-center px-20 sm:px-10 md:w-full md:min-h-0">
          <h1 className="text-4xl text-secondary">About Us</h1>
          <p className="text-third py-6 vsm:text-sm ">
            At Nit Srinagar, we believe in the power of events to enrich the
            college experience, build connections, and create lifelong memories.
            Whether it's academic conferences, cultural celebrations, sporting
            events, or social gatherings, our platform serves as the central hub
            for discovering, promoting, and participating in a diverse range of
            activities.
          </p>
          <p className="text-third py-6 vsm:text-sm vsm:py-3">
            Join us as we embark on an exciting journey of discovery, learning,
            and connection. Whether you're a seasoned event organizer, an
            enthusiastic participant, or simply looking to immerse yourself in
            the vibrant pulse of campus life, Nit Srinagar's events platform has
            something for everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
