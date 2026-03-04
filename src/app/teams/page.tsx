'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const teams = [
  {
    title: 'Core Team',
    desc: 'The driving force behind IEEE BU. Our core team coordinates all aspects of the chapter.',
    placeholder: 'Core Team group photo'
  },
  {
    title: 'Technical Team',
    desc: 'The minds behind the technology. From website to apps, they make it all work.',
    placeholder: 'Technical Team group photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Technical Team',
    desc: 'The minds behind the technology. From website to apps, they make it all work.',
    placeholder: 'Technical Team group photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Technical Team',
    desc: 'The minds behind the technology. From website to apps, they make it all work.',
    placeholder: 'Technical Team group photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Technical Team',
    desc: 'The minds behind the technology. From website to apps, they make it all work.',
    placeholder: 'Technical Team group photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
  {
    title: 'Design & Media',
    desc: 'The creative minds who bring visual excellence to every aspect of IEEE BU.',
    placeholder: 'Design & Media team photo'
  },
];

export default function Teams() {
  const revealed = false;
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time?.getHours() || 0;
  const minutes = time?.getMinutes() || 0;
  const seconds = time?.getSeconds() || 0;

  const hourRot = time ? (hours % 12 + minutes / 60) * 30 : 0;
  const minuteRot = time ? (minutes + seconds / 60) * 6 : 0;
  const secondRot = time ? seconds * 6 : 0;

  return (
    <div className="min-h-screen relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ieee-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ieee-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ieee-cyan text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 border border-ieee-cyan/20 rounded-full bg-ieee-cyan/5">
              The People Behind
            </span>
          </motion.div>

          {revealed && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight"
              >
                MEET THE <span className="text-ieee-cyan">TEAMS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-400 text-lg md:text-xl font-medium"
              >
                The dedicated students and visionaries bringing innovation to Bennett University through IEEE BU and beyond.
              </motion.p>
            </>
          )}
        </header>

        {/* Teams Grid OR Revealing Soon State */}
        {revealed ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, index) => (
              <motion.article
                key={`${team.title}-${index}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative bg-[#0a0a14] border border-white/5 rounded-2xl p-6 hover:border-ieee-cyan/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,181,226,0.1)] overflow-hidden"
              >
                {/* Card top edge gradient */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ieee-cyan/0 via-ieee-cyan/50 to-ieee-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6">
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden group-hover:from-ieee-cyan/10 group-hover:to-transparent transition-colors">
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase opacity-50">{team.placeholder}</span>
                    {/* Subtle grid pattern in placeholders */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-white group-hover:text-ieee-cyan transition-colors tracking-tight uppercase">
                      {team.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                      {team.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-16 py-24 relative"
          >
            {/* Left: Revealing Soon Text */}
            <div className="flex-1 flex flex-col justify-center items-start z-10">
              <h2 className="text-[clamp(4rem,9vw,9rem)] font-neurial font-black text-white uppercase leading-[0.9] tracking-tighter">
                Revealing<br />
                <span className="text-ieee-cyan">Soon.</span>
              </h2>
              <p className="mt-8 text-zinc-500 font-medium tracking-widest uppercase text-sm md:text-base max-w-sm">
                The lineup is currently locked.<br /> Access will be granted shortly.
              </p>
            </div>

            {/* Right: Minimal Clock */}
            <div className="flex-1 flex justify-center md:justify-end items-center relative z-10">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                {/* Background glow */}
                <div className="absolute inset-0 bg-ieee-cyan/5 blur-[80px] rounded-full pointer-events-none" />

                {/* Circular Rim Text */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 text-zinc-600 opacity-60 z-0"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                    <path id="clockTextPath" fill="none" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                    <text>
                      <textPath href="#clockTextPath" startOffset="0%" className="text-[1.1rem] font-neurial font-black uppercase tracking-[0.2em] fill-current">
                        IEEE BU • IEEE BU • IEEE BU • IEEE BU • IEEE BU • IEEE BU •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Clock Face base */}
                <div className="absolute w-[70%] h-[70%] rounded-full border border-white/5 bg-[#05050A]/60 backdrop-blur-md shadow-[0_0_30px_rgba(0,181,226,0.05)] z-10" />

                {/* Clock Hands wrapper */}
                <div className="absolute top-1/2 left-1/2 z-20">
                  {/* Center Dot */}
                  <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-30" />

                  {/* Hour Hand */}
                  <motion.div
                    animate={{ rotate: hourRot }}
                    transition={{ duration: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    className={`absolute flex justify-center h-[50px] w-1 -top-[50px] -left-[2px] md:h-[70px] md:-top-[70px] transition-opacity duration-300 ${!time ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <div className="w-[3px] md:w-1 h-full rounded-full bg-gradient-to-t from-white to-[#05050A]" />
                  </motion.div>

                  {/* Minute Hand */}
                  <motion.div
                    animate={{ rotate: minuteRot }}
                    transition={{ duration: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    className={`absolute flex justify-center h-[70px] w-1 -top-[70px] -left-[2px] md:h-[100px] md:-top-[100px] transition-opacity duration-300 ${!time ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <div className="w-[1.5px] md:w-[2px] h-full bg-zinc-400 rounded-full" />
                  </motion.div>

                  {/* Second Hand */}
                  <motion.div
                    animate={{ rotate: secondRot }}
                    transition={{ duration: time && seconds === 0 ? 0 : 0.3 }}
                    style={{ transformOrigin: "50% 80%" }}
                    className={`absolute flex justify-center h-[100px] w-1 -top-[80px] -left-[2px] md:h-[140px] md:-top-[112px] transition-opacity duration-300 ${!time ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <div className="w-[1px] h-full bg-ieee-cyan rounded-full shadow-[0_0_8px_rgba(0,181,226,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 bg-gradient-to-br from-[#0a0a14] to-transparent border border-white/5 text-center mt-32"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-ieee-cyan/5 blur-[100px] rounded-full" />

          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Volunteer Network</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Our volunteer network is the backbone of IEEE BU. Students from across the campus come together to drive our mission forward.
          </p>
          <a
            href="mailto:ieee@bennett.edu.in"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-extrabold text-sm uppercase tracking-widest rounded-lg hover:bg-ieee-cyan transition-colors"
          >
            Become a Volunteer
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
