'use client';

import { useEffect, useRef } from 'react';

const FRAME_COUNT = 192;
const images: HTMLImageElement[] = [];

export default function ScrollSequenceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Preload all frames immediately
        const loadImages = () => {
            for (let i = 0; i < FRAME_COUNT; i++) {
                const img = new Image();
                const paddedIndex = (i + 1).toString().padStart(3, '0');
                img.src = `/hero-bgframes/ezgif-frame-${paddedIndex}.jpg`;
                images[i] = img;
            }
        };

        loadImages();

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let cw = canvas.width = window.innerWidth;
        let ch = canvas.height = window.innerHeight;

        const renderFrame = (index: number) => {
            const img = images[index];

            // Keep trying to draw the closest previously loaded image while lazy loading finishes
            if (!img || !img.complete) {
                let fallback: HTMLImageElement | undefined = undefined;
                for (let i = index; i >= 0; i--) {
                    if (images[i]?.complete) {
                        fallback = images[i];
                        break;
                    }
                }
                if (fallback) {
                    ctx.clearRect(0, 0, cw, ch);
                    const scale = Math.max(cw / fallback.width, ch / fallback.height);
                    const x = (cw / 2) - (fallback.width / 2) * scale;
                    const y = (ch / 2) - (fallback.height / 2) * scale;
                    ctx.drawImage(fallback, x, y, fallback.width * scale, fallback.height * scale);
                }
                return;
            }

            const scale = Math.max(cw / img.width, ch / img.height);
            const x = (cw / 2) - (img.width / 2) * scale;
            const y = (ch / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        // First draws mapping immediately to load state
        images[0].onload = () => renderFrame(0);
        if (images[0].complete) renderFrame(0);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;

            if (maxScroll <= 0) return;

            const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(scrollFraction * (FRAME_COUNT - 1))
            );

            requestAnimationFrame(() => renderFrame(frameIndex));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Fallback: Check constantly for first 10 images loading to guarantee paint
        const fallbackPainter = setInterval(() => handleScroll(), 200);
        setTimeout(() => clearInterval(fallbackPainter), 3000);

        const handleResize = () => {
            cw = canvas.width = window.innerWidth;
            ch = canvas.height = window.innerHeight;
            handleScroll();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearInterval(fallbackPainter);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none bg-[#05050A]">
            <canvas ref={canvasRef} className="w-full h-full opacity-60 mix-blend-lighten" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/10 via-[#05050A]/60 to-[#05050A]/90" />
        </div>
    );
}
