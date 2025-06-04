import React, { useEffect, useState } from "react";
import "./App.css";
import myImage from "./assets/huzaifa.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(useGSAP);

  const [pointerPosition, setPointerPosition] = useState([]);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".myName, .myName > *", {
      opacity: 0,
      fontSize: 110,
      duration: 1.5,
      delay: 0.5,
    });
    tl.from(".myImage", {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    tl.from(".knowmore", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });
  });

  useEffect(() => {
    gsap.to(".customPointer", {
      x: pointerPosition[0],
      y: pointerPosition[1],
    });
  }, [pointerPosition]);

  const mouseHandler = (props) => {
    setPointerPosition([props.clientX, props.clientY]);
  };

  return (
    <>
      <main
        className="main relative w-full h-screen bg-black select-none overflow-y-scroll overflow-x-hidden"
        onMouseMove={mouseHandler}
      >
        <div className="w-[1px] z-100 customPointer h-[1px] absolute top-[0] left-0  rounded-full"></div>
        <div className="subDiv w-full h-full px-[100px] text-white gap-[50px] flex justify-around items-center">
          <div className=" w-[1190px] h-[258px]">
            <p className="myName">HUZAIFA </p>
            <p className="myName">ANSARI</p>
            <p className="text-[18px] knowmore">
              <a href="#knowmore" className="">
                Knowmore
              </a>{" "}
              about HUZAIFA ANSARI
            </p>
          </div>
          <div className="myImage bg-[#323232] overflow-hidden rounded-2xl opacity-100">
            <img className="w-[800px]" src={myImage} alt="HUZAIFA ANSARI" />
          </div>
        </div>

        <div
          className="about w-full px-[100px] text-white flex flex-col gap-[30px]"
          id="knowmore"
        >
          <div className="">
            <p className="text-[15px] text-[#ffa500] font-medium">
              console.log(about_me);
            </p>
            <div className="w-full border-white border-y-[1px] py-[10px]">
              <h2 className="text-[35px] font-bold">About Me</h2>
            </div>
          </div>

          <div className="">
            <p>Hello 👋</p>
            <p>
              My name is <span className="text-[#ffa500]">HUZAIFA ANSARI.</span>{" "}
              I am 16 years old and currently studying in class 11th [PCM] at
              Faizan English School. I'm a young tech enthusiast with a dream to
              become a Software Engineer. Right now, I am living that dream.
              Although I don’t have a degree yet, I already possess the skills
              of a software engineer.
            </p>

            <p>
              I work with various technologies such as{" "}
              <span className="text-[#59A946] font-medium">NodeJS,</span>{" "}
              <span className="text-[#58C4DC] font-medium">ReactJS,</span>{" "}
              <span className="text-[#3772A2] font-medium">Python,</span>{" "}
              <span className="text-[#F7E01D] font-medium">JavaScript,</span>{" "}
              <span className="text-[#5EC8F8] font-medium">Flutter,</span> etc.
              If you'd like to hear my story, keep reading...
            </p>

            <div className="h-7"></div>

            <p>
              First, thank you for taking the time to read my story. When I was
              10 years old, I had difficulty breathing because one of my
              nostrils was blocked. My father took me to a doctor who, after
              examining me, asked us to follow him. We were taken into an
              operation room (Operation Theatre). I was shocked and scared — it
              was the first time I had seen such a place. My father came in with
              me. The doctor asked me to lie down on the bed, and although I was
              frightened, I had no choice.
            </p>

            <p>
              I sat on the bed and started crying. As a 10-year-old, everything
              was unfamiliar to me — the lights, equipment, and even the smell.
              My father tried to calm me, but I couldn't stop crying. The doctor
              wanted to use a microscopic camera to examine my nose and mouth.
              After the checkup, he started a casual conversation with me.{" "}
              <span className="text-[#ffa500]">
                Then suddenly, he asked, "What do you want to become in the
                future?"
              </span>{" "}
              I replied,{" "}
              <span className="text-[#ffa500]">
                "I want to become a GREAT SCIENTIST."
              </span>{" "}
              At the time, I didn’t fully understand what I said, but day by
              day, I grew into{" "}
              <span className="text-[#ffa500]">
                one of the youngest tech enthusiasts.
              </span>
            </p>

            <p>
              I am very thankful to my father, who has always supported me. Now
              at 16, I can proudly say that{" "}
              <span className="text-[#ffa500]">
                I have the level of software engineering knowledge that a
                postgraduate student would have.
              </span>
            </p>

            <p>
              I've built some unique projects like{" "}
              <span className="text-[#ffa500]">
                a blogging website, hotel management software, and a restaurant
                website (Habibi).
              </span>{" "}
              I’m currently learning Flutter for mobile development. I work
              across the stack — frontend, backend, and mobile. I’m skilled in
              Python, Dart, Java, and more.
            </p>

            <div className="h-10 border-white border-b-[1px]"></div>

            <p className="text-[15px] text-[#ffa500] font-medium">
              process.end(about_me)
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
