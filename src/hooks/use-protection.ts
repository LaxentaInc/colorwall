"use client";

import { useEffect } from "react";

export const useProtection = () => {
    useEffect(() => {
        const preventKeys = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey && (e.key === "u" || e.key === "U")) ||
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I"))
            ) {
                e.preventDefault();
            }
        };
        const preventCtx = (e: Event) => {
            const t = e.target as HTMLElement;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.closest(".allow-select")) return;
            e.preventDefault();
        };
        document.addEventListener("contextmenu", preventCtx);
        document.addEventListener("keydown", preventKeys);
        return () => {
            document.removeEventListener("contextmenu", preventCtx);
            document.removeEventListener("keydown", preventKeys);
        };
    }, []);
};
