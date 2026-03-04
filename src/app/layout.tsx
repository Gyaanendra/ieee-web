'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { anton, helvena, neurial } from './fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsTransitioning(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const handleTransitionNavigate = useCallback((e: React.MouseEvent<HTMLAnchorElement> | MouseEvent, path: string) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;

    // Smooth scroll for anchors
    if (path.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(path);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }

    if (pathname === path) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    setIsTransitioning(true);
    setIsMenuOpen(false);
    document.body.style.overflow = 'hidden';

    // Wait for the bars to fully cover the screen before resetting scroll and changing route
    // (0.8s duration + 0.5s max stagger = 1.3s total animation time)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // Snap to top underneath veil
      router.push(path);
      // Failsafe double reset for NextJS scroll caching
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
    }, 1300);
  }, [pathname, router]);

  // Global Link Interceptor (catches <Link> tags from standard pages like 404)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');

      // Handle internal section jumps smoothly (e.g. #join)
      if (href?.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation();
        const targetElement = document.querySelector(href) as HTMLElement | null;
        if (targetElement && lenis) {
          // Lenis-aware smooth scroll (syncs with background layers natively)
          lenis.scrollTo(targetElement);
        } else if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
        return;
      }

      // Ignore external or non-http links
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      if (href.startsWith('/')) {
        // Prevent default and let our transition handle it
        e.preventDefault();
        e.stopPropagation();
        handleTransitionNavigate(e as any, href);
      }
    };

    // Use capture phase to intercept BEFORE next.js does
    document.addEventListener('click', handleGlobalClick, true);
    return () => document.removeEventListener('click', handleGlobalClick, true);
  }, [handleTransitionNavigate]);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId) as HTMLElement | null;
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement);
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
      <body className="min-h-screen flex flex-col relative bg-[#05050A] text-white selection:bg-ieee-cyan/30">
        <ReactLenis root options={{ lerp: 0.02, duration: 2.5, smoothWheel: true, wheelMultiplier: 0.7 }}>

          {/* Floating Navbar */}
          <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-3xl">
              <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-full bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                {/* Logo */}
                <Link href="/" onClick={(e) => handleTransitionNavigate(e, '/')} className="flex items-center group flex-shrink-0 pr-2">
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
                      onClick={(e) => handleTransitionNavigate(e, link.path)}
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
                  <a href="#join" onClick={(e) => handleAnchorClick(e, '#join')} className="hidden lg:block px-4 py-1.5 bg-ieee-cyan text-black font-black text-[11px] tracking-wider uppercase rounded-full hover:bg-white transition-colors duration-300">
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
                          onClick={(e) => handleTransitionNavigate(e, link.path)}
                          className={`px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-colors ${pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                            ? 'bg-white/10 text-white'
                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                      <a href="#join" onClick={(e) => handleAnchorClick(e, '#join')} className="mt-2 px-4 py-3 text-center bg-ieee-cyan text-[#05050A] text-sm font-bold uppercase tracking-widest rounded-xl">
                        Join Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </header>

          {/* Seamless Page Transitions */}
          <div className="flex-1 flex flex-col w-full">

            {/* 6-Bar Custom Wipe Overlay */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] z-[100] flex pointer-events-none overflow-hidden -rotate-[15deg]">
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const direction = i % 2 === 0 ? 1 : -1;
                return (
                  <motion.div
                    key={i}
                    className="h-full flex-1 bg-[#05050A] border-r border-[#1a1a24] shadow-[0_0_40px_rgba(0,181,226,0.05)] relative overflow-hidden flex items-center"
                    initial={{ y: "0%" }}
                    animate={{ y: isTransitioning ? "0%" : `${100 * direction}%` }}
                    transition={{
                      duration: 0.8,
                      ease: [0.85, 0, 0.15, 1],
                      delay: isTransitioning ? i * 0.1 : (5 - i) * 0.1
                    }}
                  >
                    {/* Perfect sliced alignment container - Counter-animated to stay fixed! */}
                    <motion.div
                      className="absolute top-0 h-full w-[150vw] flex items-center justify-center pointer-events-none"
                      style={{ left: `-${i * (150 / 6)}vw` }}
                      initial={{ y: "0%" }}
                      animate={{ y: isTransitioning ? "0%" : `${-100 * direction}%` }}
                      transition={{
                        duration: 0.8,
                        ease: [0.85, 0, 0.15, 1],
                        delay: isTransitioning ? i * 0.1 : (5 - i) * 0.1
                      }}
                    >
                      {/* Hollow Glowing Letters full text */}
                      <span
                        className="text-transparent font-black tracking-tighter leading-none select-none drop-shadow-[0_0_15px_rgba(0,181,226,0.5)] whitespace-nowrap"
                        style={{
                          fontSize: 'clamp(10rem, 20vw, 30rem)',
                          WebkitTextStroke: '3px rgba(0, 181, 226, 0.8)',
                          transform: 'rotate(15deg)'
                        }}
                      >
                        IEEE BU
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Main Content */}
            <main className="relative z-10 pt-20 flex-1">
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
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
