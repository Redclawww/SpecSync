import { useEffect, useCallback } from "react";
import { useState } from "react";
import axios from "axios";
import DeviceSpecs from "./DeviceSpecs";
import { Specs } from "./Specs";

export type Device = {
  id: string;
  name: string;
  img: string;
  description: string;
};

export default function BrandInput() {
  const [brandlist, setBrandlist] = useState([
    { name: "Amazon", id: "hello" },
    { name: "Amazon", id: "why" },
  ]);
  const [devices, setDevices] = useState([
    {
      id: "apple_ipad_mini_(2021)-11105",
      name: "iPad mini (2021)",
      img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg",
      description:
        "Apple iPad mini (2021) tablet. Announced Sep 2021. Features 8.3″  display, Apple A15 Bionic chipset, 256 GB storage, 4 GB RAM, Scratch-resistant glass.",
    },
    {
      id: "apple_iphone_15_pro-12557",
      name: "iPhone 15 Pro",
      img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
      description:
        "Apple iPhone 15 Pro smartphone. Announced Sep 2023. Features 6.1″  display, Apple A17 Pro chipset, 3274 mAh battery, 1024 GB storage, 8 GB RAM, Ceramic Shield glass.",
    },
  ]);
  const [deviceId, setDeviceId] = useState('');
  const [deviceData,setDeviceData] = useState(null);
  const [isLoading, isSetLoading] = useState(false);
  
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

  async function handleOnChange(event: any) {
    const thisbrand = event.target.value;
    const response = await axios.post(
      "http://localhost:3001/getdevicelist",
      {
        brandId: thisbrand,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    const finaldevice = response.data;
    setDevices(finaldevice);
    isSetLoading(true);
  }

  function handleDeviceChange(e: any) {
    const device = e.target.value;
    console.log(device);
    setDeviceId(device);
  }

  async function handleSubmit(){
    const response = await axios.post(
      "http://localhost:3001/devicedetails",
      {
        deviceId: deviceId
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    const deviceData = response.data;
    console.log(deviceData);
    setDeviceData(deviceData);
  }

  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Brands
      </label>
      <select
        onChange={handleOnChange}
        value={"none"}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={"none"}>Select brand</option>
        {brandlist.map((brand: any) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      {isLoading === false ? (
        <h1></h1>
      ) : (
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Device
          </label>
          <select
            onChange={handleDeviceChange}
            value={"none"}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {devices.map((device: Device) => (
              <option value={device.id}>{device.name}</option>
            ))}
          </select>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={
            handleSubmit
          }
          >
           Submit
          </button>
          {
            deviceData===null?<div></div>:<div className="flex flex-col gap-6">
              <h1 className="text-white text-3xl">{deviceData.name}</h1>
              <img src={deviceData.img} alt="" className="rounded-xl " />
              {/* <DeviceSpecs detailSpec={deviceData.detailSpec} /> */} 
            <Specs specs={deviceData.quickSpec} />
            <button className="px-5 py-5 bg-black text-white rounded-2xl hover:scale-105 transition-all" ><strong>Show Detailed Specifications</strong></button>
            </div>
          }
        </div>
      )}
    </div>
  );
}
