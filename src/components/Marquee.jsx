import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
          <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden">
              <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity ,ease: "linear", duration:5}} className="text-[21vw] tracking-wide leading-none font-['Haettenschweiler'] font-normal uppercase pr-10">
                  We are ouchi
              </motion.h1>
              <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity ,ease: "linear", duration:5}} className="text-[21vw] tracking-wide leading-none font-['Haettenschweiler'] font-normal uppercase pr-10">
                  We are ouchi
              </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
