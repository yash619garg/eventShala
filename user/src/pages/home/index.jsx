import React from "react";
import Info from "./Info";
import About from "./About";
import Services from "./Services";
import Review from "./Review";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className="flex bg-primary flex-col w-full">
      <Info />
      <About />
      <Services />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
