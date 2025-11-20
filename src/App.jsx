// import React from 'react'
// import Navbar from './components/Navbar'
// import Landingpage from './components/Landingpage'
// import Marquee from './components/Marquee'
// import About from './components/About'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Skills from './components/Skills'
// import Footer from './components/Footer'




// const App = () => {
//   return (
//     <div className='w-full min-h-screen overflow-hidden text-white bg-zinc-900'>
//     <Navbar/> 
//     <Landingpage/>
//     <Marquee/>
//     <About/>
//     <Experience/>
//     <Projects/>
//     <Skills/>
//     <Footer/>
//     </div>
//   )
// }

// export default App

import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-zinc-950">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;


// import React, { useEffect, useRef } from "react";
// // import LocomotiveScroll from "locomotive-scroll";
// import Navbar from "./components/Navbar";
// import LandingPage from "./components/LandingPage";
// import Marquee from "./components/Marquee";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Services from "./components/Services";
// import Footer from "./components/Footer";

// const App = () => {
//   const scrollRef = useRef(null); // Reference for scroll container

//   useEffect(() => {
//     // Initialize Locomotive Scroll
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true, // Enables smooth scrolling
//       multiplier: 1.2, // Adjusts scroll speed
//       class: "is-reveal", // Class added to elements when they appear in viewport
//     });

//     return () => {
//       if (scroll) scroll.destroy(); // Clean up on component unmount
//     };
//   }, []);

//   return (
//     <div ref={scrollRef} data-scroll-container className="relative w-full min-h-screen overflow-hidden text-white bg-black">
//       {/* Floating Background Effects */}
//       <div className="absolute top-0 w-40 h-40 bg-purple-500 rounded-full left-10 blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 w-32 h-32 bg-blue-500 rounded-full right-10 blur-3xl opacity-30 animate-pulse"></div>

//       {/* Website Sections */}
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />
//       <Experience />
//       <Projects />
//       <Skills />
//       <Services />
//       <Footer />
//     </div>
//   );
// };

// export default App;


