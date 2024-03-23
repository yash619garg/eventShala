import React, { useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";

const EventNavbar = () => {
  const { _id } = useParams();
  console.log(_id);

  const [showLink, setShow] = useState(false);
  console.log(showLink);
  return (
    <>
      <div className="flex w-full fixed bg-primary left-0 top-0 min-h-[10vh] justify-center items-center smd:flex-col border-b-2 z-10 ">
        <div className="w-1/2 flex justify-start px-20 items-center text-secondary smd:w-full smd:justify-between smd:px-20 smd:h-[10vh] sm:px-5 ">
          <div className="text-3xl tracking-wider logo">Eventshala</div>
          <div
            className="hidden text-3xl smd:flex"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <MdOutlineSegment />
          </div>
        </div>
        <div
          className={`flex w-1/2  text-xl gap-5 text-secondary font-extralight transition-all duration-700 smd:h-0 overflow-hidden smd:bg-forth smd:text-secondary smd:w-full smd:justify-center smd:gap-3 smd:flex-col vsm:text-base px-4 ${
            showLink && "smd:h-[220px] "
          }`}
        >
          <button
            className=" cursor-pointer list-none"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#Info" className="">
              Home{" "}
            </a>
          </button>
          <button
            className=" cursor-pointer list-none"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#About">about</a>
          </button>
          <button
            className=" cursor-pointer list-none"
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#upcomingEvents">Events</a>
          </button>
          <button
            className=" cursor-pointer list-none "
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#clubs">Clubs</a>
          </button>
          <button
            className=" cursor-pointer list-none "
            onClick={() => {
              setShow(!showLink);
            }}
          >
            <a href="#ContactUs">Contact Us</a>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default EventNavbar;
