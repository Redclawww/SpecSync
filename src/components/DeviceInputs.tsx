  // @ts-nocheck
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useCallback } from "react";
  import { Input2 } from "./Input2";
  import Specifications from "./Specifications";
  import { useRecoilValue } from "recoil";
  import { Input1 } from "./Input1";
  import { DeviceOneState } from "../store/atoms/DeviceOne";
  import { DeviceTwoState } from "../store/atoms/DeviceTwo";
  import Save from "../store/icons/Save";
  import { userEmailState } from "../store/selectors/userEmail";
  const url = import.meta.env.VITE_backendURI;

  export const DeviceInputs = () => {
    const userEmail = useRecoilValue(userEmailState);
    const deviceData1 = useRecoilValue(DeviceOneState);
    const deviceData2 = useRecoilValue(DeviceTwoState);
    const [finalVerdict, setFinalVerdict] = useState("");
    const [userInput, setUserInput] = useState("");
    const [brandlist, setBrandlist] = useState([
      { name: "Amazon", id: "hello", devices: "45" },
      { name: "Amazon", id: "why", devices: "45" },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = useCallback(async () => {
      try {
        const res = await axios.get(`${url}/brandlist`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        const branddata = await res.data;
        setBrandlist(branddata);
      } catch (error) {
        console.log("error:", error);
      }
    }, []);
    useEffect(() => {
      getData();
    }, [getData]);

    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.post(
          `${url}/compare`,
          {
            userInput: userInput,
            device1: deviceData1,
            device2: deviceData2,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        const AIfeedback = await res.data;
        setIsLoading(true);
        setFinalVerdict(AIfeedback);
      } catch (error) {
        alert("Please try again some time later");
      } finally{
        
      }
    }

    async function handleSave() {
      await axios
        .post(`${url}/save`, {
          email: userEmail,
          userInput: userInput,
          device1: deviceData1.name,
          device2: deviceData2.name,
          finalVerdict: finalVerdict,
        })
        .then((res) => {
          alert("Saved Successfully");
        })
        .catch((error) => {
          // Handle error
          console.error(error);
          alert("Server Error");
        });
    }

    return (
      <>
      <div className="flex gap-20 flex-col items-center  flex-wrap">
        <div className="flex gap-20 justify-center flex-wrap">
          <Input1 brandlist={brandlist} />
          <Input2 brandlist={brandlist} />
        </div>
        <div className="mb-6 w-fit text-center ">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Specify your Preference
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-110 "
              role="button"
              onClick={handleSubmit}
            >
              Submit
            </a>
          </div>
        </div>
        {isLoading === false ? (
          <div></div>
        ) : (
          <div className="flex gap-32 flex-col items-center ">
            <div className="flex gap-32 justify-center flex-wrap">
              <Specifications
                props={deviceData1}
                quickSpec={deviceData1.quickSpec}
              />
              <Specifications
                props={deviceData2}
                quickSpec={deviceData2.quickSpec}
              />
            </div>
            <div className="bg-black rounded-2xl border border-gray-400 p-10 text-white w-3/4 ">
              <h1 className="text-3xl text-center pb-14">The Final Verdit 🥳</h1>
              <p>{finalVerdict}</p>
            </div>
            <div className="text-white flex mb-15 gap-3 bg-black p-3 rounded-2xl hover:scale-110 ease-in-out transition-all">
              <div className="">Wanna Save??</div>
              <div className="hover:cursor-pointer" onClick={handleSave}>
                <Save />
              </div>
            </div>
          </div>
        )}
      </div>
      </>
    );
  };
