import React from "react";
import CS from "../imgs/cyber-security.png";
import WD from "../imgs/web-programming.png";
import CC from "../imgs/creative.png";

const services = [
  {
    title: "Cyber Security Analyst",
    img: CS,
    description:
      "Penetration testing, vulnerability assessment, threat analysis, and securing systems using tools like Burp Suite and Metasploit.",
  },
  {
    title: "Content Creation",
    img: CC,
    description:
      "Instagram content creation with audience engagement strategies, algorithm trends, hashtag optimization, and visual storytelling.",
  },
  {
    title: "Web Developer",
    img: WD,
    description:
      "Building responsive and scalable web applications using JavaScript, React, Node.js, and MongoDB.",
  },
];

const Services = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden text-white bg-black rounded-tl-3xl rounded-tr-3xl">
      
      {/* Cyberpunk Floating Background Effects */}
      <div className="absolute w-40 h-40 bg-purple-500 rounded-full top-10 left-10 blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute w-32 h-32 bg-blue-500 rounded-full bottom-10 right-10 blur-3xl opacity-30 animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-purple-400 uppercase md:text-7xl">
          Services
        </h1>
        <p className="mt-4 text-lg text-gray-400">What I Do</p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-12 px-6 mt-14 sm:grid-cols-2 lg:grid-cols-3 md:px-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-full max-w-sm p-8 mx-auto text-center text-white transition-transform duration-300 border border-transparent shadow-lg bg-zinc-900 rounded-3xl hover:scale-105 hover:shadow-purple-500 hover:border-purple-500"
          >
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 w-full h-full transition-opacity duration-500 border-2 border-purple-500 opacity-0 hover:opacity-100 rounded-3xl"></div>

            {/* Image */}
            <img src={service.img} alt={service.title} className="object-contain w-24 h-24 mb-5 transition-opacity duration-300 opacity-80 hover:opacity-100" />
            
            {/* Title */}
            <h1 className="text-2xl font-bold text-purple-400 transition-transform duration-300">
              {service.title}
            </h1>

            {/* Minimal Description */}
            <p className="mt-2 text-gray-300 text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

