import React from "react";
import HerosectionImage1 from "../assets/HerosectionImage1.png";
import HerosectionImage2 from "../assets/HerosectionImage2.png";
function HeroSection() {
  return (
    <div className="heroSection w-full ">
      <div className=" container  mx-auto  flex flex-col-reverse lg:flex-row lg:justify-around lg:gap-x-5 items-center  lg:px-16 py-14 text-center lg:text-left">
        <div className="w-full text-white">
          <h1 className="text-3xl lg:text-5xl leading-tight mb-5">
            Discover Top Tech Professionals In Minutes.
          </h1>
          <p className="text-xl mb-7 lg:pr-24 ">
            Streamline Your Business Needs with Ricoz's All-in-One Tech Service
            Hub.
          </p>
          <button className="get-started text-left px-6 py-2 rounded-3xl">
            Get Started
          </button>
        </div>
        <div className="w-full flex flex-col px-4 mb-8 lg:mb-0">
          <div className="w-4/5 ml-14 lg:w-full lg:ml-32">
            <img src={HerosectionImage1} alt="herosectionImage" />
          </div>
          <div className="w-full">
            <img src={HerosectionImage2} alt="herosectionImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
