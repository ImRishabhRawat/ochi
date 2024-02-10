import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed='-.3' className=" w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((items, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{ width: 0 }} animate={{width: "9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500">
                    <img className='h-[100%] object-cover rounded-md' src="../../cover.jpg" alt="cover" />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb[1vw] uppercase text-[6vw] leading-[.75] font-['Haettenschweiler']">
                  {items}
                </h1>
              </div>
            </div>
          )
        })}
       
      </div>
      <div className="border-t-2 border-zinc-800 mt-32 flex items-center justify-between px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((items, index) =>
          <p key={index} className='text-md font-light tracking-tight leading-none mt-5 text-gray-300'>
          {items}
          </p>)}
        <div className="start flex items-center gap-3">
          <div className="px-4 py-2 uppercase border-[2px] border-zinc-800 rounded-full mt-5 text-md text-gray-300  font-light leading-none">Start the project</div>
          <div className="w-[30px] h-[30px] border-[2px] border-zinc-800 rounded-full flex items-center justify-center mt-5 rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
