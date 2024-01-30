// import React from 'react'
import ip from '/Images/ip.png'
import vid1 from '/Videos/vid1.mp4'
import vid2 from '/Videos/vid2.mp4'

export const About = () => {
  return (
    <>
      <div className='h-screen w-screen bg-cover bg-center'
      style={{backgroundImage: `url(${ip})`}}>
<div className=''>
<h1 className='text-7xl flex flex-col pt-52 text-left pl-36 font-mono font-bold text-rose-950'>About Us</h1>
<p className='text-rose-950  font-mono pl-32 font-semibold pt-8 leading-relaxed'>SpecSync is your Personal Phone Matchmaker!<br/> Discover the perfect mobile phone tailored to<br/> your preferences and needs.<br/> We compare, you choose –<br/> because your ideal phone is just a sync away!</p>
</div>
      </div>
      <div className='h-screen w-screen flex justify-center bg-[#C2C2C4]'>
       <video className='mt-20 h-96 mr-7 flex ' muted autoPlay loop src={vid1} />
       <p></p>
       <video className='mt-96 ml-7 h-96' muted autoPlay loop src={vid2} />
      </div>
      <div className='h-screen block relative  items-center bg-[#C2C2C4]'>
        <h1 className='text-6xl ml-72 font-bold text-rose-950 '>Unbiased Comparison</h1>
        <h1 className='text-6xl ml-96 font-bold text-rose-950 '>Smart Recommendations</h1>
        <h1 className='text-6xl flex justify-end mr-96 font-bold text-rose-950 '>Latest Updates</h1>
      </div>
    </>
  )
}


