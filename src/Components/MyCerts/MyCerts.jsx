import React from "react";
import './Components.css'
import EH from "../../assets/certs/EH.jpg";
import DM from "../../assets/certs/DigitalMarketing.jpeg";
import GD from "../../assets/certs/GraphicDesign.jpeg";
import BE from "../../assets/certs/BE.png";
import FE from "../../assets/certs/FE.png";
import WD from "../../assets/certs/WebDesign.jpeg";

const MyCerts = () => {
  return (
    <>
      <div className="dividor w-full h-[1px] mt-16"></div>

      <div className="myCerts w-full py-[50px] px-[100px]">
        <div className="mt-[10px]">
          <p className="text-[15px] text-[#ffa500]">
            const renderCertificates = {"{"}
          </p>
        </div>
        <h2 className="text-[35px] mt-[30px] font-bold">My Certs</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 relative">
          <img className="w-full rounded-lg p-[2px] border-[1px] border-[#ffa500] duration-200 hover:scale-150 hover:shadow-2xl  " src={EH} alt="EH" />
          <img className="w-full rounded-lg p-[2px] border-[1px] border-[#ffa500] duration-200 hover:scale-150 hover:shadow-2xl  " src={DM} alt="DM" />
          <img className="w-full rounded-lg p-[2px] border-[1px] border-[#ffa500] duration-200 hover:scale-150 hover:shadow-2xl  " src={GD} alt="GD" />
          <img className="w-full rounded-lg p-[2px] border-[1px] border-[#ffa500] duration-200 hover:scale-150 hover:shadow-2xl  " src={BE} alt="BE" />
          <img className="w-full rounded-lg p-[2px] border-[1px] border-[#ffa500] duration-200 hover:scale-150 hover:shadow-2xl  " src={WD} alt="WD" />
          <img className="w-full rounded-lg p-[2px] border-[1px] border-[#ffa500] duration-200 hover:scale-150 hover:shadow-2xl  " src={FE} alt="FE" />
        </div>
      </div>
    </>
  );
};

export default MyCerts;
