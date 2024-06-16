import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
function Landingpage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className=" w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className='masker '>
            <div className="w-fit flex items-end ">
              {index === 1 && (<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.5, 1, 0.89, 1] , duration: 1}} className="mr-5 w-[8vw] rounded-md h-[5vw]  relative bg-green-500"></motion.div>)}
              <h1 className="uppercase  text-[7.5vw] leading-[6vw] tracking-tighter font-semibold font-sans">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-700 rounded-full font-light text-sm">start the project</div>
          <div className="w-10 h-10 rounded-full border-[2px] border-zinc-700  font-light text-sm flex items-center justify-center"><BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
