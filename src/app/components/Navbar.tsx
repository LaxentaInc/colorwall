"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/contexts/ThemeContext";
import { Github, MessageCircle, Moon, Sun, Home, Download, FileText, Menu, X } from "lucide-react";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const isDark = theme === "dark";
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-hide logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if scrolling UP or at the very top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else {
                // Hide if scrolling DOWN and not at top
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Download", href: "/download", icon: Download },
        { name: "Changelog", href: "/changelog", icon: FileText },
    ];

    return (
        <motion.div
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{
                x: isVisible || isHovered ? 0 : -100,
                opacity: isVisible || isHovered ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Vertical "Dock" */}
            <div className={`p-2 rounded-2xl border backdrop-blur-xl shadow-2xl flex flex-col gap-2
                ${isDark
                    ? "bg-[#0a0a0a]/80 border-white/10"
                    : "bg-white/80 border-black/10"}`}
            >
                {/* Logo / Home Button */}
                <Link
                    href="/"
                    className={`p-2 rounded-xl transition-all duration-300 group relative
                        ${pathname === "/"
                            ? (isDark ? "bg-white/10 text-white" : "bg-black/5 text-black")
                            : (isDark ? "text-white/40 hover:text-white hover:bg-white/5" : "text-black/40 hover:text-black hover:bg-black/5")}`}
                >
                    <div className="relative w-6 h-6">
                        <img src="/colorwall.png" alt="Logo" className="object-contain w-full h-full" />
                    </div>
                    {/* Tooltip */}
                    <span className={`absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                        ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                        Home
                    </span>
                </Link>

                <div className={`h-[1px] w-full ${isDark ? "bg-white/10" : "bg-black/10"}`} />

                {/* Nav Links */}
                {navLinks.slice(1).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`p-2.5 rounded-xl transition-all duration-300 group relative
                                ${isActive
                                    ? (isDark ? "bg-white/10 text-white" : "bg-black/5 text-black")
                                    : (isDark ? "text-white/40 hover:text-white hover:bg-white/5" : "text-black/40 hover:text-black hover:bg-black/5")}`}
                        >
                            <link.icon size={20} />
                            <span className={`absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                                ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                                {link.name}
                            </span>
                        </Link>
                    );
                })}

                <div className={`h-[1px] w-full ${isDark ? "bg-white/10" : "bg-black/10"}`} />

                {/* Socials & Settings */}
                <a
                    href="https://github.com/shelleyloosespatience/WallpaperEngine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl transition-all duration-300 group relative
                        ${isDark ? "text-white/40 hover:text-white hover:bg-white/5" : "text-black/40 hover:text-black hover:bg-black/5"}`}
                >
                    <Github size={20} />
                    <span className={`absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                        ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                        GitHub
                    </span>
                </a>

                <a
                    href="https://discord.gg/QYwhay7r2V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl transition-all duration-300 group relative
                        ${isDark ? "text-white/40 hover:text-[#5865F2] hover:bg-[#5865F2]/10" : "text-black/40 hover:text-[#5865F2] hover:bg-[#5865F2]/10"}`}
                >
                    <MessageCircle size={20} />
                    <span className={`absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                        ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                        Discord
                    </span>
                </a>

                <button
                    onClick={toggleTheme}
                    className={`p-2.5 rounded-xl transition-all duration-300 group relative
                        ${isDark ? "text-yellow-400 hover:bg-yellow-400/10" : "text-slate-600 hover:bg-slate-100"}`}
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    <span className={`absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                        ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                        Toggle Theme
                    </span>
                </button>
            </div>
        </motion.div>
    );
};
