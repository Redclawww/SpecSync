// @ts-nocheck
import axios from "axios";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { DeviceTwoState } from "../store/atoms/DeviceTwo";
type Brandlist = {
    name: string;
    id: string;
    devices: string;
}
const url = import.meta.env.VITE_backendURI;
type BrandProps = {
    Branditems: Brandlist[];
  };
export const Input2: React.FC<BrandProps> = ( Branditems ) => {
  const setDevice2 = useSetRecoilState(DeviceTwoState);
  const [Device,setDevice ]=useState('');
  const [brand,setBrand ]=useState('')
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
  const [isLoading, isSetLoading] = useState(false);
    async function handleOnChange(event: any) {
        const thisbrand = event.target.value;
        setBrand(thisbrand);
        const response = await axios.post(
          `${url}/getdevicelist`,
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

 async  function handleDeviceChange(e: any) {
        const deviceId = e.target.value;
        setDevice(deviceId);
        const response = await axios.post(
          `${url}/devicedetails`,
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
        setDevice2(deviceData);  
      }

  return (
    <div>
    <label
      htmlFor="countries"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Brand 2
    </label>
    <select
      onChange={handleOnChange}
      value={brand}
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[300px] py-5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
    >
      <option value={"none"}>Select brand</option>
      {Branditems && Branditems.brandlist.map((brand: any) => (
        <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
      ))}
    </select>
    {isLoading === false ? (
      <h1></h1>
    ) : (
      <div className="py-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Device
        </label>
        <select
          onChange={handleDeviceChange}
          value={Device}
          id="countries"
          defaultValue={'Brand'}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[300px] py-5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          {devices.map((device: Device) => (
            <option value={device.id}>{device.name}</option>
          ))}
        </select>
        {/* {
          deviceData===null?<div></div>:<div className="flex flex-col gap-6">
            <h1 className="text-white text-3xl">{deviceData.name}</h1>
            <img src={deviceData.img} alt="" className="rounded-xl " />
            <DeviceSpecs detailSpec={deviceData.detailSpec} /> 
          <Specs specs={deviceData.quickSpec} />
          <button className="px-5 py-5 bg-black text-white rounded-2xl hover:scale-105 transition-all" ><strong>Show Detailed Specifications</strong></button>
          </div>
        } */}
      </div>
      
    )}
  </div>
  )
}
