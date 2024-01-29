import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <div className="absolute  flex justify-around text-white text-3xl w-screen pt-4 pb-4 ">
    <Link to={'/'}>SpecSync</Link>
      <div className="w-72 h-10 ring ring-gray-500 rounded-lg flex justify-center">
      <Link to={'/about'}>About</Link>
      </div>
      <Link to={'/login'}>Login</Link>
    </div> 
    </>
    
  )
}

