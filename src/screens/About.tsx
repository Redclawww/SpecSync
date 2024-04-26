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
      <div className="bg-[#C2C2C4] w-screen mont-regular">
        <div className=" w-screen bg-cover bg-center">
          <div className="w-screen bg-cover bg-center sm:w-full md:w-full h-screen py-24 flex flex-col justify-center" 
          style={{ backgroundImage: `url(${ip})` }}>
            <div className="glass2 w-fit p-10 lg:ml-24 xl:ml-44 md:ml-10 ">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col  text-left   font-bold text-black ">
              About Us
            </h1>
            <p className="text-black sm:justify-center  sm:text-2xl md:text-2xl lg:text-2xl  font-semibold leading-relaxed ">
              SpecSync is your Personal Phone Matchmaker!
              <br /> Discover the perfect mobile phone tailored to
              <br /> your preferences and needs.
              <br /> We compare, you choose –<br /> because your ideal phone is
              just a sync away!
            </p>
            </div>
          </div>
          <div className="bg-black w-screen p-5 md:p-16 lg: xl:h-max">
            <p className="text-white text-3xl sm:text-2xl md:text-3xl lg:text-6xl mont-semibold text-center text-wrap">
              Discover a new era in mobile phone selection with SpecSync. Our
              advanced platform streamlines comparisons by tailoring
              recommendations to your preferences, budget, and needs. Say
              goodbye to confusion and hello to effortless decision-making.
              Experience the future of phone selection with SpecSync today.
            </p>
          </div>
        </div>
        <div className="w-screen flex justify-center flex-wrap h-fit">
          <video
            className="w-[80vw] sm:w-[682.667px] mt-18 sm:mt-36  xl:mt-28 h-96 flex"
            muted
            autoPlay
            loop
            src={vid1}
          />
          <video className="w-[80vw] sm:w-[682.667px]  xl:mt-96 sm:ml-7 h-96 " 
          muted 
          autoPlay 
          loop 
          src={vid2} />
        </div>
        <div className=" md:p-10 px-5 py-5" >
          <h1 className="md:text-6xl text-3xl font-bold text-black text-start md:pl-32 ">
            Unbiased Comparison
          </h1>
          <h1 className="md:text-6xl text-3xl font-bold text-[#0884FB] md:text-center  py-10">
            Smart Recommendations
          </h1>
          <h1 className="md:text-6xl text-3xl font-bold text-black md:text-end  pr-44">
            Latest Updates
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};
