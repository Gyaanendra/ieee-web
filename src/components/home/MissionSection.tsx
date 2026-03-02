'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MissionSection() {
    return (
        <section id="story" className="py-16 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto relative border-b border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
                {/* Left Side: Mission Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-ieee-cyan font-bold tracking-[0.2em] text-xs uppercase uppercase">
                            The Mission
                        </h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                            From Sparks to Complex Systems.
                        </h2>
                    </div>

                    <div className="space-y-6 text-zinc-400 font-medium text-lg leading-relaxed">
                        <p>
                            IEEE BU is more than just a club; it&apos;s a launchpad for the next generation of engineers. We foster an environment where theoretical knowledge meets practical application.
                        </p>
                        <p>
                            Our journey is defined by the curiosity of our members. From the first spark of an idea in a freshman&apos;s mind to the deployment of complex autonomous systems, we are there to provide the tools, the mentorship, and the community.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-wrap gap-12">
                        <div>
                            <div className="text-3xl font-black text-ieee-cyan">500+</div>
                            <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase mt-1">Members</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-ieee-cyan">15+</div>
                            <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase mt-1">Active Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-ieee-cyan">10</div>
                            <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase mt-1">Partners</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Image Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative aspect-square w-full rounded-3xl bg-gradient-to-br from-zinc-800 to-black overflow-hidden group shadow-2xl border border-white/10"
                >
                    <Image
                        src="/images/events/core.jpg"
                        alt="Mission Graphic"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Greenish Overlay inspired by design */}
                    <div className="absolute inset-0 bg-[#122A2F]/40 mix-blend-multiply"></div>

                    {/* Quote Box inside image */}
                    <div className="absolute bottom-6 inset-x-6">
                        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                            <p className="text-sm md:text-base text-zinc-200 font-medium italic">
                                &quot;Advancing technology for the benefit of humanity is our core directive.&quot;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
