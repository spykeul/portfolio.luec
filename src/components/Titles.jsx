import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CVOverlay from './CVOverlay';

const RotatingTitles = () => {
  const titles = ["Mern devloper", "Pentester", "Digital Creator"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2 w-fit">
      {/* Animated CV Box - Now clickable */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "10vw" }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        onClick={() => setShowCV(true)}
        className="bg-metallic-gradient shadow-metallic hover:shadow-metallic-lg mb-3 w-[30vw] md:w-[33vw] lg:w-[10vw] h-[14vw] md:h-[6vw] lg:h-[5.7vw] rounded-md md:flex items-center justify-center border border-zinc-700 cursor-pointer hover:scale-105 hover:border-royal-blue transition-all duration-300 group"
      >
        <h1 className="px-3 text-sm font-light text-center text-zinc-900 group-hover:text-royal-blue font-custom2 md:text-lg lg:text-xl font-semibold transition-colors">
          View CV →
        </h1>
      </motion.div>

      {/* Rotating Titles */}
      <h1
        className="text-royal-blue text-5xl sm:text-5xl md:text-[8vw] md:leading-[7vw] lg:text-[8vw] leading-tight transition-opacity duration-1000 ease-in-out opacity-100 animate-fade"
        key={currentIndex}
      >
        {titles[currentIndex]}
      </h1>

      {/* CV Overlay */}
      <CVOverlay isOpen={showCV} onClose={() => setShowCV(false)} />
    </div>
  );
};

export default RotatingTitles;