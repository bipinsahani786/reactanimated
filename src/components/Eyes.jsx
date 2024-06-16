import React, { useEffect, useState } from "react";

function Eyes() {
    const [rotate, setRotate] = useState(0);


    useEffect(() => {
        window.addEventListener("mousemove" , (e) =>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerWidth/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);

           setRotate(angle-180);

        })
    })
  return (
    <div  className="eyes w-full h-screen overflow-hidden">
      <div data-scroll  data-scroll-speed="-.7"  className=" relative w-full bg-cover bg-center h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="w-[15vw] h-[15vw]  flex items-center justify-center rounded-full bg-zinc-100">
            <div className=" relative w-2/3 h-2/3 rounded-full  bg-black">
              <div style= {{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2  w-full h-10">
                <div className="w-6 h-6 rounded-full  bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full relative bg-black">
            <div style= {{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}   className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10">
            <div className="w-6 h-6 rounded-full  bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
