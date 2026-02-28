# 🌐 IEEE Student Branch • Bennett University

[![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A high-performance, aesthetically driven platform for the **IEEE Student Branch at Bennett University**. Built with a focus on immersive user experiences, technical excellence, and brutalist-modern design patterns.

---

## ✨ Immersive Features

### 🎞️ Scroll-Synced Cinematic Background
Featuring a custom-built **192-frame 24fps video sequence** player. The background is natively mapped to the global scroll percentage using a performance-optimized HTML Canvas implementation, allowing users to scrub through a high-fidelity cinematic journey as they explore the story.

### ⛰️ Dynamic Topographic Landscapes
A custom elevation-map system that provides deep spatial context. The site leverages a blend of 3D CSS transforms and Canvas API noise generation to create a "breathing" industrial-tech environment.

### 🧩 Brutalist 404 Experience
A unique, typography-heavy collage experience for broken routes. Features:
- **Spinning SVG Text-Paths**: Circular animations wrapping IEEE and 404 identifiers.
- **3D Sticker Collage**: Floating, rotating brutalist blocks inspired by modern poster design.
- **Interactive Stacking**: Perspective-aware layers that respond to page depth.

### 💨 Next-Gen Layout System
- **Conditional Interface**: The header and footer intelligently hide on specialized "Immersive" pages (like the 404) to provide 100% focus on creative content.
- **Micro-Animations**: Extensive use of `framer-motion` for shared layout transitions and physics-based interactions.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Graphics**: [HTML5 Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ieee-website-next
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```bash
├── public/
│   ├── hero-bgframes/     # 192 Scroll-sequence frames (gitignored)
│   ├── images/            # Static assets
│   └── hero_bg.png        # Native hero background
├── src/
│   ├── app/               # Next.js App Router & Pages
│   │   ├── not-found.tsx  # Custom 404 Collage
│   │   └── layout.tsx     # Conditional Layout Logic
│   └── components/        # React Components
│       └── home/          
│           ├── HeroSection.tsx
│           └── ScrollSequenceBackground.tsx # Scroll Logic
└── components.json        # Project Config
```

---

## ⚖️ License

Built with 💙 for **IEEE Bennett University Student Chapter**.
© 2026 IEEE BU Student Branch.

---
