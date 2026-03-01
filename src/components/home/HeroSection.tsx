'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function HeroSection() {
    return (
        <section id="hero" className="relative z-0 min-h-[min(90vh,800px)] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-white/5">
            {/* Subtitle Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
            >
                <span className="border border-ieee-cyan/30 text-ieee-cyan text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase bg-ieee-cyan/5">
                    IEEE BU Student Chapter
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl lg:text-[clamp(3rem,6vw,5.5rem)] font-black tracking-tight leading-[1.05] text-white">
                    Your Journey of <br className="hidden md:block" />
                    <span className="text-ieee-cyan">Innovation</span> Starts Here.
                </h1>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 max-w-2xl mx-auto"
            >
                <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                    Uniting engineers, designers, and visionaries to build the future through technology, research, and collaborative excellence.
                </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
                <a href="#story" className="px-8 py-3.5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors w-full sm:w-auto text-sm md:text-base">
                    Explore the Story
                </a>
                <a href="#labs" className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto text-sm md:text-base">
                    Discover Our Tech
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2"
            >
                <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1.5 h-1.5 bg-ieee-cyan rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
