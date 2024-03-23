import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";

const Navbar = () => {
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

export default Navbar;

// import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import { MdOutlineSegment } from "react-icons/md";

// const Navbar = () => {
//   const [showLink, setShow] = useState(false);
//   return (
//     <>
//       <div className="flex w-full min-h-[10vh] bg-secondary items-center smd:flex-col">
//         <div className="flex w-1/2 justify-center py-5  text-[#fbe87df5] smd:w-full smd:justify-between smd:px-12 vsm:px-4">
//           <div className="text-xl vsm:text-xl tracking-wider ">
//             DREAM SITE WEB
//           </div>
//           <div
//             className="hidden text-3xl smd:flex"
//             onClick={() => {
//               setShow(!showLink);
//             }}
//           >
//             <MdOutlineSegment />
//           </div>
//         </div>
//         <div
//           className={`flex w-1/2 text-xl gap-6 text-white py-5 items-center  font-extralight px-3 smd:w-full smd:items-center smd:flex-col smd:transition-height delay-[-180ms] smd:duration-[900ms] smd:gap-[10px] smd:h-0 smd:py-0  smd:justify-center  smd:overflow-hidden smd:bg-forth smd:text-secondary vsm:text-sm smd:tracking-widest ease-in-out ${
//             showLink &&
//             "smd:h-[200px] smd:gap-[10px] smd:py-4 relative border-b-4 border-secondary"
//           }`}
//         >
//           <Link className="hover:text-[#fbe87df5]" to="/">
//             Home
//           </Link>
//           <Link className="hover:text-[#fbe87df5]" to="/">
//             About
//           </Link>
//           <Link className="hover:text-[#fbe87df5]" to="/">
//             services
//           </Link>
//           <Link className="hover:text-[#fbe87df5]" to="/">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default Navbar;

// <Link className=" cursor-pointer" to="#Info">
//     Home
//   </Link>
//   <Link className=" cursor-pointer" to="/About">
//     About
//   </Link>
//   <Link className=" cursor-pointer" to="/">
//     Services
//   </Link>
//   <Link className=" cursor-pointer" to="/">
//     Contact Us
//   </Link>
