import bgi from '../assets/Images/bgi.png'

export const Home = () => {
  return (
    <>
    <div className='bg-black h-screen bg-cover bg-center flex items-center'
        style={{ backgroundImage: `url(${bgi})` }}>
      <h1 className='text-9xl font-semibold text-white flex items-center pt-40'>COMPARE</h1>
    </div>
    </>
    
  )
}
