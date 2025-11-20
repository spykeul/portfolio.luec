// import React from 'react'

// const Landingpage = () => {
//   return (
//     <div className='w-full h-screen pt-2 bg-zinc-900'>
//         <div className='px-20 textstructure mt-44'>
//             <div className='mb-20 masker font-custom1 '>
//                 <h1  className='text-8xl  text-[8vw] leading-[7vw] '>I'm a</h1>
//                 <h1  className='text-8xl  text-[10vw] text-blue-400 leading-[8vw]'>Mern Devloper</h1>
//                 <h1  className='text-8xl  text-[10vw] text-blue-400 leading-[8vw]'>Web Pentester</h1>
//                 <h1  className='text-8xl  text-[10vw] text-blue-400 leading-[8vw]'>Digital Creator</h1>
//                 <div  className='text-8xl text-[8vw] leading-[7vw] w-fit flex gap-2'>
//                     <div className='bg-purple-500 w-[8vw] h-[5.7vw] mt-1 rounded'>
//                         <h1 className='px-6 py-3 text-2xl font-light text-black '>CV Here</h1>
//                     </div>
//                     <div>Vivek Bhandari</div>
//                 </div>
//             </div>
//         </div>
//         <div className='border-t-[1px] border-zinc-800 mt-34 h-1'></div>
//         <div className='mt-4 text-xl font-thin text-center'>
//             <h1>scroll to discover</h1>
//         </div>
//     </div>
//   )
// }

// export default Landingpage

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiDownload } from "react-icons/fi";

// const LandingPage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fake loading effect on refresh
//     const loadingTimeout = setTimeout(() => setLoading(false), 2000);

//     // Cleanup timer to avoid memory leaks
//     return () => clearTimeout(loadingTimeout);
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center justify-center w-full h-screen px-4 overflow-hidden text-white bg-black">
//       {/* Glitchy Hacking-Themed Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(10,10,10,0.9) 0%, rgba(20,20,20,1) 50%, rgba(0,0,0,1) 100%)] animate-pulse"></div>

//       {/* LOADING SCREEN - Smooth Fade-in Effect */}
//       <AnimatePresence>
//         {loading && (
//           <motion.div
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//             className="absolute inset-0 flex items-center justify-center font-mono text-3xl text-green-400 bg-black md:text-5xl"
//           >
//             <motion.div
//               initial={{ opacity: 0.3 }}
//               animate={{ opacity: 1 }}
//               transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
//             >
//               INITIALIZING SYSTEM...
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* MAIN CONTENT - Smooth Zoom-in Effect */}
//       {!loading && (
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="flex flex-col items-center w-full max-w-3xl text-center"
//         >
//           {/* Domain Name - Vivek Bhandari */}
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="text-5xl font-extrabold tracking-wider text-green-400 md:text-8xl"
//           >
//             Vivek Bhandari
//           </motion.h1>

//           {/* Subtitle - Professional Hacker */}
//           <motion.h2
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
//             className="mt-4 text-2xl font-semibold text-gray-400 md:text-4xl"
//           >
//             Professional Hacker & Security Expert
//           </motion.h2>

//           {/* Download CV Button - Smooth Hover Effect */}
//           <motion.a
//             href="/vivek_cv.pdf"
//             download
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5, delay: 1 }}
//             whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #00ff00" }}
//             whileTap={{ scale: 0.9 }}
//             className="flex items-center gap-3 px-6 py-3 mt-8 text-lg font-bold text-black transition-all bg-green-600 rounded-lg shadow-lg md:px-8 md:py-4 md:text-xl hover:bg-green-800"
//           >
//             <FiDownload size={24} /> Download CV
//           </motion.a>

//           {/* Matrix-Like Scroll Indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//             className="absolute text-sm tracking-widest text-green-400 bottom-10 md:text-lg"
//           >
//             ⌛ Waiting for user input...
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;

// import React from "react";
// import Titles from "./Titles";

// const LandingPage = () => {
//   return (
//     <div
//       data-scroll
//       data-scroll-session
//       data-scroll-speed="-0.3"
//       className="relative mt-[18vh] px-6 flex flex-col w-full h-auto md:px-4 md:mt-[22vh] bg-black overflow-hidden"
//     >
//       {/* Cyberpunk Floating Background Effects */}
//       <div className="absolute w-32 h-32 bg-purple-500 rounded-full top-10 left-10 blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute w-32 h-32 bg-blue-500 rounded-full bottom-10 right-10 blur-3xl opacity-30 animate-pulse"></div>

//       {/* Title Section */}
//       <div className="w-full max-w-6xl md:px-16 textstructure md:text-left">
//         <div className="mb-10 md:mb-20 font-custom1">
//           <h1 className="text-5xl sm:text-5xl md:text-[8vw] leading-tight md:leading-[7vw]">
//             I'm a
//           </h1>
//           <Titles />
//           <h1 className="text-4xl md:text-[8vw] leading-tight md:leading-[7vw]">
//             Vivek Bhandari
//           </h1>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-zinc-800 w-[90%] md:w-full mx-auto mt-10 md:mt-20"></div>

//       {/* Scroll Hint */}
//       <div className="mt-6 text-lg font-thin text-center md:text-xl">
//         <h1>Scroll to discover</h1>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import Titles from "./Titles";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-session
      data-scroll-speed="-0.3"
      className="relative mt-[18vh] px-8 flex flex-col w-full h-auto md:px-20 md:mt-[22vh] overflow-hidden pb-16"
    >
      {/* Title Section */}
      <div className="w-full max-w-7xl mx-auto textstructure md:text-left">
        <div className="mb-16 md:mb-24 font-custom1 space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-[8vw] leading-tight md:leading-[7vw]">
            I'm a
          </h1>
          <Titles />
          <h1 className="text-4xl sm:text-5xl md:text-[8vw] leading-tight md:leading-[7vw] mt-6">
            Vivek Bhandari
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-700 w-[90%] md:w-full mx-auto mt-16 md:mt-24"></div>

      {/* Scroll Hint */}
      <div className="mt-10 text-lg font-thin text-center md:text-xl text-gray-400">
        <h1>Scroll to discover</h1>
      </div>
    </div>
  );
};

export default LandingPage;
