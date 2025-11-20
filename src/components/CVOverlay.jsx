import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const CVOverlay = ({ isOpen, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Temporary CV data
    const cvData = {
        name: "Vivek Bhandari",
        title: "Full Stack Web Developer",
        contact: {
            email: "viv13handari@gmail.com",
            phone: "+91 7505172363",
            location: "Nandprayag, Uttarakhand",
        },
        summary: "Passionate web developer specializing in creating intuitive and dynamic user experiences. Proficient in modern web technologies including React, JavaScript, and Tailwind CSS. Committed to writing clean, maintainable code and continuously learning new technologies.",
        education: [
            {
                degree: "Bachelor of Computer Applications",
                institution: "University Name",
                duration: "2020 - 2023",
                grade: "8.5 CGPA"
            },
            {
                degree: "Higher Secondary Education",
                institution: "School Name",
                duration: "2018 - 2020",
                grade: "85%"
            }
        ],
        experience: [
            {
                role: "Frontend Developer",
                company: "Tech Company",
                duration: "Jan 2023 - Present",
                responsibilities: [
                    "Developed responsive web applications using React and Tailwind CSS",
                    "Collaborated with design team to implement pixel-perfect UIs",
                    "Optimized application performance and improved load times by 40%",
                    "Implemented state management solutions using Redux and Context API"
                ]
            },
            {
                role: "Web Development Intern",
                company: "Startup Inc",
                duration: "Jun 2022 - Dec 2022",
                responsibilities: [
                    "Built reusable React components for the company's design system",
                    "Worked on bug fixes and feature enhancements",
                    "Participated in code reviews and agile development processes"
                ]
            }
        ],
        skills: {
            frontend: [
                { name: "React.js", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 90 }
            ],
            backend: [
                { name: "Node.js", level: 75 },
                { name: "Express.js", level: 70 },
                { name: "MongoDB", level: 65 }
            ],
            tools: ["Git", "VS Code", "Figma", "Postman", "npm/yarn"]
        },
        achievements: [
            "🏆 Won first place in college hackathon",
            "📜 Completed 10+ web development projects",
            "⭐ Contributed to open-source projects",
            "🎓 Certified in React from online platform"
        ]
    };

    // Floating particles animation
    const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10
    }));

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Animated background particles */}
                <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl overflow-hidden">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-royal-blue/20"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: particle.size,
                                height: particle.size,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* CV Content */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 backdrop-blur-md border-2 border-royal-blue/30 rounded-3xl shadow-2xl shadow-royal-blue/20"
                    onClick={(e) => e.stopPropagation()}
                    style={{ perspective: "1000px" }}
                >
                    {/* Close button */}
                    <motion.button
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-3 bg-zinc-800 hover:bg-red-600 rounded-full border border-zinc-600 transition-all duration-300 hover:scale-110 group"
                    >
                        <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.button>

                    {/* Header Section */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative px-8 md:px-12 py-12 bg-gradient-to-r from-royal-blue/20 via-zinc-900 to-royal-blue/20 border-b border-zinc-700"
                    >
                        <motion.h1
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="text-4xl md:text-5xl font-bold text-white mb-2 text-center"
                        >
                            {cvData.name}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-royal-blue text-center mb-6"
                        >
                            {cvData.title}
                        </motion.p>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-6 text-gray-300"
                        >
                            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-royal-blue" />
                                <span className="text-sm">{cvData.contact.email}</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-royal-blue" />
                                <span className="text-sm">{cvData.contact.phone}</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-royal-blue" />
                                <span className="text-sm">{cvData.contact.location}</span>
                            </motion.div>
                        </motion.div>

                        {/* Download Button */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="mt-6 text-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-royal-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-royal-blue/30"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <div className="px-8 md:px-12 py-8 space-y-8">
                        {/* Summary */}
                        <motion.section
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-royal-blue mb-4 flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                Professional Summary
                            </h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="text-gray-300 leading-relaxed"
                            >
                                {cvData.summary}
                            </motion.p>
                        </motion.section>

                        {/* Education */}
                        <motion.section
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.0 }}
                        >
                            <h2 className="text-2xl font-bold text-royal-blue mb-4 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6" />
                                Education
                            </h2>
                            <div className="space-y-4">
                                {cvData.education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.1 + index * 0.1 }}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-royal-blue transition-all duration-300"
                                    >
                                        <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                                        <p className="text-gray-400">{edu.institution}</p>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {edu.duration}
                                            </span>
                                            <span className="text-green-400 font-semibold">{edu.grade}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Experience */}
                        <motion.section
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.3 }}
                        >
                            <h2 className="text-2xl font-bold text-royal-blue mb-4 flex items-center gap-2">
                                <Briefcase className="w-6 h-6" />
                                Work Experience
                            </h2>
                            <div className="space-y-6">
                                {cvData.experience.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.4 + index * 0.1 }}
                                        whileHover={{ scale: 1.01 }}
                                        className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-royal-blue transition-all duration-300"
                                    >
                                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                        <p className="text-royal-blue font-medium">{exp.company}</p>
                                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                            <Calendar className="w-4 h-4" />
                                            {exp.duration}
                                        </p>
                                        <ul className="mt-3 space-y-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 1.5 + index * 0.1 + idx * 0.05 }}
                                                    className="text-gray-300 text-sm flex items-start gap-2"
                                                >
                                                    <span className="text-royal-blue mt-1">▸</span>
                                                    {resp}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Skills */}
                        <motion.section
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.6 }}
                        >
                            <h2 className="text-2xl font-bold text-royal-blue mb-4 flex items-center gap-2">
                                <Code className="w-6 h-6" />
                                Technical Skills
                            </h2>

                            {/* Frontend Skills */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
                                <div className="space-y-3">
                                    {cvData.skills.frontend.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{ width: "100%", opacity: 1 }}
                                            transition={{ delay: 1.7 + index * 0.1 }}
                                        >
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-300">{skill.name}</span>
                                                <span className="text-royal-blue font-semibold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ delay: 1.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-royal-blue to-blue-400 rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Skills */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
                                <div className="space-y-3">
                                    {cvData.skills.backend.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{ width: "100%", opacity: 1 }}
                                            transition={{ delay: 2.1 + index * 0.1 }}
                                        >
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-300">{skill.name}</span>
                                                <span className="text-royal-blue font-semibold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ delay: 2.2 + index * 0.1, duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cvData.skills.tools.map((tool, index) => (
                                        <motion.span
                                            key={tool}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 2.4 + index * 0.05, type: "spring" }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-full border border-zinc-700 hover:border-royal-blue transition-all duration-300"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* Achievements */}
                        <motion.section
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.6 }}
                            className="pb-8"
                        >
                            <h2 className="text-2xl font-bold text-royal-blue mb-4 flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                Achievements
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {cvData.achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 2.7 + index * 0.1, type: "spring" }}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className="p-4 bg-gradient-to-r from-zinc-800/50 to-zinc-800/30 rounded-lg border border-zinc-700 hover:border-royal-blue transition-all duration-300"
                                    >
                                        <p className="text-gray-300">{achievement}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CVOverlay;
