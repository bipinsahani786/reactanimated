import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-16">
      <div className=" w-full px-16 border-b-2 border-zinc-100 pb-16">
        <h1 className=" text-6xl  tracking-tight ">Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className=" cards mt-10 w-full flex gap-16">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" cardcontainer relative w-1/2 h-[70vh]  "
          >
            <h1 className="absolute left-full text-[#CDEA68]  leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] text-8xl ">
              <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68]  leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] text-8xl ">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.45, 0, 0.55, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </h1>
            <div className="w-full h-ful rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              ></img>
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" cardcontainer relative w-1/2 h-[70vh] "
          >
            <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68]  leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] text-8xl overflow-hiddenmotion. ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.45, 0, 0.55, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-ful rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
