import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { Input1 } from "./input1";
import { Input2 } from "./Input2";
import Specifications from "./Specifications";
import { useRecoilState } from "recoil";


export const DeviceInputs = () => {
    const {deviceData1,setDeviceData1} = useRecoilState(dev)
    const [userInput, setUserInput] = useState('')
  const [brandlist, setBrandlist] = useState([
    { name: "Amazon", id: "hello", devices: "45" },
    { name: "Amazon", id: "why", devices: "45" },
  ]);
    const [isLoading,setIsLoading] = useState(false)

  const getData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3001/brandlist", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const branddata = await res.data;
      setBrandlist(branddata);
    } catch (error) {
      alert("Please try again some time later");
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

   async function handleSubmit(){
    
  }


  return (
    <div className="flex gap-20 flex-col">
      <div className="flex gap-20">
      <Input1 brandlist={brandlist} />
      <Input2 brandlist={brandlist} />
      </div>
      <div className="mb-6">
    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specify your Preference</label>
    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"    
    value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
</div>
      <div className="flex justify-center items-center">
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Submit
          </a>
        </div>
      </div>
      {
        isLoading===false?<div></div>:
        <div>
            <Specifications />
            <Specifications />
        </div>
      }
    </div>
  );
};
