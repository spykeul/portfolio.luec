import React from "react";

const NeonBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
      {/* Neon Gradient Blobs */}
      <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-purple-500 rounded-full top-10 left-10 blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full bottom-10 right-10 blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute w-40 h-40 md:w-60 md:h-60 bg-pink-500 rounded-full top-1/3 left-1/3 blur-[90px] opacity-30 animate-pulse"></div>
    </div>
  );
};

export default NeonBackground;
