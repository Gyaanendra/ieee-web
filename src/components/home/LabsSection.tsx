'use client';

import { motion } from 'framer-motion';

const societies = [
    {
        icon: (
            <svg className="w-6 h-6 text-ieee-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        title: 'RAS Society',
        desc: 'Focusing on Robotics and Automation, building autonomous drones and competition-ready rovers.',
        link: '#projects'
    },
    {
        icon: (
            <svg className="w-6 h-6 text-ieee-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'CS Society',
        desc: 'Where software meets scalability. Workshops on AI/ML, Cloud Architecture, and Web3 development.',
        link: '#projects'
    },
    {
        icon: (
            <svg className="w-6 h-6 text-ieee-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        title: 'SP Society',
        desc: 'Mastering the science of data streams. Research in communication systems and audio/visual signals.',
        link: '#projects'
    },
];

export default function LabsSection() {
    return (
        <section id="labs" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-ieee-cyan text-xs font-bold tracking-[0.2em] uppercase mb-4"
                >
                    Technical Societies
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
                >
                    Our Labs & Tech
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 font-medium"
                >
                    Deep dive into specialized fields with our world-class student societies.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {societies.map((soc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                        className="bg-[#0A0A0F] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 group flex flex-col"
                    >
                        <div className="w-12 h-12 rounded-xl bg-ieee-cyan/10 border border-ieee-cyan/20 flex items-center justify-center mb-8 text-ieee-cyan">
                            {soc.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">{soc.title}</h3>
                        <p className="text-zinc-400 font-medium text-sm leading-relaxed mb-12 flex-grow">
                            {soc.desc}
                        </p>

                        <a href={soc.link} className="text-ieee-cyan font-semibold text-sm flex items-center gap-2 w-max group-hover:gap-3 transition-all">
                            View Projects <span>›</span>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
