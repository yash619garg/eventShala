import React from "react";
import { Image } from "../data";

const ImageSlide = () => {
  return (
    <div className="flex w-full overflow-hidden gap-4 relative">
      {Image.map((imgData) => {
        const { imgUrl } = imgData;
        return (
          <div className="slide">
            <div className="min-w-[300px] h-[250px] ">
              <img src={imgUrl} className="w-[300px] h-[250px]" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlide;
