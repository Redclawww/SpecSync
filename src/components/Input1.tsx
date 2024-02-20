// @ts-nocheck
import axios from "axios";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { DeviceOneState } from "../store/atoms/DeviceOne";

type Brandlist = {
  name: string;
  id: string;
  devices: string;
};
const url = import.meta.env.VITE_backendURI;

type BrandProps = {
  Branditems: Brandlist[];
};
export const Input1: React.FC<BrandProps> = (Branditems) => {
  // console.log("Branditems", Branditems);
  const setDevice1 = useSetRecoilState(DeviceOneState);
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
    console.log(thisbrand);
    
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
    console.log(finaldevice);
    
    isSetLoading(true);
  }

  async function handleDeviceChange(e: any) {
    const deviceId = e.target.value;
    const response = await axios.post(
      `${url}/devicedetails`,
      {
        deviceId: deviceId,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    const deviceData = response.data;
    setDevice1(deviceData);
  }

  return (
    <div>
      <label
        htmlFor="brand1"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Brands
      </label>
      <select
        onChange={handleOnChange}
        value={"none"}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block py-5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[300px]"
      >
        <option value={"none"} defaultValue={'Brand'}>
          Select brand
        </option>
        {Branditems &&
          Branditems.brandlist.map((brand: any) => (
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
            value={"none"}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[300px] py-5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          >
            {devices.map((device: any) => (
              <option value={device.id}>{device.name}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
