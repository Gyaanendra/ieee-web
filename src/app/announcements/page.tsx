import { motion } from 'framer-motion';

export default function Announcements() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ieee-cyan/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase relative z-10 mb-8">
                Announcements
            </h1>

            <div className="relative z-10 max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                    <div className="border border-ieee-cyan/20 bg-ieee-cyan/5 rounded-2xl p-6 text-left relative overflow-hidden group hover:border-ieee-cyan/40 transition-colors">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ieee-cyan to-ieee-blue opacity-50"></div>
                        <div className="flex justify-between items-start mb-4 gap-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-ieee-cyan transition-colors">Welcome to IEEE Student Branch</h3>
                            <span className="text-xs font-mono text-ieee-cyan bg-ieee-cyan/10 px-2 py-1 rounded">NEW</span>
                        </div>
                        <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                            We are excited to launch our newly redesigned website! Check back here for the latest news, upcoming sessions, and important announcements from the core team.
                        </p>
                        <div className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                            Posted: Just now
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/10"></div>

                    <div className="text-zinc-500 text-sm font-medium">
                        No older announcements to display.
                    </div>
                </div>
            </div>
        </div>
    );
}
