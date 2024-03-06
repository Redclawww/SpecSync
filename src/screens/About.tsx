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
            <h1 className="text-7xl flex flex-col pt-52 text-left pl-36 font-mono font-bold text-black">
              About Us
            </h1>
            <p className="text-black font-mono pl-32 font-semibold pt-8 leading-relaxed">
              SpecSync is your Personal Phone Matchmaker!
              <br /> Discover the perfect mobile phone tailored to
              <br /> your preferences and needs.
              <br /> We compare, you choose –<br /> because your ideal phone is
              just a sync away!
            </p>
          </div>
          <div
            className="h-screen w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${ip})` }}
          ></div>

          <div className="bg-black w-screen h-screen">
            <p className="text-white text-6xl font-semibold text-center p-32">
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
        <div className="h-screen w-screen flex justify-center ">
          <video
            className="mt-20 h-96 mr-7 flex"
            muted
            autoPlay
            loop
            src={vid1}
          />
          <p></p>
          <video className="mt-96 ml-7 h-96" muted autoPlay loop src={vid2} />
        </div>
        <div className="relative mt-20 p-10">
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
