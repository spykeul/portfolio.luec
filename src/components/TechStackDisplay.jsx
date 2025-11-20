import React from 'react';
import { motion } from 'framer-motion';

const TechStackDisplay = ({ techStack }) => {
    // Group technologies by category
    const groupedTech = techStack.reduce((acc, tech) => {
        const category = tech.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(tech);
        return acc;
    }, {});

    return (
        <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-semibold text-royal-blue mb-8 text-center">
                Tech Stack
            </h3>

            <div className="space-y-8">
                {Object.entries(groupedTech).map(([category, technologies], categoryIndex) => (
                    <div key={category}>
                        {/* Category Label */}
                        <h4 className="text-lg font-semibold text-gray-400 mb-4 px-2">
                            {category}
                        </h4>

                        {/* Technology Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (categoryIndex * technologies.length + index) * 0.05 }}
                                    className="group relative bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-royal-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-royal-blue/20 cursor-pointer"
                                >
                                    {/* Tech Icon */}
                                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </div>

                                    {/* Tech Name */}
                                    <h5 className="text-lg font-semibold text-white mb-1">
                                        {tech.name}
                                    </h5>

                                    {/* Tech Description */}
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {tech.description}
                                    </p>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-royal-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Tech Count Badge */}
            <div className="mt-8 text-center">
                <span className="inline-block px-6 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-sm font-semibold text-gray-400">
                    {techStack.length} Technologies Used
                </span>
            </div>
        </div>
    );
};

export default TechStackDisplay;
