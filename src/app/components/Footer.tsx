"use client";

import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, Heart } from "lucide-react";

export const Footer = ({ theme }: { theme: "dark" | "light" }) => {
    const isDark = theme === "dark";

    // Blue Archive Colors
    const baBlue = "#00A4FF";
    const baDark = "#1A1A1A"; // Dark grey background for dark theme
    const baLight = "#FFFFFF"; // White background for light theme
    const baText = isDark ? "#FFFFFF" : "#4B5563";
    const baTextLight = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.4)";

    return (
        <footer className={`relative mt-20 overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-slate-50"}`}>
            {/* ════ Decoration Strip ════ */}
            {/* The diagonal striped header characteristic of BA UI */}
            <div className="h-3 w-full relative overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundColor: baBlue,
                        backgroundImage: `repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 10px,
                            rgba(255,255,255,0.2) 10px,
                            rgba(255,255,255,0.2) 20px
                        )`
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* ════ Branding / "Schale" ════ */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            {/* Halo Icon / Logo Placeholder */}
                            <div className="relative w-8 h-8 rounded-full border-2 border-[#00A4FF] flex items-center justify-center">
                                <motion.div
                                    className="w-4 h-4 bg-[#00A4FF] rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }} // smooth breathing 
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                {/* Halo ring effect */}
                                <motion.div
                                    className="absolute inset-[-4px] rounded-full border border-[#00A4FF]/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                            <span className={`font-black text-xl tracking-tighter ${isDark ? "text-white" : "text-slate-800"}`}>
                                COLOR<span className="text-[#00A4FF]">WALL</span>
                            </span>
                        </div>
                        <p className={`text-sm leading-relaxed font-mono ${isDark ? "text-white/40" : "text-slate-500"}`}>
                            PRODUCED BY LAXENTA INC <br />
                            @laxenta.me
                        </p>
                    </div>

                    {/* ════ Links ════ */}
                    {[
                        { title: "Product", links: ["Features", "Download", "Changelog", "Source Code"] },
                        { title: "Community", links: ["Discord", "Twitter", "GitHub", "Issues"] },
                        { title: "Legal", links: ["Privacy", "Terms", "Licenses", "Credits"] }
                    ].map((section) => (
                        <div key={section.title} className="col-span-1">
                            <h3 className={`font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2
                                ${isDark ? "text-white/90" : "text-slate-800"}`}>
                                <span className="w-1.5 h-1.5 bg-[#00A4FF] rounded-sm transform rotate-45" />
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className={`text-sm font-medium transition-all duration-200 flex items-center gap-2 group
                                                ${isDark ? "text-white/40 hover:text-[#00A4FF]" : "text-slate-500 hover:text-[#00A4FF]"}`}
                                        >
                                            <span className="w-0 group-hover:w-2 h-[1px] bg-[#00A4FF] transition-all duration-300" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ════ Bottom Info ════ */}
                <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4
                    ${isDark ? "border-white/5" : "border-slate-200"}`}>

                    <div className={`text-xs font-mono opacity-50 flex items-center gap-2 ${isDark ? "text-white" : "text-slate-600"}`}>
                        <span>© 2025 LAXENTA INC.</span>
                        <span className="w-1 h-1 bg-[#00A4FF] rounded-full" />
                        <span className="uppercase">All rights reserved.</span>
                    </div>

                    <div className="flex gap-4">
                        {[Github, Twitter, MessageCircle].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`p-2 rounded-lg transition-colors duration-200
                                    ${isDark
                                        ? "bg-white/5 text-white/60 hover:bg-[#00A4FF] hover:text-white"
                                        : "bg-slate-100 text-slate-500 hover:bg-[#00A4FF] hover:text-white"}`}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ════ Background Elements ════ */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#00A4FF]/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#00A4FF]/5 to-transparent pointer-events-none" />
        </footer>
    );
};
