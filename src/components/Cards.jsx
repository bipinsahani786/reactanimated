import React from "react";

function Cards() {
  return (
    <div className=" w-full h-screen flex items-center px-32 gap-5  bg-zinc-100">
      <div className=" cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl flex items-center justify-center bg-green-300 ">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
        <button className="absolute px-5 py-1 rounded-full border-2 left-6 bottom-6">Hey Buddy</button>
        </div>
      </div>
      <div className=" cardcontainer flex gap-7 h-[50vh] w-1/2">
        <div className="card w-1/2 relative flex items-center justify-center rounded-xl bg-green-800 ">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
        <button className="absolute px-5 py-1 rounded-full border-2 left-6 bottom-6">Hey Buddy</button></div>
        <div className="card w-1/2 relative flex items-center justify-center rounded-xl bg-green-800 ">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
        <button className="absolute px-5 py-1 rounded-full border-2 left-6 bottom-6">Hey Buddy</button></div>
      </div>
    </div>
  );
}

export default Cards;
