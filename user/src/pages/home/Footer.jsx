import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <div className="flex flex-col items-center opacity-65 text-secondary">
      <div className="h-[1px] w-[100vw] bg-secondary"></div>
      <div className="my-5 flex flex-col items-center justify-center text-secondary gap-3">
        <h1>Developed and Designed by</h1>
        <h1>Yash Garg</h1>
        <div className="flex text-2xl gap-4">
          <a href="">
            <i class="ri-mail-line"></i>
          </a>
          <a href="">
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a href="">
            <i class="ri-github-fill"></i>
          </a>
          <a href="">
            <i class="ri-twitter-fill"></i>
          </a>
          <a href="">
            <i class="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
