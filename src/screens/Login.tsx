import { GoogleLogin } from '@react-oauth/google';

export const Login = () => {
  return (
    <>
    <div className=" bg-black h-screen w-screen">
    <video className= "w-full h-full object-cover" muted autoPlay loop>
            <source src='Videos/video.mp4' type='video/mp4'/>
    </video>
    <div className="flex flex-col">
    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out px-5 py-5 pl-5 border-none rounded-2xl shadow-2xl bg-[#0B0D1B] text-white text-6xl font-semibold leading-tight bg-no-repeat bg-left-center my-2">
    Sign in with Google</button>
    </div>
    </div>
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    
    </>
  )
}


