// @ts-nocheck
import { DeviceInputs } from "../components/DeviceInputs";
import bgi from "/Images/bgi.png";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

Aos.init({
  duration: 1000,
  offset: 100,
});

export const Home = () => {
  return (
    <>
      <div className="w-screen h-screen  flex justify-center items-center text-white ">
        <video
          className="h-screen w-screen absolute my-0 top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full object-cover -z-10"
          alt=""
          src="https://i.imgur.com/8OV1o1C.mp4"
          muted
          loop
          autoPlay
        />
        <img
          className="absolute top-[20vh] left-[20vh] w-[400px] -z-10"
          src="https://i.imgur.com/WMG0XWD.png"
          alt=""
          data-aos='fade-right'
        />
        <img
          className="absolute top-[20vh] right-[20vh] w-[400px] -z-10"
          src="https://i.imgur.com/SUF8u6g.png"
          alt=""
          data-aos='fade-left'
        />
        <div className="flex flex-col gap-5 flex-wrap text-center" >
          <h1 className=" text-[5vh]" data-aos='fade-up'>
            Compare smartphones with our AI-powered tool <br /> and make the
            right choice
          </h1>
          <h2 className="text-[3vh] text-center"  data-aos='fade-up'>
            Find the perfect smartphone for your needs by comparing features,
            performance, and more
          </h2>
          <div className="flex justify-center gap-12 flex-wrap "  data-aos='fade-up'>
            <button className="border-white border w-fit text-white px-5 py-3 hover:scale-110 transition-all">
              Compare
            </button>
            <button className="bg-white border w-fit text-black px-5 py-3 hover:scale-110 transition-all">
              <Link to='/about'>Learn More</Link>
             
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center flex flex-col items-center w-screen overscroll-none p-12 justify-start bg-black"
        
      >
        {/* <div className="wrapper">
          <div className="gradient gradient-1"></div>
          <div className="gradient gradient-2"></div>
          <div className="gradient gradient-3"></div>
        </div> */}
        <h1 className="text-[6vh] font-semibold text-white flex flex-col text-center p-10 w-full my-20">
          COMPARE & FIND  <br />the best choice now
        </h1>
        <div className="flex gap-20">
          <DeviceInputs />
        </div>
      </div>
    </>
  );
};
