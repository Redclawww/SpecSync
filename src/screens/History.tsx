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
      <div className="bg-black w-screen ">
        <div className="w-screen">
          <div className="w-screen h-80 bg-[#4936D8]">
            <h1 className="text-7xl font-semibold text-white text-center pt-48">
              Welcome back
            </h1>
          </div>
          <div className="bg-black w-screen h-screen">
            <h1 className="text-3xl p-28 font-semibold text-white">
              Recently Viewed
            </h1>
            <div className=" flex justify-center gap-7">
             
              {/* <div className="border border-gray-200 rounded-lg py-52 w-96 "></div> */}
            
            <div className="Bg-white text-black"></div>
            {data && data.map((item, index) => (              
                <div className="border-4 border-[#4936D8] rounded-lg py-52 w-96 transition ease-in-out delay-150 bg-[#4936D8] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 flex flex-col" key={index}>
                <div>First Device: {item.device1}</div>
                <div>Second Device: {item.device2} </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
