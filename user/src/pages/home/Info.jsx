import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div
      id="Info"
      className="min-h-[100vh] flex flex-col items-start justify-center sm:items-center pb-10 sm:text-center bg-primary px-20 sm:px-5"
    >
      <h1 className="text-[#9dbe89] mt-[15vh] text-2xl">Welcome to </h1>
      <h1 className="text-6xl sm:text-4xl font-semibold text-[#253840] my-2 tracking-wider vsm:text-4xl">
        Eventshala
      </h1>
      <h1 className="text-3xl sm:text-2xl vsm:text-xl line-clamp-5 text-[#9dbe89]">
        {/* #dec540f5 */}A world of hundreds of events and clubs
      </h1>
      <p className="text-third w-[60vw] sm:w-[80vw] my-4 tracking-wider sm:text-center">
        Welcome to Nit Srinagar's official events platform! We are dedicated to
        fostering a vibrant campus community by bringing together students,
        faculty, and staff through engaging and memorable events.
      </p>
      <button className="px-5 py-3 border-2 border-secondary rounded-md text-secondary">
        <Link to="Start">Get Started</Link>
      </button>
    </div>
  );
};

export default Info;
