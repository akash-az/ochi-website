import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (

    <div data-scroll data-scroll-section data-scroll-speed="0.1" className= "w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl ">
        <div className ="border-t-2 border-b-2 border-zinc-300 flex   whitespace-nowrap overflow-hidden -mb-10">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition= {{ ease: "linear", repeat: Infinity, duration : 10}} className= "text-[17vw] pr-12 font-[Founders_Grotesk_X-condensed]  uppercase font-bold tracking-tighter leading-none -mb -[7vw] -mt-8">we are Ochii</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition= {{ease: "linear", repeat: Infinity, duration : 10}} className= "text-[17vw] pr-12 font-[Founders_Grotesk_X-condensed]  uppercase font-bold tracking-tighter leading-none -mb -[7vw] -mt-8">we are Ochii</motion.h1>
            {/* <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition= {{ease: "linear", repeat: Infinity, duration : 5}} className= "text-[17vw] font-[Founders_Grotesk_X-condensed]  uppercase font-bold tracking-tighter leading-none -mb -[7vw] -mt-8">we are Ochii</motion.h1> */}
        </div>
    </div>
  )
}

export default Marquee