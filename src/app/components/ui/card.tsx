"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[linear-gradient(135deg,rgba(45,45,48,0.95),rgba(62,62,66,0.9))] shadow-[var(--shadow-sm)] transition-all p-6",
                    hoverEffect && "hover:border-[var(--border-medium)] hover:shadow-[var(--shadow-md)]",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
