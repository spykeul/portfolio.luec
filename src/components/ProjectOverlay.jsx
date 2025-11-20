import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import ImageGallery from './ImageGallery';
import TechStackDisplay from './TechStackDisplay';
import ProjectTimeline from './ProjectTimeline';

const ProjectOverlay = ({ project, onClose }) => {
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

    if (!project) return null;

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
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-6 py-2 bg-royal-blue/20 border border-royal-blue rounded-full text-sm font-semibold text-royal-blue mb-6"
                            >
                                Featured Project
                            </motion.div>

                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                            >
                                {project.name}
                            </motion.h2>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-royal-blue mb-8"
                            >
                                {project.tagline}
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-3 bg-royal-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-royal-blue/50"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg border border-zinc-600 transition-all duration-300 hover:scale-105"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="px-8 md:px-16 py-12 bg-zinc-900"
                    >
                        <ImageGallery images={project.images} projectName={project.name} />
                    </motion.div>

                    {/* Description & Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="px-8 md:px-16 py-12 bg-gradient-to-b from-zinc-900 to-zinc-950"
                    >
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-semibold text-royal-blue mb-6">
                                About This Project
                            </h3>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Features Grid */}
                            <h4 className="text-2xl font-semibold text-white mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.05 }}
                                        className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50"
                                    >
                                        <span className="text-green-400 mt-1">✓</span>
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="px-8 md:px-16 py-12 bg-zinc-950"
                    >
                        <TechStackDisplay techStack={project.techStack} />
                    </motion.div>

                    {/* Development Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="px-8 md:px-16 py-12 bg-gradient-to-b from-zinc-950 to-zinc-900"
                    >
                        <ProjectTimeline timeline={project.timeline} />
                    </motion.div>

                    {/* Key Learnings */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="px-8 md:px-16 py-12 bg-zinc-900"
                    >
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-semibold text-royal-blue mb-6 text-center">
                                Key Learnings
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.learnings.map((learning, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                        className="p-4 bg-zinc-800 rounded-xl border border-zinc-700 hover:border-royal-blue transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl">📚</span>
                                            <p className="text-gray-300">{learning}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom gradient fade */}
                    <div className="h-8 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectOverlay;
