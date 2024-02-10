import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] text-[#000] rounded-tl-3xl rounded-tr-3xl'>
          <h1 className='font-["Neue_Montreal] text-[3vw] leading-[3vw] tracking-tight' >
              Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great peo­ple.
          </h1>
          <div className="w-full flex border-t-[1.5px] pt-10 mt-20 border-[#90a351]">
              <div className="w-1/2 ">
                  <h1 className="text-5xl">
                      Our Approach:
                  </h1>
                  <button className='flex gap-10 items-center mt-5 px-7 py-4 bg-zinc-900 rounded-full text-white'>
                      Read More
                      <div className="w-2 h-2 bg-zinc-100 rounded-full hover:w-5 hover:h-5"></div>
                  </button>
              </div>
              <div className="w-1/2 h-[70vh] rounded-3xl bg-[#6a6d5f]">
                  <img className='h-[100%] object-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
              </div>
          </div>
    </div>
  )
}

export default About
