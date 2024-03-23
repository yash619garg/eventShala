import React from "react";
import { Image } from "../../data";

const Gallery = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-fifth p-5">
      <div className="">Showcase</div>
      <div className="grid grid-cols-2 gap-4 grid-rows-2">
        <div className="bg-sixth grid-cols-2 grid-rows-2 grid  gap-3 w-full h-[600px]">
          <div className=" bg-slate-400"></div>
          <div className=" bg-slate-400"></div>
          <div className=" bg-slate-400"></div>
          <div className=" bg-slate-400"></div>
        </div>
        <div className="bg-sixth grid h-[600px]"></div>
        <div className="bg-sixth grid h-[600px]"></div>
        <div className="bg-sixth grid-cols-2 grid-rows-2 grid  gap-3 w-full h-[600px]">
          <div className=" bg-slate-400"></div>
          <div className=" bg-slate-400"></div>
          <div className=" bg-slate-400"></div>
          <div className=" bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
