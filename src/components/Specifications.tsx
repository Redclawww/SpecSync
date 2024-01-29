import React from "react";

const Specifications = (deviceData) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-white text-3xl">{deviceData.name}</h1>
      <img src={deviceData.img} alt="" className="rounded-xl " />
      {/* <DeviceSpecs detailSpec={deviceData.detailSpec} /> */}
      <Specs specs={deviceData.quickSpec} />
      <button className="px-5 py-5 bg-black text-white rounded-2xl hover:scale-105 transition-all">
        <strong>Show Detailed Specifications</strong>
      </button>
    </div>
  );
};

export default Specifications;
