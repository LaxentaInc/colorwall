"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-[linear-gradient(135deg,var(--accent),var(--accent-hover))] text-white shadow-[var(--shadow-md)] border-none hover:shadow-[0_8px_24px_rgba(0,120,212,0.4)]",
            secondary: "bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-medium)] hover:bg-[var(--bg-hover)] hover:border-[var(--accent)] hover:shadow-[var(--shadow-sm)]",
            danger: "bg-[linear-gradient(135deg,#dc2626,#b91c1c)] text-white shadow-[0_4px_12px_rgba(220,38,38,0.3)] border-none hover:shadow-[0_8px_24px_rgba(220,38,38,0.4)]",
            ghost: "bg-transparent text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] border-none shadow-none",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-12 px-8 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ translateY: -2 }}
                whileTap={{ translateY: 0, scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-[var(--radius-md)] font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props as any}
            >
                {isLoading && (
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                )}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
