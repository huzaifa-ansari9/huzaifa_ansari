import React from "react";
import "./lifeline.css";
const Lifeline = () => {
  const timelineData = [
    {
      description: "Year - 2008 | Born on 26 September, 2008",
    },
    {
      description: "Year - 2011 | Go to Nursery Class at Nelson School ",
    },
    {
      description: "Year - 2014 | Complete Sr. KG at Nelson School and Admission in first class in MS public School",
    },
    {
      description: "Year - 2019 | Complete 4th class at MS Public School and Admission in 5th Class in Faizan English School also admission in Madarsa",
    },
    {
      description: "Year - 2023 | Leaving the Madarsa. Increasing interest in Technology, excited to learn coding. Take admission in Shahin Computer Class",
    },
    {
      description: "Year - 2024 | Passout 9th Class and go to 10th Class.",
    },
    {
      description: "[Now] Year - 2025 | Passout class 10th with 92.36% and take admission in 11th Class",
    },
  ];
  return (
    <>
      <div className="dividor w-full h-[1px] mt-16"></div>
      <div className="lifeline mt-[20px] w-full px-[100px] relative">
        <div className="style1"></div>
        <div className="my-[10px]">
          <p className="text-[15px] text-[#ffa500] ">
            const renderLifeline = {"{"}
          </p>
        </div>
        <div className="mt-[10px]">
          <h1 className="text-[35px] font-bold">My Lifeline❤️</h1>
        </div>
        <div className="px-[50px]">
          <div className="subLifeLine border-l-2 border-[#ffa500] mt-[50px] flex flex-col gap-[50px] relative">
            {timelineData.map((timeline, index) => (
              <div key={index} className="flex items-center">
                <div className="w-[30px] h-[30px] rounded-full bg-[#ffa500] relative -left-[15px]"></div>
                <p className="font-bold ">{timeline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lifeline;
