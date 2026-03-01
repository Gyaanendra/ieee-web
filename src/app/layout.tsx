'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingText, setLoadingText] = useState('0%');
  const [statusText, setStatusText] = useState('INITIALIZING CORE...');
  const [randomData, setRandomData] = useState('0x00000000');

  useEffect(() => {
    let progress = 0;
    const statuses = [
      'INITIALIZING CORE...',
      'LOADING MODULES...',
      'ESTABLISHING CONNECTION...',
      'SYNCING DATA...',
      'READY.'
    ];

    const dataInterval = setInterval(() => {
      setRandomData('0x' + Math.random().toString(16).substring(2, 10).toUpperCase());
    }, 40);

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress > 100) progress = 100;
      setLoadingText(`${progress}%`);
      setStatusText(statuses[Math.min(Math.floor(progress / 20), 4)]);

      if (progress === 100) {
        clearInterval(interval);
      }
    }, 150);

    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setShowPage(true), 300);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(dataInterval);
    };
  }, []);

  // Reset intro on route change
  useEffect(() => {
    setShowIntro(true);
    setShowPage(false);
    setIsMenuOpen(false);
    setLoadingText('0%');
    setStatusText('INITIALIZING CORE...');

    let progress = 0;
    const statuses = [
      'INITIALIZING CORE...',
      'LOADING MODULES...',
      'ESTABLISHING CONNECTION...',
      'SYNCING DATA...',
      'READY.'
    ];

    const dataInterval = setInterval(() => {
      setRandomData('0x' + Math.random().toString(16).substring(2, 10).toUpperCase());
    }, 40);

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10;
      if (progress > 100) progress = 100;
      setLoadingText(`${progress}%`);
      setStatusText(statuses[Math.min(Math.floor(progress / 20), 4)]);

      if (progress === 100) clearInterval(interval);
    }, 100);

    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setShowPage(true), 300);
    }, 1500);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(dataInterval);
    };
  }, [pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ANNOUNCEMENTS', path: '/announcements' },
    { name: 'EVENTS', path: '/events' },
    { name: 'TEAMS', path: '/teams' }
  ];

  const isKnownRoute = navLinks.some(link => link.path === pathname);

  return (
    <html lang="en">
      <head>
        <title>IEEE Student Branch · Bennett University</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen relative bg-[#05050A] text-white selection:bg-ieee-cyan/30">
        <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
          {/* Intro Overlay */}
          <AnimatePresence>
            {showIntro && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 flex flex-col items-center justify-center z-[100] bg-[#05050A] px-4 overflow-hidden"
              >
                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

                <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-2xl relative z-10">
                  <div className="flex items-center justify-center gap-6 md:gap-14 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex-1 flex justify-end"
                    >
                      <Image src="/images/ieeelogo.png" alt="IEEE Logo" width={220} height={220} className="w-28 md:w-40 xl:w-52 h-auto object-contain" priority />
                    </motion.div>

                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-px md:w-0.5 h-16 md:h-24 bg-gradient-to-b from-transparent via-ieee-cyan to-transparent flex-shrink-0"
                    />

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex-1 flex justify-start"
                    >
                      <Image src="/images/bennettlogo.png" alt="Bennett Logo" width={220} height={220} className="w-28 md:w-40 xl:w-52 h-auto object-contain opacity-90" priority />
                    </motion.div>
                  </div>

                  <div className="text-center w-full mt-4">
                    <div className="font-mono text-ieee-cyan text-sm md:text-base mb-2 flex flex-col items-center justify-center gap-2">
                      <motion.div
                        key={loadingText}
                        initial={{ opacity: 0.5, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="font-bold text-2xl tracking-widest"
                      >
                        {loadingText}
                      </motion.div>
                      <div className="flex flex-col items-center gap-2 text-xs opacity-60">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-ieee-cyan rounded-full animate-pulse"></span>
                          <span className="w-48 text-left">{statusText}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress bar line */}
                    <div className="w-64 max-w-full mx-auto h-0.5 bg-white/10 rounded-full overflow-hidden mt-6 relative">
                      <motion.div
                        className="h-full bg-ieee-cyan shadow-[0_0_10px_rgba(0,181,226,0.8)] relative"
                        initial={{ width: "0%" }}
                        animate={{ width: loadingText }}
                        transition={{ ease: "linear", duration: 0.1 }}
                      >
                        <div className="absolute top-0 right-0 w-4 h-full bg-white opacity-50" />
                      </motion.div>
                    </div>

                    {/* Random busy data */}
                    <div className="mt-4 font-mono text-[10px] text-zinc-500 opacity-50 tracking-widest uppercase flex justify-between w-64 max-w-full mx-auto">
                      <span>SYS_MEM_ALLOC</span>
                      <span className="text-ieee-cyan">{randomData}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Header */}
          {isKnownRoute && (
            <header className="sticky top-0 z-50 bg-[#05050A]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
              <div className="max-w-[90rem] mx-auto px-4 sm:px-6 h-14 lg:h-16 xl:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative h-9 w-12 flex items-center justify-center transform group-hover:scale-105 transition-all">
                    <svg className="absolute inset-0 w-full h-full text-ieee-cyan drop-shadow-[0_0_8px_rgba(0,181,226,0.4)]" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5 L115 5 L100 85 L5 85 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                      <path d="M5 25 L10 25 L10 45 L5 45 Z" fill="currentColor" />
                      <path d="M110 45 L115 45 L115 65 L110 65 Z" fill="currentColor" />
                    </svg>
                    <Image src="/images/ieeelogo.png" alt="IEEE Logo" width={24} height={24} className="relative z-10 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-extrabold text-white text-[22px] tracking-tight">IEEE BU</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${pathname === link.path ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* CTA Button & Mobile Menu */}
                <div className="flex items-center gap-4">
                  <div className="hidden lg:block">
                    <a href="#join" className="px-5 py-2.5 bg-ieee-cyan text-black font-black text-xs tracking-wider uppercase rounded hover:bg-white transition-colors duration-300">
                      Join Now
                    </a>
                  </div>

                  <button
                    className="lg:hidden p-2 text-white hover:text-ieee-cyan transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <div className="w-6 h-5 flex flex-col justify-between relative">
                      <span className={`block h-[2px] w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                      <span className={`block h-[2px] w-full bg-current transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
                      <span className={`block h-[2px] w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden border-t border-white/10 bg-[#0a0a14] overflow-hidden"
                  >
                    <div className="px-6 py-6 flex flex-col gap-3">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white"
                        >
                          {link.name}
                        </Link>
                      ))}
                      <a href="#join" className="mt-4 px-4 py-3 text-center bg-ieee-cyan text-[#05050A] text-sm font-bold uppercase tracking-widest rounded-xl">
                        Join Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>
          )}

          {/* Main Content */}
          <main className={`relative z-10 transition-opacity duration-1000 ${showPage || !isKnownRoute ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </main>

          {/* Footer Redesign */}
          {isKnownRoute && (
            <motion.footer
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-20 bg-[linear-gradient(to_bottom,#0f172a_0%,#020617_100%)] border-t border-white/5 text-white pt-[clamp(6rem,15vw,20rem)] pb-6 overflow-hidden uppercase font-sans selection:bg-white selection:text-black mt-auto"
            >
              {/* Angled White Banner with Huge Text */}
              <div className="absolute top-[-10px] left-[-10%] w-[120%] h-[clamp(80px,15vw,320px)] bg-white transform -rotate-3 lg:-rotate-2 origin-top-left flex items-center justify-center lg:justify-start z-10 shadow-2xl border-b-8 border-[#0f172a] lg:border-none">
                <div className="w-full flex justify-center lg:justify-end lg:pr-[10%] pt-8 lg:pt-20 items-start">
                  <h1 className="text-[#0e0e0e] font-black text-[clamp(3rem,12vw,15rem)] leading-none tracking-[-0.05em] uppercase" style={{ transform: 'scaleY(1.1)' }}>
                    IEEE BU
                  </h1>
                  <span className="text-black text-[clamp(1.5rem,3vw,4.5rem)] font-black ml-2 lg:ml-6 mt-2 lg:mt-8">®</span>
                </div>
              </div>

              <div className="max-w-[100rem] mx-auto px-4 sm:px-6 relative z-20 mt-6 lg:mt-14">
                {/* Desktop Layout */}
                <div className="hidden lg:flex justify-between relative min-h-[clamp(300px,40vh,500px)]">

                  {/* Left Column: Contact */}
                  <div className="w-[30%] pt-12 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] tracking-widest mb-6 font-semibold">/ REACH OUT</div>
                      <a href="mailto:ieee@bennett.edu.in" className="block text-3xl font-medium mb-3 hover:opacity-70 transition-opacity whitespace-nowrap">
                        ieee@bennett.edu.in
                      </a>
                      <div className="text-3xl font-medium whitespace-nowrap">
                        / 1800 123 4567
                      </div>
                    </div>

                    <div className="pb-10">
                      <a href="#" className="group inline-flex items-center gap-4 text-6xl font-medium hover:opacity-75 transition-all">
                        Newsletter <span className="text-5xl group-hover:translate-x-2 transition-transform">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Center Graphic */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-35%] w-[clamp(300px,40vw,700px)] pointer-events-none z-0 opacity-30">
                    <Image src="/footer/Cool robot-amico.svg" alt="Footer Illustration" width={800} height={800} className="w-full h-auto object-cover drop-shadow-2xl" priority />
                  </div>

                  {/* Right Columns: Links */}
                  <div className="w-[45%] flex justify-end gap-16 xl:gap-24 pt-12 relative z-10">
                    <div className="w-40">
                      <div className="text-[10px] tracking-widest mb-6 font-semibold">/ FIND US</div>
                      <ul className="space-y-2 text-sm font-medium tracking-wide">
                        <li>Bennett University</li>
                        <li>Tech Block</li>
                        <li>Greater Noida, UP</li>
                        <li>India, 201310</li>
                      </ul>
                    </div>

                    <div className="w-32">
                      <div className="text-[10px] tracking-widest mb-6 font-semibold">/ SOCIAL</div>
                      <ul className="space-y-2 text-sm font-medium tracking-wide">
                        <li><a href="#" className="hover:opacity-70 transition-opacity">YouTube</a></li>
                        <li><a href="#" className="hover:opacity-70 transition-opacity">Instagram</a></li>
                        <li><a href="#" className="hover:opacity-70 transition-opacity">TikTok</a></li>
                        <li><a href="#" className="hover:opacity-70 transition-opacity">X</a></li>
                        <li><a href="#" className="hover:opacity-70 transition-opacity">Facebook</a></li>
                        <li><a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a></li>
                      </ul>
                    </div>

                    <div className="w-32">
                      <div className="text-[10px] tracking-widest mb-6 font-semibold">/ NAV</div>
                      <ul className="space-y-2 text-sm font-medium tracking-wide">
                        <li><Link href="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
                        <li><Link href="/events" className="hover:opacity-70 transition-opacity">Work</Link></li>
                        <li><Link href="/announcements" className="hover:opacity-70 transition-opacity">Announcements</Link></li>
                        <li><Link href="/teams" className="hover:opacity-70 transition-opacity">About</Link></li>
                        <li><a href="#" className="hover:opacity-70 transition-opacity">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden relative">
                  <div className="text-[10px] tracking-widest mb-4 font-semibold">/ REACH OUT</div>
                  <a href="mailto:ieee@bennett.edu.in" className="block text-[22px] sm:text-2xl font-medium mb-1 tracking-tight">
                    ieee@bennett.edu.in
                  </a>
                  <div className="text-[22px] sm:text-2xl font-medium mb-16 tracking-tight">
                    / 1800 123 4567
                  </div>

                  {/* Background Graphic for Mobile */}
                  <div className="absolute top-32 right-[-2rem] w-[350px] sm:w-[450px] pointer-events-none opacity-20 z-0">
                    <Image src="/footer/Robot arm-rafiki.svg" alt="Robot Arm" width={450} height={450} className="w-full h-auto drop-shadow-xl" />
                  </div>

                  <div className="relative z-10 w-full mb-16 space-y-0">
                    <details className="group border-t border-white" open>
                      <summary className="py-4 flex justify-between items-center text-2xl font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        Find us
                        <span className="text-xl group-open:-scale-y-100 transition-transform duration-300">↓</span>
                      </summary>
                      <div className="pb-6 text-sm font-medium space-y-1 opacity-90 pl-1">
                        <p>Bennett University</p>
                        <p>Tech Block</p>
                        <p>Greater Noida, UP</p>
                        <p>India, 201310</p>
                      </div>
                    </details>
                    <details className="group border-t border-white">
                      <summary className="py-4 flex justify-between items-center text-2xl font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        Social
                        <span className="text-xl group-open:-scale-y-100 transition-transform duration-300">↓</span>
                      </summary>
                      <div className="pb-6 text-sm font-medium space-y-2 opacity-90 pl-1 flex flex-col">
                        <a href="#">YouTube</a>
                        <a href="#">Instagram</a>
                        <a href="#">X</a>
                        <a href="#">LinkedIn</a>
                      </div>
                    </details>
                    <details className="group border-t border-b border-white">
                      <summary className="py-4 flex justify-between items-center text-2xl font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        Nav
                        <span className="text-xl group-open:-scale-y-100 transition-transform duration-300">↓</span>
                      </summary>
                      <div className="pb-6 text-sm font-medium space-y-2 opacity-90 pl-1 flex flex-col">
                        <Link href="/">Home</Link>
                        <Link href="/events">Work</Link>
                        <Link href="/announcements">Announcements</Link>
                        <Link href="/teams">About</Link>
                      </div>
                    </details>
                  </div>

                  <div className="relative z-10 group cursor-pointer border-b border-white pb-2 mb-6">
                    <div className="text-[40px] font-medium flex justify-between items-center tracking-tight text-white">
                      Newsletter
                      <span className="text-[30px] group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 lg:mt-32 flex flex-col lg:flex-row justify-between items-start lg:items-center text-[10px] xl:text-[11px] font-medium tracking-wide z-10 relative">
                  <div className="lg:hidden w-full mb-3 text-white">© {new Date().getFullYear()}</div>
                  <div className="hidden lg:block w-1/4"></div>

                  <div className="w-full lg:w-auto uppercase lg:border-t lg:border-white/50 lg:pt-3 flex flex-col lg:flex-row lg:justify-end gap-1 lg:gap-0 lg:opacity-90">
                    <span className="hidden lg:inline mr-1">© IEEE BU STUDENT CHAPTER {new Date().getFullYear()} / </span>
                    <span className="lg:hidden">IEEE BU STUDENT CHAPTER {new Date().getFullYear()} /</span>
                    <span>SITE CREDITS / PRIVACY / UP</span>
                  </div>
                </div>
              </div>
            </motion.footer>
          )}
        </ReactLenis>
      </body>
    </html>
  );
}
