import React from 'react';
import { motion } from 'framer-motion';

const SkillMarquee = ({ technologies }) => {
    return (
        <div className="relative w-full overflow-hidden py-12 -rotate-2 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-blue to-transparent"></div>

            {/* Infinite scrolling marquee */}
            <div className="flex">
                <motion.div
                    className="flex gap-8 pr-8"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render technologies twice for seamless loop */}
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-lg whitespace-nowrap text-lg font-semibold text-royal-blue hover:bg-zinc-700 transition-colors duration-300"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-blue to-transparent"></div>
        </div>
    );
};

export default SkillMarquee;
