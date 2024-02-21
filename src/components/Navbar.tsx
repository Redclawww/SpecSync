// @ts-nocheck
import { Link, useNavigate } from "react-router-dom";
import { userEmailState } from "../store/selectors/userEmail";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../store/atoms/User";


export const Navbar = () => {
  const userEmail = useRecoilValue(userEmailState);
  const logout = useSetRecoilState(userState)
  const navigate = useNavigate();
  const handleLogout = () =>{
    logout({
      isLoading: true,
      userEmail: '',
      name: '',
    });
    localStorage.setItem("name",'');
    localStorage.setItem("email",'');
    navigate('/');
  }
  if (userEmail!=='') {
    return (
      <>
        <div className="absolute flex justify-around text-white text-3xl w-screen pt-4 pb-4 items-center">
          <div className="flex items-center flex-row">
            <Link to={"/"} className="flex items-center flex-row gap-3 hover:scale-110 transition-all hover:text-blue-600">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="SpecSync Logo"
              />
              SpecSync
            </Link>
          </div>
          <div className=" border border-gray-200 rounded-[25px] flex justify-center gap-5 py-3 px-7 text-lg font-semibold">
            <Link to={"/about"} className="hover:scale-110 transition-all hover:text-blue-600">About</Link>
            <Link to={"/history"} className="hover:scale-110 transition-all hover:text-blue-600">History</Link>          
              <div className="hover:scale-110 transition-all hover:text-blue-600">
              Hi!! {userEmail}
              </div>
            <button className="hover:scale-110 transition-all hover:text-red-600" onClick={handleLogout} >logout</button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="absolute flex justify-around text-white text-3xl w-screen pt-4 pb-4 ">
          <Link to={"/"} className="flex justify-center items-center gap-5 hover:scale-105 transition-all">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="SpecSync Logo"
            />
            SpecSync
          </Link>
          <div className=" border border-gray-200 rounded-[25px] flex justify-center gap-20 py-3 px-7 text-lg font-semibold">
            <Link to={"/about"} className="hover:scale-110 transition-all hover:text-blue-600">About</Link>
            {/* <Link to={"/history"}>History</Link> */}
            <Link to={"/login"} className="hover:scale-110 transition-all hover:text-blue-600">Login/Signup</Link>
          </div>
        </div>
      </>
    );
  }
};
