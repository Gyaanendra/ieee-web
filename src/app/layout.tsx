'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import { anton, helvena, neurial } from './fonts';
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
    <html lang="en" className={`${anton.variable} ${helvena.variable} ${neurial.variable}`}>
      <head>
        <title>IEEE Student Branch · Bennett University</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen relative bg-[#05050A] text-white selection:bg-ieee-cyan/30">
        <ReactLenis root options={{ lerp: 0.02, duration: 2.5, smoothWheel: true, wheelMultiplier: 0.7 }}>
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
                      <Image src="/ieee_logo/ieee mb tagline white png.png" alt="IEEE Logo" width={300} height={100} className="w-36 md:w-48 xl:w-60 h-auto object-contain" priority />
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

          {/* Floating Navbar */}
          <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-3xl">
              <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-full bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                {/* Logo */}
                <Link href="/" className="flex items-center group flex-shrink-0 pr-2">
                  <div className="relative h-8 w-28 md:w-32 flex items-center justify-center">
                    <Image src="/ieee_logo/ieee mb tagline white png.png" alt="IEEE BU Logo" fill className="object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 ${pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                        ? 'bg-white/10 text-white'
                        : 'text-zinc-500 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* CTA + Mobile Menu */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a href="#join" className="hidden lg:block px-4 py-1.5 bg-ieee-cyan text-black font-black text-[11px] tracking-wider uppercase rounded-full hover:bg-white transition-colors duration-300">
                    Join Now
                  </a>
                  <button
                    className="lg:hidden p-2 text-white hover:text-ieee-cyan transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <div className="w-5 h-4 flex flex-col justify-between relative">
                      <span className={`block h-[2px] w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                      <span className={`block h-[2px] w-full bg-current transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
                      <span className={`block h-[2px] w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="lg:hidden mt-2 rounded-2xl bg-[#0a0a14]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <div className="px-4 py-4 flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-colors ${pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                            ? 'bg-white/10 text-white'
                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                      <a href="#join" className="mt-2 px-4 py-3 text-center bg-ieee-cyan text-[#05050A] text-sm font-bold uppercase tracking-widest rounded-xl">
                        Join Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </header>

          {/* Main Content */}
          <main className={`relative z-10 pt-20 transition-opacity duration-1000 ${showPage ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </main>

          {/* Footer Redesign - Minimalist */}
          <footer className="relative z-20 bg-[#05050A] text-white flex flex-col justify-between pt-12 md:pt-16 pb-6 px-8 md:px-16 overflow-hidden selection:bg-ieee-cyan selection:text-black mt-auto rounded-t-[2.5rem] border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ieee-cyan/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between w-full max-w-[100rem] mx-auto flex-1">

              {/* Top Section */}
              <div className="flex flex-col md:flex-row justify-between w-full gap-16 md:gap-0 mt-4 md:mt-8">

                {/* Left Mini Logo */}
                <div className="md:w-1/4">
                  <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                    <Image src="/ieee_logo/ieee mb white png.png" alt="IEEE Icon" width={32} height={32} className="object-contain" />
                  </div>
                </div>

                {/* Right Columns Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 lg:gap-32 w-full md:w-auto md:pr-12">

                  {/* Column 1: The Good */}
                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-xs md:text-sm font-bold tracking-tight mb-2">The Good</h3>
                    <Link href="/" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Home
                    </Link>
                    <Link href="/events" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Events
                    </Link>
                    <Link href="/teams" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Teams
                    </Link>
                    <Link href="/announcements" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Announcements
                    </Link>
                  </div>

                  {/* Column 2: The Boring */}
                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-xs md:text-sm font-bold tracking-tight mb-2">The Boring</h3>
                    <a href="mailto:ieee@bennett.edu.in" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Contact Us
                    </a>
                    <a href="#" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Terms of Use
                    </a>
                  </div>

                  {/* Column 3: The Cool */}
                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-xs md:text-sm font-bold tracking-tight mb-2">The Cool</h3>
                    <a href="#" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      X (Twitter)
                    </a>
                    <a href="#" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      Instagram
                    </a>
                    <a href="#" className="text-base text-zinc-400 hover:text-white transition-colors tracking-tight font-medium">
                      LinkedIn
                    </a>
                  </div>

                </div>
              </div>

              {/* Bottom Section: Typography & Copyright */}
              <div className="w-full mt-auto pt-16 md:pt-20 relative">

                {/* Massive Fluid Typography */}
                <div className="w-full flex justify-center items-center mb-6 select-none relative z-0 overflow-hidden">
                  <h1 className="text-[clamp(6rem,22vw,28rem)] font-neurial font-bold tracking-tighter leading-none text-white text-center w-full flex justify-center items-center opacity-[0.96]">
                    IEEE<span className="text-ieee-cyan font-sans leading-[0]">.</span>BU
                  </h1>
                </div>

                {/* Bottom Copyright Row */}
                <div className="flex flex-row justify-between items-end md:items-center text-[10px] md:text-xs text-zinc-500 font-medium tracking-widest uppercase relative z-10 w-full px-2">
                  <div className="max-w-[150px] md:max-w-none">
                    © IEEE BU Student Branch {new Date().getFullYear()}
                  </div>
                  <div className="text-right">
                    Bennett University<br className="md:hidden" /> India
                  </div>
                </div>
              </div>

            </div>
          </footer>
        </ReactLenis>
      </body>
    </html>
  );
}
