import localFont from 'next/font/local';
import { Anton } from 'next/font/google';

export const anton = Anton({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-anton',
    display: 'swap',
});

export const helvena = localFont({
    src: [
        {
            path: '../../public/fonts/helvena-grotesk-font/helvena-grotesk-font/helvena-regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/helvena-grotesk-font/helvena-grotesk-font/helvena-medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/helvena-grotesk-font/helvena-grotesk-font/helvena-semibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/helvena-grotesk-font/helvena-grotesk-font/helvena-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/helvena-grotesk-font/helvena-grotesk-font/helvena-black.otf',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-helvena',
    display: 'swap',
});

export const neurial = localFont({
    src: [
        {
            path: '../../public/fonts/neruial-grotesk/NeurialGrotesk-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/neruial-grotesk/NeurialGrotesk-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/neruial-grotesk/NeurialGrotesk-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/neruial-grotesk/NeurialGrotesk-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/neruial-grotesk/NeurialGrotesk-Extrabold.ttf',
            weight: '800',
            style: 'normal',
        }
    ],
    variable: '--font-neurial',
    display: 'swap',
});
