import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import gsmarena from 'gsmarena-api';
import axios from "axios";

export default function BrandInput() {
  const [brandlist, setBrandlist] = useState(["Apple"]);
  const [device, setDevice] = useState("");
  useEffect(()=>{
    const data = getData();
    setBrandlist(data);
  },[])

  async function getData(){
    const res = await axios.post('http://localhost:3000/brandlist');
    const branddata = res.data;
    return branddata;
  }
  const handleOnChange = (e: any) => setDevice(e.target.value);

  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Brands
      </label>
      <select
        defaultValue={"none"}
        value={'none'}
        onChange={handleOnChange}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Choose a Brand</option>
        {brandlist.map((brand: any) => (
          <option value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
}
