import React from "react";
import Info from "./Info";
import About from "./About";
import ImageSlide from "../../components/imageSlide";
import TimeOut from "../../components/TimeOut";
import Gallery from "./Gallery";

const Event = () => {
  return (
    <div>
      <Info />
      <About />
      {/* <ImageSlide /> */}
      <TimeOut />
      {/* <Gallery /> */}
    </div>
  );
};

export default Event;
