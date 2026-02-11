"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function StorePage() {
    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
            >
                <h1 className="text-4xl font-bold">Store</h1>

                {/* Search Bar Placeholder */}
                <div className="relative max-w-xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={20} />
                    <input
                        type="text"
                        placeholder="Search wallpapers..."
                        className="w-full h-12 pl-12 pr-4 rounded-[var(--radius-lg)] bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                </div>
            </motion.div>

            {/* Grid Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="aspect-[16/9] rounded-[var(--radius-lg)] bg-[var(--bg-secondary)] animate-pulse"
                    />
                ))}
            </div>
        </div>
    );
}
