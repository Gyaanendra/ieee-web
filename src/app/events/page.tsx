'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import eventsData from '../../data/events.json';

function ParallaxCard({ event, index, containerProgress }: { event: any, index: number, containerProgress: any }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use a slight uniform parallax on mobile (single column) to prevent overlap,
  // and opposite parallax on desktop (one up, one down).
  const targetSpeed = isMobile ? -50 : (index % 2 === 0 ? 150 : -150);
  const yOffset = useTransform(containerProgress, (val: number) => val * targetSpeed);

  return (
    <motion.div
      style={{ y: yOffset }}
      className={`relative aspect-[4/3] w-full rounded-2xl p-2 bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl bg-black/50">
        <Image
          src={event.src}
          alt={`Event ${index + 1}`}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-50"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ieee-blue/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 md:p-8">
          <p className="text-white text-base md:text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Move background slightly down while scrolling, inset covers edge gaps
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={containerRef} className="relative w-full mt-[-6rem] pt-[6rem] pb-0">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-[#05050A] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute -inset-[20%] w-[140%] h-[140%]">
          <Image
            src="/images/events/core.jpg"
            alt="Core Team Event"
            fill
            className="object-cover opacity-40 select-none"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050A] via-[#05050A]/60 to-[#05050A] pointer-events-none"></div>
      </div>

      <section className="text-white p-6 md:p-12 relative overflow-hidden max-w-7xl mx-auto mt-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 lg:mb-16 text-center relative z-10 px-4"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-6xl md:text-[clamp(2rem,8vw,6rem)] text-white font-black tracking-tight drop-shadow-2xl relative z-10 uppercase leading-snug sm:leading-tight">
              Glimpses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-cyan to-ieee-blue opacity-90">
                Of Past Events
              </span>
            </h1>
            <div className="absolute -inset-4 bg-ieee-blue/20 blur-3xl -z-10 rounded-full"></div>
          </div>
        </motion.div>

        {/* Parallax Image Grid */}
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-32 md:pb-[200px]">
          {eventsData.map((event, idx) => (
            <ParallaxCard
              key={idx}
              event={event}
              index={idx}
              containerProgress={scrollYProgress}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
