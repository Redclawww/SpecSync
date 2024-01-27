"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default async function page(){

  const [brandlist, setBrandlist] = useState('Apple');
  const [device, setDevice] = useState('');
  const data = ['Hello'];
     useEffect(() => {
    setDevice(brandlist);
  }, [brandlist]);
    
    return <div>
    <label
      htmlFor="countries"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Brands
    </label>
    <select
    value={brandlist}
    onChange={(e) => setBrandlist(e.target.value)}
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option defaultValue={"none"}>Choose a Brand</option>
      {data.map((brand: any) => (
        <option value={brand} >{brand}</option>
    ))}
    </select>
    
  </div>
}