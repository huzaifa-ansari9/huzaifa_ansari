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
      description:
        "Year - 2014 | Complete Sr. KG at Nelson School and Admission in first class in MS public School",
    },
    {
      description:
        "Year - 2019 | Complete 4th class at MS Public School and Admission in 5th Class in Faizan English School also admission in Madarsa",
    },
    {
      description:
        "Year - 2023 | Leaving the Madarsa. Increasing interest in Technology, excited to learn coding. Take admission in Shahin Computer Class",
    },
    {
      description: "Year - 2024 | Passout 9th Class and go to 10th Class.",
    },
    {
      description:
        "[Now] Year - 2025 | Passout class 10th with 92.36% and take admission in 11th Class",
    },
  ];
  return (
    <>
      <div className="dividor w-full h-[1px] mt-16"></div>
      <div className="lifeline px-[20px] mt-[20px] w-full lg:px-[100px] relative">
        <div className="style1"></div>
        <div className="my-[10px]">
          <p className="text-[15px] text-[#ffa500] ">
            const renderLifeline = {"{"}
          </p>
        </div>
        <div className="mt-[10px]">
          <h1 className="text-[35px] font-bold">My Lifeline❤️</h1>
        </div>
        <div className="lg:px-[50px]">
          <div className="subLifeLine border-l-2 border-[#ffa500] mt-[50px] flex flex-col gap-[100px] relative">
            {timelineData.map((timeline, index) => (
              <div key={index} className="flex items-center gap-[10px]">
                {/* Ball Container */}
                <div className="flex items-center justify-center h-full min-h-[30px] relative lg:min-h-[50px] -left-[8px] lg:-left-[15px]">
                  <div className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rounded-full bg-[#ffa500]"></div>
                </div>

                {/* Text */}
                <p className="text-[10px] lg:text-lg">{timeline.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="subLifeLine border-l-2 border-[#ffa500] mt-[50px] flex flex-col gap-[100px] relative">
            {timelineData.map((timeline, index) => (
              <div key={index} className="flex items-start gap-[10px]">
                <div className="w-[15px] h-[15px] -left-[8px] lg:w-[30px] lg:h-[30px] rounded-full bg-[#ffa500] relative lg:-left-[25px]"></div>
                <p className="text-[10px] lg:text-lg">{timeline.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Lifeline;
