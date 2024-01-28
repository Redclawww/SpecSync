import bgi from '/Images/bgi.png'

export const Home = () => {
  return (
    <>
    <div className='h-[1898px] bg-cover bg-center flex items-center'
        style={{ backgroundImage: `url(${bgi})` }}>
      <h1 className='text-9xl font-semibold text-white flex items-start justify-start w-full'>COMPARE</h1>
    </div>
    </>
    
  )
}
