import React from "react";
import "./Contact.css";
import LD from "../../assets/linkedin.png";
import IG from "../../assets/insta.png";
import GH from "../../assets/github.png";
import WA from "../../assets/whatsapp.png";

const Contact = () => {
  return (
    <>
      <div className="dividor w-full h-[1px] mt-16"></div>
      <div className="contactus mt-[20px] w-full pb-[30px] px-[100px] relative">
        <div className="my-[10px]">
          <p className="text-[15px] text-[#ffa500] ">
            {"<button>Follow Me</button>"}
          </p>
        </div>
        <div className="mt-[10px]">
          <h1 className="text-[35px] font-bold">Contact Me</h1>
        </div>
        <div className="mt-[50px] flex flex-wrap justify-between items-center">
          <div className="">
            <div className="">
              <p className="text-xl">
                Phone: <span className="text-[#ffa500]">+91 9825032183</span>
              </p>
              <p className="text-xl">
                Email:{" "}
                <span className="text-[#ffa500] underline">
                  ansarihuzaifa8485@gmail.com
                </span>
              </p>
            </div>
            <div className="mt-5 ">
              <p className="text-3xl font-medium">Follow me on..</p>
              <div className="follow flex gap-[20px] mt-[10px] ">
                <a href="www.linkedin.com/in/ansari-huzaifa-7642b52b0">
                  <img src={LD} alt="" className="w-[30px] rounded-[5px]" />
                </a>
                <a href="https://www.instagram.com/huzaifa_ansari.tech/">
                  <img src={IG} alt="" className="w-[30px] rounded-[5px]" />
                </a>
                <a href="https://github.com/huzaifa-ansari9">
                  <img src={GH} alt="" className="w-[30px] rounded-[5px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[150px] font-black">Thankyou</p>
            <p className="text-[#777777]">~ Huzaifa Ansari</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
