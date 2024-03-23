import React, { useEffect, useState } from "react";
import { people } from "../../data";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Review = () => {
  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex(currentIndex + 1);
    }, 3000);
    return () => clearInterval(slide);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex > people.length - 1) {
      setIndex(0);
    }
    if (currentIndex < 0) {
      setIndex(people.length - 1);
    }
  }, [currentIndex]);

  const nextIndex = () => {
    if (currentIndex < people.length - 1) {
      setIndex(currentIndex + 1);
    } else {
      setIndex(0);
    }
  };
  const prevIndex = () => {
    if (currentIndex !== 0) {
      setIndex(currentIndex - 1);
    } else {
      setIndex(people.length - 1);
    }
  };
  return (
    <div id="clubs">
      <div className="h-[10vh] flex justify-center items-center text-center logo text-4xl text-secondary">
        Clubs
      </div>
      <div className="flex w-[100vw] min-h-[750px] sm:min-h-[600px] gap-5 justify-center relative overflow-hidden  ">
        {people.map((person, index) => {
          let position = "nextSlide";
          const { image, name, link, id, quote } = person;
          if (index === currentIndex) {
            position = "activeSlide";
          }
          if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === people.length - 1)
          ) {
            position = "prevSlide";
          }
          return (
            <div
              key={id}
              className={`flex w-[90vw] min-h-[750px] sm:min-h-[600px] gap-5 flex-col justify-center items-center absolute transition-all duration-500 text-center  ${
                position === "prevSlide" && "translate-x-[-100vw] opacity-0"
              } ${
                position === "nextSlide" && "translate-x-[100vw] opacity-0"
              } ${position === "activeSlide" && "translate-x-[0vw]"}`}
            >
              <div className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] rounded-full ring-2 ring-sixth">
                <img
                  className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] rounded-full object-cover "
                  src={image}
                  alt=""
                />
              </div>
              <h1 className="text-secondary capitalize text-5xl sm:text-3xl vsm:text-2xl">
                {name}
              </h1>
              <p className="text-third text-xl text-center w-[40vw] sm:w-[80vw] sm:text-l vsm:text-sm tracking-wider">
                {quote}
              </p>

              <Link
                to="clubs"
                className="px-5 py-3 bg-secondary text-white rounded-md "
                params={{ _id: id }}
              >
                Explore now
              </Link>

              <div className="text-7xl text-third">
                <FaQuoteRight />
              </div>
              <div className="absolute md:static md:gap-5">
                <button
                  onClick={() => {
                    nextIndex();
                  }}
                  className="text-third text-6xl absolute left-80 md:static sm:text-4xl "
                >
                  <GrNext />
                </button>
                <button
                  onClick={() => {
                    prevIndex();
                  }}
                  className="text-third text-6xl absolute right-80 md:static md:float-left sm:text-4xl"
                >
                  <GrPrevious />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
