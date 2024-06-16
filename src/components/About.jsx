import React from 'react'

function About() {
  return (
    <div className=' w-full p-20  bg-[#CDEA68] rounded-t-3xl text-black'>
    
    <h1 className='font-[Neue_Montreal] text-5xl tracking-tight leading-11'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
    <div className=' w-full flex gap-5 border-t-[2px] mt-20 border-[#a1b562]'>
      <div className=' w-1/2'>
      <h1 className=' text-black text-5xl'>Our Approach</h1>
      <button className=' mt-4 gap-8 items-center px-6 py-3 bg-zinc-900 rounded-full text-white flex '>Read More
      <div className=' w-3 h-3 bg-zinc-100 rounded-full'></div></button>
      
      </div>
       <div className='w-1/2 h-[70vh] rounded-3xl bg-[#4f504c]'>
       <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' className='w-full h-full rounded-xl'></img>
       </div>
    </div>
    </div>
  )
}

export default About