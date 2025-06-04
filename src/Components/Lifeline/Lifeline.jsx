import React from "react";
import "./lifeline.css";
const Lifeline = () => {
  return (
    <>
      <div className="dividor w-full h-[1px] mt-16"></div>
        <div className="lifeline w-full h-screen px-[100px]">
         <div className="my-[10px]">
           <p className="text-[15px] text-[#ffa500] ">
            const renderLifeline = {"{"}
          </p>
         </div>
          <div className="mt-[10px]">
            <h1 className="text-[35px] font-bold">My Lifeline❤️</h1>
          </div>
          <div className="subLifeLine mt-[70px] flex flex-col">
            <div className="flex items-center gap-[15px] font-medium">
              <div className="w-[30px] h-[30px] bg-[#ffa500] rounded-full"></div>
              <p>Born on 26 September, 2008</p>
            </div>
            <div className="h-[50px] w-[2px] bg-[#ffa500] ml-[15px]"></div>
          </div>
        </div>
    </>
  );
};

export default Lifeline;
