import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export const Navbar = () => {
  // const userEmail = useRecoilValue(userEmailState);
  // const logout = useSetRecoilState(userState);
  // const navigate = useNavigate();

  return (
    <>
      <div className="absolute flex justify-around text-white text-3xl w-screen pt-4 pb-4 items-center">
        <div className="flex items-center flex-row ">
          <Link
            to={"/"}
            className="flex items-center flex-row gap-3 hover:scale-110 transition-all hover:text-blue-600"
          >
            <img
              src="logo.png"
              className="h-12"
              alt="SpecSync Logo"
            />
            SpecSync
          </Link>
        </div>
        <Sheet>
  <SheetTrigger><img src="menu.svg" alt="" className='block md:hidden size-[40px] p-1 bg-white rounded-full' /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>SpecSync</SheetTitle>
      <SheetDescription>
      <div className="border border-gray-200 rounded-[25px] justify-center gap-10 py-3 px-5 text-lg font-semibold flex flex-col">
          <SignedIn>
            <Link
              to={"/about"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to={"/history"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              History
            </Link>           
            <UserButton afterSignOutUrl='/' />                        
          </SignedIn>
          <SignedOut>
            <Link
              to={"/about"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to={"/sign-up"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              Signup
            </Link>
            <Link
              to={"/sign-in"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              Login
            </Link>
          </SignedOut>
          </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        <div className="border border-gray-200 rounded-[25px] justify-center gap-10 py-3 px-7 text-lg font-semibold hidden md:flex">
          <SignedIn>
            <Link
              to={"/about"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to={"/history"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              History
            </Link>           
            <div className="z-20" >
            <UserButton afterSignOutUrl='/' />
            </div>                        
          </SignedIn>
          <SignedOut>
            <Link
              to={"/about"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to={"/sign-up"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              Signup
            </Link>
            <Link
              to={"/sign-in"}
              className="hover:scale-110 transition-all hover:text-blue-600"
            >
              Login
            </Link>
          </SignedOut>
        </div>
      </div>
    </>
  );

  // else {
  //   return (
  //     <>
  //       <div className="absolute flex justify-around text-white text-3xl w-screen pt-4 pb-4 ">
  //         <Link to={"/"} className="flex justify-center items-center gap-5 hover:scale-105 transition-all">
  //           <img
  //             src="https://flowbite.com/docs/images/logo.svg"
  //             className="h-8"
  //             alt="SpecSync Logo"
  //           />
  //           SpecSync
  //         </Link>
  //         <div className=" border border-gray-200 rounded-[25px] flex justify-center gap-20 py-3 px-7 text-lg font-semibold">
  //           <Link to={"/about"} className="hover:scale-110 transition-all hover:text-blue-600">About</Link>
  //           {/* <Link to={"/history"}>History</Link> */}
  //           <Link to={"/sign-up"} className="hover:scale-110 transition-all hover:text-blue-600">Login/Signup</Link>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
};
