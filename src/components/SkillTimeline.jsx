import React from 'react';
import { motion } from 'framer-motion';

const SkillTimeline = ({ timeline }) => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-royal-blue mb-8 text-center">Learning Journey</h3>

            {/* Draggable container */}
            <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.1}
                className="space-y-6 cursor-grab active:cursor-grabbing"
            >
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12 pb-8 border-l-2 border-royal-blue last:border-l-0"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-royal-blue border-4 border-zinc-900 shadow-lg shadow-royal-blue/50"></div>

                        {/* Content card */}
                        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-royal-blue transition-all duration-300 shadow-metallic hover:shadow-metallic-lg">
                            {/* Phase badge */}
                            <div className="inline-block px-4 py-1 bg-royal-blue/20 border border-royal-blue rounded-full text-sm font-semibold text-royal-blue mb-3">
                                {item.phase}
                            </div>

                            {/* Milestone */}
                            <h4 className="text-2xl font-bold text-white mb-3">{item.milestone}</h4>

                            {/* Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                            {/* Difficulty section */}
                            <div className="space-y-3">
                                <div className="bg-zinc-900 rounded-lg p-4 border-l-4 border-red-500">
                                    <h5 className="text-sm font-semibold text-red-400 mb-2">⚠️ Challenge</h5>
                                    <p className="text-gray-400 text-sm">{item.difficulty}</p>
                                </div>

                                {/* Solution section */}
                                <div className="bg-zinc-900 rounded-lg p-4 border-l-4 border-green-500">
                                    <h5 className="text-sm font-semibold text-green-400 mb-2">✓ Solution</h5>
                                    <p className="text-gray-400 text-sm">{item.solution}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Drag hint */}
            <div className="text-center mt-6 text-gray-500 text-sm">
                💡 Drag to explore the timeline
            </div>
        </div>
    );
};

export default SkillTimeline;
