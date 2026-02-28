'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05050A] w-full z-10 selection:bg-ieee-cyan selection:text-black mt-[-5rem]">

            {/* --- BACKGROUND TYPOGRAPHY STAMPS COLLAGE --- */}

            {/* 1. Huge Cyan Outline - Top Left */}
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [-10, -5, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[5%] left-[-15%] md:left-[-5%] text-[8rem] md:text-[14rem] font-black italic text-transparent [-webkit-text-stroke:2px_rgba(0,181,226,0.3)] select-none pointer-events-none tracking-tighter uppercase leading-none"
            >
                IEEE BU<sup className="text-4xl md:text-6xl [-webkit-text-stroke:1px] relative top-[-3rem]">©</sup>
            </motion.div>

            {/* 2. Solid White Block - Top Right */}
            <motion.div
                animate={{ y: [10, -10, 10], rotate: [15, 20, 15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[15%] right-[-10%] md:right-[5%] bg-white text-black px-8 py-2 text-6xl md:text-8xl font-black italic select-none pointer-events-none tracking-tighter uppercase leading-none rounded-sm shadow-xl"
            >
                IEEE BU<sup className="text-2xl md:text-3xl relative top-[-2rem]">©</sup>
            </motion.div>

            {/* 3. Dark Blue Block - Shifted Up/Left (Behind but visible) */}
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [20, 25, 20] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[32%] left-[10%] md:left-[25%] bg-[#0a1222] border border-white/5 text-zinc-400 px-6 py-2 text-5xl md:text-7xl font-black italic select-none pointer-events-none tracking-tighter uppercase leading-none rounded-sm z-10 opacity-70"
            >
                IEEE
            </motion.div>

            {/* 4. Giant Cyan Solid Block - Bottom Left */}
            <motion.div
                animate={{ y: [15, -15, 15], rotate: [-20, -15, -20] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[10%] left-[-5%] md:left-[15%] bg-ieee-cyan text-black px-10 py-3 text-7xl md:text-[8rem] font-black italic select-none pointer-events-none tracking-tighter uppercase leading-none rounded-sm shadow-[0_0_50px_rgba(0,181,226,0.4)] z-0"
            >
                IEEE BU<sup className="text-3xl md:text-5xl relative top-[-3rem]">©</sup>
            </motion.div>

            {/* 5. Faint White Outline - Bottom Right */}
            <motion.div
                animate={{ y: [-20, 20, -20], rotate: [10, 25, 10] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-5%] right-[-10%] md:right-[5%] text-[9rem] md:text-[15rem] font-black italic text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.08)] select-none pointer-events-none tracking-tighter uppercase leading-none"
            >
                404
            </motion.div>

            {/* 6. Mid Right Floating Dark Block - Shifted Down */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [-10, -5, -10] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[55%] right-[5%] md:right-[22%] bg-[#0f172a] text-zinc-300 px-8 py-3 text-6xl md:text-8xl font-black italic select-none pointer-events-none tracking-tighter uppercase leading-none rounded-sm border border-zinc-700/50 z-10 opacity-80"
            >
                IEEE BU
            </motion.div>

            {/* 7. Circular Wrapped Text - Center Left */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[25%] left-[-15%] md:left-[-2%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] select-none pointer-events-none text-ieee-cyan opacity-40 z-0"
            >
                <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                    <path id="circlePath1" fill="none" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                    <text>
                        <textPath href="#circlePath1" startOffset="0%" className="text-[1.8rem] md:text-[2.2rem] font-black uppercase tracking-widest font-sans fill-current">
                            IEEE BU © PAGE NOT FOUND • IEEE BU © PAGE NOT FOUND •
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* 8. Small Fast Circular Text - Center Right */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[40%] right-[-10%] md:right-[5%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] select-none pointer-events-none text-white opacity-20 z-0 mix-blend-overlay"
            >
                <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                    <path id="circlePath2" fill="none" d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                    <text>
                        <textPath href="#circlePath2" startOffset="0%" className="text-[1.5rem] font-black uppercase tracking-[0.2em] font-sans fill-current">
                            404 ERROR • 404 ERROR • 404 ERROR • 404 ERROR •
                        </textPath>
                    </text>
                </svg>
            </motion.div>


            {/* --- FOREGROUND CONTENT --- */}
            <div className="relative z-20 flex flex-col items-center justify-center gap-8 md:gap-10 w-full px-4 mt-20">

                {/* Main "PAGE NOT FOUND" Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                    className="bg-[#05050A] border-2 border-white text-white px-6 md:px-12 py-4 md:py-6 shadow-[10px_10px_0px_rgba(255,255,255,0.1)] transform rotate-[-2deg] hover:rotate-[0deg] transition-all duration-300 cursor-default flex items-center justify-center w-[95%] md:w-auto overflow-hidden"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none whitespace-nowrap text-center">
                        Page Not Found
                    </h1>
                </motion.div>

                {/* Single Off-Place Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex mt-6 rotate-[6deg] translate-x-6 hover:rotate-[2deg] hover:translate-x-2 transition-transform duration-300"
                >
                    <Link
                        href="/"
                        className="group flex items-center gap-3 bg-ieee-cyan hover:bg-white text-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_0px_rgba(255,255,255,0.3)] rounded-sm font-black tracking-widest uppercase text-sm md:text-base transition-all duration-300 active:translate-y-2 active:translate-x-2 active:shadow-none"
                    >
                        <span className="bg-[#05050A] text-ieee-cyan w-6 h-6 flex items-center justify-center text-lg leading-none transform group-hover:-rotate-90 transition-transform duration-500">
                            *
                        </span>
                        Back to Home
                    </Link>
                </motion.div>

            </div>

        </div>
    );
}
