"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-primary-light border-transparent shadow-sm",
            secondary: "bg-sage-400 text-white hover:bg-sage-500 border-transparent shadow-sm",
            outline: "bg-transparent border-current text-primary hover:bg-sand-50",
            ghost: "bg-transparent text-primary hover:bg-gray-50 border-transparent",
        };

        const sizes = {
            sm: "px-5 py-1.5 text-xs tracking-widest uppercase", // Thinner, tracking
            md: "px-7 py-2 text-sm tracking-widest uppercase",   // Thinner
            lg: "px-10 py-3 text-base tracking-widest uppercase", // Thinner
        };

        return (
            <button
                ref={ref}
                disabled={isLoading || props.disabled}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-serif font-medium transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-400 disabled:opacity-50 disabled:cursor-not-allowed border hover:scale-105 active:scale-95 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
