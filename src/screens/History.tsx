// @ts-nocheck
// import {  useSetRecoilState } from "recoil";
// import { userEmailState } from "../store/selectors/userEmail";
import { useCallback, useEffect } from "react";
import {  useUser } from '@clerk/clerk-react';
import axios from "axios";
import { useState } from "react";
const url = import.meta.env.VITE_backendURI;

export const History = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const email = user?.primaryEmailAddress?.emailAddress;
  const fetchData = useCallback(async()=>{
    await axios
      .get(`${url}/data/${email}`,{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
    }, [email]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="bg-black w-screen mont-regular text-white">
        <div className="w-screen">
          <div className="w-screen h-80 bg-[#4936D8]">
            <h1 className=" text-3xl md:text-7xl font-semibold text-white text-center pt-48">
              Welcome back
            </h1>
          </div>
          <div className="bg-black w-screen h-screen">
            <h1 className=" text-lg md:text-3xl text-center py-16 font-semibold text-white">
              Recently Viewed
            </h1>
            <div className=" flex justify-center gap-7 items-center flex-col">
             
              {/* <div className="border border-gray-200 rounded-lg py-52 w-96 "></div> */}
            
            <div className="Bg-white text-black"></div>
            {data && data.map((item, index) => (              
                <div className="border-4 border-[#4936D8] rounded-lg w-[80vw] py-5 px-5 transition ease-in-out delay-150 bg-[#4936D8] hover:-translate-y-1 hover:scale-110 flex-col md:flex-row hover:bg-indigo-500 duration-100 flex gap-10 justify-between" key={index}>
                <div>{item.device1}</div> VS
                <div>{item.device2} </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
