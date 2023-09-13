import React from "react";
import WhyRicozImage from "../assets/WhyRicozImage.png";
import ProfessionalNetwork from "../assets/ProfessionalNetwork.png";
import Quality from "../assets/Quality.png";
import collaboration from "../assets/collaboration.png";
import saveTime from "../assets/saveTime.png"

function WhyRicoz() {
  return (
    <div className="why-ricoz w-full lg:px-28 py-14">
    <div className="container mx-auto text-white">
      <h1 className="font-semibold text-center text-4xl mb-16">Why Choose Ricoz?</h1>
      <div className="flex items-center ">
        <div className="w-full">
          <img src={WhyRicozImage} alt="whyRicozImage"  />
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex gap-x-8">
            <div className="w-20 h-20 bg-white rounded-full">
             <img src={ProfessionalNetwork} alt="" className="w-full"/>
            </div>
            <div className="">
              <h2>Vast Professional Network</h2>
              <p>Access a wide range of tech professionals, all in one platform.</p>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="w-20 h-20 bg-white rounded-full">
              <img src={Quality} alt="" className="w-full"/>
            </div>
            <div className="">
              <h2>Quality You Can Trust</h2>
              <p>Our stringent quality scoring system ensures that you receive exceptional services.</p>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="w-20 h-20 bg-white rounded-full">
              <img src={collaboration} alt="" className="w-full"/>
            </div>
            <div className="">
              <h2>Effortless Collaboration</h2>
              <p>Our integrated tools facilitate seamless communication and collaboration.</p>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="w-20 h-20 bg-white rounded-full">
              <img src={saveTime} alt="" className="w-full" />
            </div>
            <div className="">
              <h2>Save Time and Effort</h2>
              <p>With our platform, finding professionals and managing projects becomes effortless.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default WhyRicoz;
