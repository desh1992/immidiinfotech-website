"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "./theme-toggle";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    isLight = false,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    isLight?: boolean;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px]",
                        isLight 
                            ? "border-2 border-[#006B5C]/60 shadow-[0_8px_32px_0_rgba(0,107,92,0.2)]"
                            : "border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        isLight
                            ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,107,92,0.25),transparent_70%)]"
                            : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className={cn(
            "relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-500",
            isLight 
                ? "bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]" 
                : "bg-[#030303]"
        )}>
            <div className={cn(
                "absolute inset-0 blur-3xl transition-opacity duration-500",
                isLight 
                    ? "bg-gradient-to-br from-[#006B5C]/[0.3] via-[#007A5C]/[0.2] to-[#005A4A]/[0.3]"
                    : "bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]"
            )} />
            
            {/* Additional gradient layer for more pronounced effect */}
            <div className={cn(
                "absolute inset-0 blur-2xl transition-opacity duration-500",
                isLight 
                    ? "bg-gradient-to-tr from-[#006B5C]/[0.25] via-transparent to-[#007A5C]/[0.25]"
                    : "opacity-0"
            )} />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient={isLight ? "from-[#006B5C]/[0.5]" : "from-indigo-500/[0.15]"}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient={isLight ? "from-[#007A5C]/[0.5]" : "from-rose-500/[0.15]"}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient={isLight ? "from-[#005A4A]/[0.5]" : "from-violet-500/[0.15]"}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient={isLight ? "from-[#006B5C]/[0.45]" : "from-amber-500/[0.15]"}
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    isLight={isLight}
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient={isLight ? "from-[#007A5C]/[0.5]" : "from-cyan-500/[0.15]"}
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    isLight={isLight}
                />
            </div>

            {/* Theme Toggle */}
            <div className="absolute top-6 right-6 z-20">
                <ThemeToggle />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 md:mb-12 transition-colors duration-300",
                            isLight 
                                ? "bg-gray-100/50 border border-gray-200/30" 
                                : "bg-white/[0.03] border border-white/[0.08]"
                        )}
                    >
                        <Circle className={cn(
                            "h-2 w-2 transition-colors duration-300",
                            isLight ? "fill-[#00B483]" : "fill-[#00B483]/80"
                        )} />
                        <span className={cn(
                            "text-sm tracking-wide transition-colors duration-300",
                            isLight ? "text-gray-600" : "text-white/60"
                        )}>
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className={cn(
                                "bg-clip-text text-transparent transition-colors duration-300",
                                isLight 
                                    ? "bg-gradient-to-b from-gray-900 to-gray-700"
                                    : "bg-gradient-to-b from-white to-white/80"
                            )}>
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r transition-colors duration-300",
                                    isLight
                                        ? "from-[#00B483] via-gray-800 to-[#00B843]"
                                        : "from-[#00B483] via-white/90 to-[#00B843]"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className={cn(
                            "text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 transition-colors duration-300",
                            isLight ? "text-gray-600" : "text-white/40"
                        )}>
                            Technology solutions with a mission to provide high quality IT enabled Services like software development, 
                            support, and Technology training and placement services. Serving startups and Fortune 500 companies.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className={cn(
                "absolute inset-0 pointer-events-none transition-opacity duration-500",
                isLight 
                    ? "bg-gradient-to-t from-[#D1FAE5] via-transparent to-[#F0FDF4]/80"
                    : "bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"
            )} />
        </div>
    );
}

export { HeroGeometric }
