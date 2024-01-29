
//import BrandInput from '../components/BrandInput'
// import BrandInput from '../components/BrandInput'
import bgi from '/Images/bgi.png'


export const Home = () => {
  return (
    <>
    <div className=' bg-cover bg-center flex flex-col items-center  w-screen overscroll-none p-12 justify-start'
        style={{ backgroundImage: `url(${bgi})` }}>

      <h1 className='text-9xl font-semibold text-white flex flex-col text-center pt-10 w-full'>COMPARE</h1>
      <div className='flex gap-20'>
      {/* <BrandInput />
      <BrandInput /> */}
      </div>
    </div>
    </>
    
  )
}
