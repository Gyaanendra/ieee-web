'use client';

import { motion } from 'framer-motion';

const milestones = [
    {
        date: 'OCT 12, 2024',
        title: 'AI Workshop 1.0',
        desc: 'Deep dive into Neural Networks with industry experts.',
        active: true
    },
    {
        date: 'NOV 05, 2024',
        title: 'Hardware Hackathon',
        desc: '24-hour sprint to build functional IoT solutions.',
        active: false
    },
    {
        date: 'DEC 18, 2024',
        title: 'IEEE BU Summit',
        desc: 'Annual showcase of student innovation and research.',
        active: false
    },
];

export default function TimelineSection() {
    return (
        <section id="roadmap" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 relative">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-ieee-cyan text-xs font-bold tracking-[0.2em] uppercase mb-4"
                >
                    ROADMAP
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-white"
                >
                    Upcoming Milestones
                </motion.h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 block md:hidden"></div>

                <div className="space-y-16">
                    {milestones.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row items-center cursor-default group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="w-full md:w-1/2 px-12 md:px-16 pb-8 md:pb-0 relative text-left">
                                {/* Dot */}
                                <div className={`absolute top-1 max-md:left-5 md:top-1/2 w-3 h-3 rounded-full -translate-y-1/2 border-2 z-10 transition-colors duration-300 ${item.active ? 'bg-ieee-cyan border-ieee-cyan shadow-[0_0_15px_rgba(0,181,226,0.6)]' : 'bg-zinc-800 border-white/20 group-hover:border-white/50'} ${idx % 2 === 0 ? 'md:-left-1.5' : 'md:-right-1.5'}`}></div>

                                <h4 className="text-ieee-cyan font-bold text-sm tracking-wider uppercase mb-2">
                                    {item.date}
                                </h4>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-500 font-medium text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
