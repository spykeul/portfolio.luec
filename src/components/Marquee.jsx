import React from 'react'
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-session data-scroll-speed=".2" className='w-full py-10 md:py-20 mt-[1vh] md:mt-[10vh] bg-zinc-900 rounded-tr-3xl rounded-tl-3xl border-t border-zinc-700'>
      <div className='flex overflow-hidden border-t-2 border-b-2 text border-zinc-700 whitespace-nowrap'>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[20vw] text-tight tracking-wide leading-none font-extrabold font-custom1 uppercase pr-[14vw] text-metallic'>DEVSEC.KEUL</motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[20vw] text-tight tracking-wide leading-none font-extrabold font-custom1 uppercase pr-[14vw] text-metallic'>DEVSEC.KEUL</motion.h1>
      </div>
    </div>
  )
}

export default Marquee


