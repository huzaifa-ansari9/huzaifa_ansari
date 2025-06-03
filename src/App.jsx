import React from 'react'
import './App.css'
import myImage from  './assets/huzaifa.jpg'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


const App = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from(".myName, .myName > *", {
      fontSize: 110,
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });
    tl.from(".myImage", {
      y:-100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
  })
  return (
    <>
      <main className='main w-full h-screen bg-black select-none'>
        <div className='subDiv w-full h-full px-[100px] text-white flex justify-around items-center'>
          <div className=" w-[1190px] h-[258px]">
            <p className='myName'>HUZAIFA <span className='text-[120px]'>ANSARI </span></p>
          </div>
          <div className="myImage bg-[#323232] overflow-hidden rounded-2xl opacity-100">
            <img className='w-[800px]' src={myImage} alt="HUZAIFA ANSARI" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
