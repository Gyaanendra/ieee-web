'use client';

import { motion } from 'framer-motion';

export default function Announcements() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ieee-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                        Latest <span className="text-ieee-cyan">Updates</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-2xl bg-[#0a0a14] backdrop-blur-md border border-white/5 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="space-y-6">
                        <div className="border border-ieee-cyan/20 bg-ieee-cyan/5 rounded-2xl p-6 text-left relative overflow-hidden group hover:border-ieee-cyan/40 transition-colors">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ieee-cyan to-ieee-blue opacity-50"></div>
                            <div className="flex justify-between items-start mb-4 gap-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-ieee-cyan transition-colors">Welcome to IEEE Student Branch</h3>
                                <span className="text-xs font-mono text-ieee-cyan bg-ieee-cyan/10 px-2 py-1 rounded">NEW</span>
                            </div>
                            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                                We are excited to launch our newly redesigned website! Check back here for the latest news, upcoming sessions, and important announcements from the core team.
                            </p>
                            <div className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                Posted: Just now
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10"></div>

                        <div className="text-zinc-500 text-sm font-medium">
                            No older announcements to display.
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
