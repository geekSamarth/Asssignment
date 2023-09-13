import React from "react";
import WhyRicozImage from "../assets/WhyRicozImage.png";
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"
import Icon3 from "../assets/Icon3.png"
import Icon4 from "../assets/Icon4.png"

function WhyRicoz() {
  return (
   <section className=" bg-[#14121e] w-full h-full ">
    <div className="max-w-[1200px] mx-auto font-poppins text-white py-10 px-5 md:py-12 md:px-10">
      <h1 className="text-3xl text-center font-semibold mb-14">Why Choose Ricoz?</h1>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-4/5 lg:w-1/2 ml-8 lg:ml-0 ">
          <img src={WhyRicozImage} alt=""  />
        </div>
        <div className="w-full flex flex-col lg:w-1/2 gap-10 lg:gap-2">
          <div className="flex flex-col items-center lg:items-start gap-7 lg:flex-row">
            <div className="lg:w-32 lg:h-32">
              <img src={Icon1} alt="" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Vast Professional Network</h2>
              <p className="text-md mt-2">Access a wide range of skilled tech professionals, all in one platform.</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-7 lg:flex-row">
            <div className="lg:w-32 lg:h-32">
              <img src={Icon2} alt="" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Quality You Can Trust</h2>
              <p className="text-md mt-2">Our stringent quality scoring system ensures that you receive exceptional services.</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-7 lg:flex-row">
            <div className="lg:w-32 lg:h-32">
              <img src={Icon3} alt="" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Effortless Collaboration</h2>
              <p className="text-md mt-2">Our integrated tools facilitate seamless communication and collaboration.</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-7 lg:flex-row">
            <div className="lg:w-32 lg:h-32">
              <img src={Icon4} alt="" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Save Time and Effort</h2>
              <p className="text-md mt-2">With our platform, finding professionals and managing projects becomes effortless.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
}

export default WhyRicoz;
