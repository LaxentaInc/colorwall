"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { Download, FileText, MessageCircle, Monitor, Cpu, Github } from "lucide-react";
import { ScrollArrow } from "./ScrollArrow";

export const HeroSection = ({ theme }: { theme: "dark" | "light" }) => {
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

    return (
        <motion.section
            style={{ scale: heroScale }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
        >
            {/* video bg — no blur */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover ${theme === "dark" ? "opacity-25" : "opacity-10"}`}
                >
                    <source src="/videos/myCutekoiiii.webm" type="video/webm" />
                </video>
                {/* subtle gradient fade at edges */}
                <div className={`absolute inset-0 ${theme === "dark"
                    ? "bg-gradient-to-b from-black/60 via-transparent to-black"
                    : "bg-gradient-to-b from-white/70 via-transparent to-white"}`}
                />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center space-y-8 max-w-5xl">
                {/* logo — static, always visible, no fade */}
                <div className="relative w-full max-w-3xl h-[180px] sm:h-[280px] md:h-[380px]">
                    <Image
                        src="/LxColorWall.png"
                        alt="ColorWall"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* typewriter */}
                <div className={`text-sm sm:text-lg md:text-xl font-mono ${theme === "dark" ? "text-white/50" : "text-black/50"}`}>
                    <Typewriter
                        words={[
                            "< free 4K live wallpapers for Windows />",
                            "< ~0.5% CPU usage, hardware decoded />",
                            "< 8 sources, one unified store />",
                            "< open source · AGPL-3 · no accounts />",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={45}
                        deleteSpeed={25}
                        delaySpeed={2200}
                    />
                </div>

                {/* cta row */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    {/* download */}
                    <a
                        href="https://github.com/shelleyloosespatience/WallpaperEngine/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5
                            ${theme === "dark"
                                ? "bg-white text-black hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
                                : "bg-black text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"}`}
                    >
                        <Download size={18} />
                        Download for Windows
                        <span className={`text-xs px-2 py-0.5 rounded-md ml-1
                            ${theme === "dark" ? "bg-black/10 text-black/60" : "bg-white/10 text-white/60"}`}>
                            Win 10/11
                        </span>
                    </a>

                    {/* changelog */}
                    <a
                        href="https://github.com/shelleyloosespatience/WallpaperEngine/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5
                            ${theme === "dark"
                                ? "border border-white/15 text-white/70 hover:border-white/30 hover:bg-white/5 hover:text-white"
                                : "border border-black/15 text-black/60 hover:border-black/30 hover:bg-black/5 hover:text-black"}`}
                    >
                        <FileText size={16} />
                        Changelog
                    </a>

                    {/* discord support */}
                    <a
                        href="https://discord.gg/laxenta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5
                            ${theme === "dark"
                                ? "border border-white/15 text-white/70 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300"
                                : "border border-black/15 text-black/60 hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:text-indigo-600"}`}
                    >
                        <MessageCircle size={16} />
                        Discord
                    </a>
                </div>

                {/* platform tags */}
                <div className={`flex items-center gap-3 text-xs font-mono pt-2
                    ${theme === "dark" ? "text-white/30" : "text-black/30"}`}
                >
                    <span className="flex items-center gap-1.5"><Cpu size={12} /> Rust + Tauri</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><Monitor size={12} /> Windows 10/11</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><Github size={12} /> AGPL-3</span>
                </div>
            </div>

            <ScrollArrow theme={theme} />
        </motion.section>
    );
};
