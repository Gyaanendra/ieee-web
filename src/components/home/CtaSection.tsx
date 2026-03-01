'use client';

import { motion } from 'framer-motion';

export default function CtaSection() {
    return (
        <section id="membership" className="py-20 lg:py-32 px-6 md:px-12 max-w-5xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-zinc-900 border border-white/10 rounded-[2rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-ieee-cyan/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                        Ready to leave your mark? <br className="hidden md:block" />
                        Join a global network of engineers and start your journey today.
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
                        <a href="#join" className="px-8 py-4 bg-ieee-cyan text-black font-bold rounded-xl hover:bg-ieee-blue hover:text-white transition-colors shadow-lg w-full sm:w-auto">
                            Become a Member
                        </a>
                        <a href="#learn" className="px-8 py-4 bg-transparent text-white font-bold rounded-xl hover:bg-white/5 transition-colors group flex items-center justify-center gap-2 w-full sm:w-auto">
                            Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
