
import { DeviceInputs } from '../components/DeviceInputs'
import bgi from "/Images/bgi.png";

export const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-center flex flex-col items-center w-screen overscroll-none p-12 justify-start "
        style={{ backgroundImage: `url(${bgi})` }}
      >
        <h1 className="text-[20vh] font-semibold text-white flex flex-col text-center p-10 w-full my-20">
          COMPARE
        </h1>
        <div className="flex gap-20">
          <DeviceInputs />
        </div>
      </div>
    </>
  );
};
