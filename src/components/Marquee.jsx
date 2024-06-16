import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".6" className='w-full h-80 rounded-xl py-15 bg-[#004D43]'>
       <div className='text relative top-6 bottom-6 border-t-2 border-b-2  overflow-hidden border-zinc-300 flex whitespace-nowrap'>
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='text-[15vw] leading-none font-semibold uppercase pt-10 mb-12 pr-20'>we are ochi </motion.h1>
       <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='text-[15vw] leading-none font-semibold uppercase pt-10 mb-12 pr-20'>we are ochi</motion.h1>
      
       </div>
    
    </div>
  );
}

export default Marquee