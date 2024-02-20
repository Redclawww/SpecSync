// @ts-nocheck
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/User";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-black h-screen w-screen">
        <video className="w-full h-full object-cover" muted autoPlay loop>
          <source src="Videos/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out px-10 py-5 pl-5 border-none rounded-2xl shadow-2xl text-white text-6xl font-semibold leading-tight bg-no-repeat bg-left-center my-2">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse?.credential) {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);

                const email = decoded.email; 
                const name = decoded.given_name;
                setUser({ userEmail: email, name: name });
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                console.log(email, name);
                fetch("http://localhost:3001/auth", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email, name }), // Pass an object with email and name properties
                })
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Failed to send data to server");
                    }
                    console.log("Data sent successfully");
                    // Handle success as needed
                    navigate("/");
                    
                  })
                  .catch((error) => {
                    console.error("Error sending data to server:", error);
                    // Handle error appropriately, e.g., show an error message to the user
                  });
              } else {
                console.error("Credential is undefined");
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="flex flex-col">
          {/* <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out px-5 py-5 pl-5 border-none rounded-2xl shadow-2xl bg-[#0B0D1B] text-white text-6xl font-semibold leading-tight bg-no-repeat bg-left-center my-2">
    Sign in with Google</button> */}
        </div>
      </div>
    </>
  );
};
