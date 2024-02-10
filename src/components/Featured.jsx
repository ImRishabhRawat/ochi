import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const Featured = () => {
     const [hoveredCard, setHoveredCard] = useState(null);

    const handleHover = (card) => {
        setHoveredCard(card);
    }
const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
    <div className='w-full py-20  px-20'>
          <div className="w-full pb-16 border-b-[1px] border-zinc-700">
              <h1 className="text-6xl tracking-tight font-['Neue_Montreal']">Featured Projects</h1>
          </div>
          <div className=" relative card w-full flex gap-10 mt-10">
              <motion.div className="cardcontainer w-1/2 h-[80vh] " onHoverStart={() => handleHover('FYDE')} onHoverEnd={() => handleHover(null)}>
                  <div className="w-full rounded-xl h-full overflow-hidden">
                      <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                  </div>
              </motion.div>
              <div className=" overflow-hidden headings w-[20vw] h-[17vh] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-40 flex flex-col justify-center items-center">
                    <AnimatePresence>
                        
                  <motion.div  className="absolute text-center -top-[20%] text-[#b1c962]">
                        {hoveredCard === 'FYDE' && (<motion.h1  initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={variants} className='uppercase text-[7vw] font-["Haettenschweiler"] '>
                            {"FYDE".split("").map((items, index) => (
                                <motion.span key={index} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: index * 0.1 }}>
                                        {items}
                                    </motion.span>
                                ))}
                        </motion.h1>)}
                     {hoveredCard === 'TRAWA' && (<motion.h1 initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={variants} className='  uppercase text-[7vw] font-["Haettenschweiler"]'>
                          {"TRAWA".split("").map((items, index) => (
                              <motion.span key={index} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: index * 0.1 }}>
                                        {items}
                                    </motion.span>
                              ))}
                </motion.h1>)}
                </motion.div>
                              </AnimatePresence>
              </div>
              <motion.div className="cardcontainer w-1/2 h-[80vh]  " onHoverStart={() => handleHover('TRAWA')} onHoverEnd={() => handleHover(null)}>
                  <div className="w-full rounded-xl h-full overflow-hidden ">
                      <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                  </div>
              </motion.div>
          </div>
    </div>
  )
}

export default Featured
