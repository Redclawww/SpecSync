// import React from 'react'
import ip from '/Images/ip.png'
import pic1 from '/Images/pic1.png'
import pic2 from '/Images/pic2.png'

export const About = () => {
  return (
    <>
      <div className='h-screen w-screen bg-cover bg-center'
      style={{backgroundImage: `url(${ip})`}}>
<div className=''>
<h1 className='text-7xl flex flex-col pt-52 text-left pl-36 font-mono font-bold text-black'>About Us</h1>
<p className='text-black  font-mono pl-32 font-semibold pt-8 leading-relaxed'>SpecSync is your Personal Phone Matchmaker!<br/> Discover the perfect mobile phone tailored to<br/> your preferences and needs.<br/> We compare, you choose –<br/> because your ideal phone is just a sync away!</p>
</div>
      </div>
      <div className='h-screen w-screen bg-[#C2C2C4]'>
       <img className='w-max h-96' src={pic1} />
       <img className='w-max' src={pic2} />
      </div>
    </>
  )
}


