import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <div className="absolute flex justify-around text-white text-3xl w-screen pt-4 pb-4 ">
      <Link to={'/'}>SpecSync</Link>
      <div className=" border border-gray-200 rounded-[25px] flex justify-center gap-20 py-3 px-7 text-lg font-semibold">
      <Link to={'/about'}>About</Link>
      <Link to={'/login'}>Login/Signup</Link>
      </div>   
    </div> 
    </>
    
  )
}

