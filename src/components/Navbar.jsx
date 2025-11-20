import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scrolling for smooth background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[999] w-full px-6 md:px-20 py-4 flex items-center justify-between border-b border-zinc-700 transition-all duration-300 ease-in-out ${scrolled ? "bg-zinc-900/50 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <span className="text-2xl font-bold font-custom3 text-white">keul.io</span>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        {[
          { name: "About", id: "#about" },
          { name: "Skills", id: "#skills" },
          { name: "Experience", id: "#experience" },
          { name: "Projects", id: "#projects" },
          { name: "Contact", id: "#contact" }
        ].map((item) => (
          <a
            key={item.name}
            href={item.id}
            className="text-md font-light capitalize text-gray-300 transition-colors duration-300 hover:text-royal-blue"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(item.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-zinc-900 shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-start p-6 md:hidden`}
      >
        <button className="self-end text-white mb-6" onClick={() => setMenuOpen(false)}>
          <FiX size={28} />
        </button>
        {[
          { name: "About", id: "#about" },
          { name: "Skills", id: "#skills" },
          { name: "Experience", id: "#experience" },
          { name: "Projects", id: "#projects" },
          { name: "Contact", id: "#contact" }
        ].map((item) => (
          <a
            key={item.name}
            href={item.id}
            className="w-full py-3 text-md font-light capitalize text-gray-300 transition-colors duration-300 hover:text-royal-blue"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              const element = document.querySelector(item.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
