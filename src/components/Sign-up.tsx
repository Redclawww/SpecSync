import { SignUp } from "@clerk/clerk-react"
 
export default function SignUpPage() {
  return <div className="flex justify-center items-center h-screen w-screen">
    <video className="w-screen h-screen object-cover absolute" muted autoPlay loop>
          <source src="Videos/video.mp4" type="video/mp4" />
    </video>
    <SignUp />
  </div>;
}