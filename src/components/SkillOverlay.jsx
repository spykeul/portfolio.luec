import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SkillMarquee from './SkillMarquee';
import SkillTimeline from './SkillTimeline';

const SkillOverlay = ({ skill, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent body scroll when overlay is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!skill) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Frosted glass backdrop */}
                <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl"></div>

                {/* Overlay content */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-zinc-900/90 backdrop-blur-md border-2 border-zinc-700 rounded-3xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full border border-zinc-600 transition-all duration-300 hover:scale-110 group"
                    >
                        <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </button>

                    {/* Hero Section */}
                    <div className="relative px-8 md:px-16 py-12 md:py-16 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Skill Image */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="w-48 h-48 md:w-64 md:h-64 bg-zinc-800 rounded-3xl p-8 border-2 border-zinc-700 shadow-metallic-lg flex items-center justify-center"
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            {/* Skill Info */}
                            <div className="flex-1 text-center md:text-left">
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-6xl font-bold text-royal-blue mb-4"
                                >
                                    {skill.name}
                                </motion.h2>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                                >
                                    {skill.heroDescription}
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Technologies Marquee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <SkillMarquee technologies={skill.technologies} />
                    </motion.div>

                    {/* Learning Journey Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="py-12 bg-gradient-to-b from-zinc-900 to-zinc-950"
                    >
                        <SkillTimeline timeline={skill.timeline} />
                    </motion.div>

                    {/* Bottom gradient fade */}
                    <div className="h-8 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SkillOverlay;
