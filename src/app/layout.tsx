'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
            <div className="max-w-[90rem] mx-auto px-6 h-20 flex items-center justify-between">
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

        {/* Footer */}
        {isKnownRoute && (
          <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 bg-[linear-gradient(to_bottom,#0f172a_0%,#020617_100%)] border-t border-white/5 pt-24 pb-12 overflow-hidden"
          >
            <div className="max-w-[90rem] mx-auto px-6 grid gap-12 md:grid-cols-12 mb-24">
              {/* Logo and Desc */}
              <div className="md:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-12 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full text-ieee-cyan drop-shadow-[0_0_8px_rgba(0,181,226,0.4)]" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5 L115 5 L100 85 L5 85 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                      <path d="M5 25 L10 25 L10 45 L5 45 Z" fill="currentColor" />
                      <path d="M110 45 L115 45 L115 65 L110 65 Z" fill="currentColor" />
                    </svg>
                    <Image src="/images/ieeelogo.png" alt="IEEE Logo" width={24} height={24} className="relative z-10 object-contain brightness-0 invert opacity-90" />
                  </div>
                  <span className="font-extrabold text-white text-[22px] tracking-tight">IEEE BU</span>
                </div>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-sm">
                  Advancing technology for the benefit of humanity. <br />
                  The premier professional student organization at Bennett University.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <a href="#" className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white hover:text-ieee-cyan hover:border-ieee-cyan/50 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.942 13.942 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.399.11-.836.16-1.295.16-.312 0-.616-.03-.913-.08.618 1.921 2.403 3.32 4.516 3.359A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" /></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white hover:text-ieee-cyan hover:border-ieee-cyan/50 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                </div>
              </div>

              {/* Nav Columns */}
              <div className="md:col-span-2 space-y-6">
                <h3 className="font-bold text-white tracking-tight text-[15px]">Navigation</h3>
                <ul className="text-sm space-y-4 text-zinc-500 font-medium">
                  <li><Link href="/" className="hover:text-ieee-cyan transition-colors">Home</Link></li>
                  <li><Link href="/announcements" className="hover:text-ieee-cyan transition-colors">Announcements</Link></li>
                  <li><Link href="/events" className="hover:text-ieee-cyan transition-colors">Events</Link></li>
                  <li><Link href="/teams" className="hover:text-ieee-cyan transition-colors">Teams</Link></li>
                </ul>
              </div>

              <div className="md:col-span-2 space-y-6">
                <h3 className="font-bold text-white tracking-tight text-[15px]">Legal</h3>
                <ul className="text-sm space-y-4 text-zinc-500 font-medium">
                  <li><Link href="#" className="hover:text-ieee-cyan transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-ieee-cyan transition-colors">Terms of Use</Link></li>
                  <li><Link href="#" className="hover:text-ieee-cyan transition-colors">Code of Conduct</Link></li>
                  <li><Link href="#" className="hover:text-ieee-cyan transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8">
              <div className="max-w-[90rem] mx-auto px-6 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.15em] flex flex-col md:flex-row justify-between gap-4">
                <span>© {new Date().getFullYear()} IEEE BENNETT UNIVERSITY STUDENT CHAPTER.</span>
                <span>BUILT FOR THE FUTURE OF ENGINEERING.</span>
              </div>
            </div>
          </motion.footer>
        )}
      </body>
    </html>
  );
}
