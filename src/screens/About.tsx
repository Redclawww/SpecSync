// @ts-nocheck
// import React from 'react'
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ip from "/Images/ip.png";
import vid1 from "/Videos/vid1.mp4";
import vid2 from "/Videos/vid2.mp4";

export const About = () => {
  return (
    <>
    <Navbar />
      {" "}
      <div className="bg-[#C2C2C4] w-screen">
        <div className="h-screen w-screen bg-cover bg-center">
          <div className="">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col pt-52 text-left pl-20 sm:pl-32 md:pl-32 lg:pl-36 xl:pl-36 font-mono font-bold text-black">
              About Us
            </h1>
            <p className="text-black sm:justify-center  font-mono sm:text-2xl md:text-2xl lg:text-2xl pl-14 xl:pl-36 font-semibold pt-8 leading-relaxed">
              SpecSync is your Personal Phone Matchmaker!
              <br /> Discover the perfect mobile phone tailored to
              <br /> your preferences and needs.
              <br /> We compare, you choose –<br /> because your ideal phone is
              just a sync away!
            </p>
          </div>
          <div className="h-screen w-screen bg-cover bg-center sm:w-full md:w-full lg:w-full sm:h-full md:h-full lg:h-full" 
          style={{ backgroundImage: `url(${ip})` }}>

          </div>

          <div className="bg-black w-screen h-screen xl:h-max">
            <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center pb-20 md:pb-16 p-14 lg:pl-36 xl:pl-36 text-wrap">
              Discover a new era in mobile phone selection with SpecSync. Our
              advanced platform streamlines comparisons by tailoring
              recommendations to your preferences, budget, and needs. Say
              goodbye to confusion and hello to effortless decision-making.
              Experience the future of phone selection with SpecSync today.
            </p>
          </div>
        </div>
        <div className="h-96"></div>
        <div className="h-screen"></div>
        <div className="h-screen w-screen flex justify-center">
          <video
            className="w-96 sm:w-[682.667px] mt-18 sm:mt-36 xl:mt-28 h-96 flex"
            muted
            autoPlay
            loop
            src={vid1}
          />
          <p></p>
          <video className="w-96 sm:w-[682.667px] mt-96 sm:ml-7 h-96 " 
          muted 
          autoPlay 
          loop 
          src={vid2} />
        </div>
        <div className="relative p-10">
          <h1 className="text-6xl font-bold text-black text-start pl-32 ">
            Unbiased Comparison
          </h1>
          <h1 className="text-6xl font-bold text-[#0884FB] text-center py-10">
            Smart Recommendations
          </h1>
          <h1 className="text-6xl font-bold text-black text-end pr-44">
            Latest Updates
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};
