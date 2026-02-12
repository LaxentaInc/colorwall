"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, ShieldCheck, FileCheck, Hash, Terminal, AlertTriangle, ExternalLink } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function DownloadPage() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const bgColor = isDark ? "bg-[#0a0a0a]" : "bg-white";
    const textColor = isDark ? "text-white" : "text-black";
    const mutedText = isDark ? "text-white/60" : "text-black/60";
    const borderColor = isDark ? "border-white/10" : "border-black/10";
    const cardBg = isDark ? "bg-white/5" : "bg-black/5";

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} font-sans selection:bg-blue-500/30`}>
            {/* Header */}
            {/* Header removed for global navbar */}
            <div className="h-16" /> {/* Spacer for fixed navbar */}

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* Hero / Main Download Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-8"
                    >
                        <div className="relative w-32 h-32 mx-auto drop-shadow-2xl">
                            <Image
                                src="/colorwall.png"
                                alt="ColorWall Icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <div>
                            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                                Download ColorWall
                            </h1>
                            <p className={`text-lg ${mutedText} max-w-xl mx-auto`}>
                                An Lightweight Wallpaper Engine in Rust<br />
                                <span className="text-xs font-mono opacity-70">v3.5.7 · 64-bit · Windows 10/11</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <a
                                href="/get-app"
                                className={`group relative inline-flex items-start gap-4 px-8 py-5 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                                    ${isDark
                                        ? "bg-white text-black hover:shadow-white/20"
                                        : "bg-black text-white hover:shadow-black/20"}`}
                            >
                                <Download className="mt-1" size={24} />
                                <div className="text-left">
                                    <div className="leading-none mb-1">Download Installer</div>
                                    <div className="text-xs font-normal opacity-60">ColorWall_3.5.7_x64-setup.exe (7.1 MB)</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-2 text-xs font-mono opacity-50">
                                <ShieldCheck size={14} className="text-emerald-500" />
                                <span>VirusTotal Scanning Available Below</span>
                            </div>
                        </div>
                    </motion.div>


                    {/* Security Report Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`rounded-3xl border ${borderColor} overflow-hidden`}
                    >
                        <div className={`p-6 border-b ${borderColor} flex items-center justify-between flex-wrap gap-4 ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg">Security Report</h2>
                                    <p className={`text-xs ${mutedText}`}>Transparency is key. Verify our binary yourself.</p>
                                </div>
                            </div>

                            <a
                                href="https://www.virustotal.com/gui/file/453f3dbbea65e99930bd2df206ac2a3744908907a1f3a8d89bc8886ffbe79fe5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors
                                    ${isDark ? "bg-[#394eff] text-white hover:bg-[#394eff]/80" : "bg-[#394eff] text-white hover:bg-[#394eff]/80"}`}
                            >
                                <ExternalLink size={14} />
                                Open VirusTotal Report
                            </a>
                        </div>

                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                            {/* Hashes Column */}
                            <div className="p-6 space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-wider opacity-50 flex items-center gap-2">
                                    <Hash size={14} />
                                    File Hashes
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-[10px] font-mono uppercase opacity-40 mb-1">SHA-256</div>
                                        <code className={`block text-xs font-mono break-all p-3 rounded-lg ${cardBg} select-all cursor-text text-emerald-500/80`}>
                                            453f3dbbea65e99930bd2df206ac2a3744908907a1f3a8d89bc8886ffbe79fe5
                                        </code>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase opacity-40 mb-1">MD5</div>
                                        <code className={`block text-xs font-mono break-all p-3 rounded-lg ${cardBg} select-all cursor-text`}>
                                            a9de59aa38aa938a898a292e7efc3d4d
                                        </code>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase opacity-40 mb-1">SHA-1</div>
                                        <code className={`block text-xs font-mono break-all p-3 rounded-lg ${cardBg} select-all cursor-text`}>
                                            b2ff9d998e8b2abc1b7f450205c6ea7eea978cbe
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* Details Column */}
                            <div className="p-6 space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-wider opacity-50 flex items-center gap-2">
                                    <FileCheck size={14} />
                                    Binary Details
                                </h3>

                                <dl className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <dt className={`text-xs ${mutedText}`}>File Name</dt>
                                        <dd className="font-mono text-xs">ColorWall_3.5.7_x64-setup.exe</dd>
                                    </div>
                                    <div>
                                        <dt className={`text-xs ${mutedText}`}>File Size</dt>
                                        <dd className="font-mono text-xs">7.1 MB (7,127,504 bytes)</dd>
                                    </div>
                                    <div>
                                        <dt className={`text-xs ${mutedText}`}>File Type</dt>
                                        <dd className="font-mono text-xs">Win32 EXE (GUI) Intel 80386</dd>
                                    </div>
                                    <div>
                                        <dt className={`text-xs ${mutedText}`}>Installer</dt>
                                        <dd className="font-mono text-xs">Nullsoft Scriptable Install System</dd>
                                    </div>
                                    <div className="col-span-2">
                                        <dt className={`text-xs ${mutedText}`}>Signature</dt>
                                        <dd className="font-mono text-xs flex items-center gap-2 text-amber-500">
                                            {/* <AlertTriangle size={12} /> */}
                                            Unsigned (for now, in dev phase)
                                        </dd>
                                    </div>
                                </dl>

                                <div className={`p-4 rounded-xl border border-dashed ${borderColor} bg-transparent`}>
                                    <p className={`text-xs ${mutedText} leading-relaxed`}>
                                        <strong className="block mb-1 text-current">Why is it shown as "Unsigned"?</strong>
                                        Code signing certificates cost hundreds of dollars a year. As a currently free & soon to be open-source software we don't have the resources to get a code signing certificate YET (but we will). You may need to click "Run Anyway" on Windows SmartScreen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                </div>
            </main>

            <Footer theme={theme} />
        </div>
    );
}
