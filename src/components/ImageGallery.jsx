import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images, projectName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full">
            {/* Main Image Display */}
            <div className="relative h-[400px] md:h-[500px] bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-700">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`${projectName} screenshot ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-900/80 backdrop-blur-sm hover:bg-zinc-800 rounded-full border border-zinc-700 transition-all duration-300 hover:scale-110 group"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-900/80 backdrop-blur-sm hover:bg-zinc-800 rounded-full border border-zinc-700 transition-all duration-300 hover:scale-110 group"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-700 text-sm font-semibold text-gray-300">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="flex gap-3 mt-4 justify-center overflow-x-auto pb-2">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                    ? 'border-royal-blue scale-105 shadow-lg shadow-royal-blue/30'
                                    : 'border-zinc-700 hover:border-zinc-500 opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
