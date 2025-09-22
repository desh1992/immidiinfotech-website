"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-12 w-12 items-center justify-center rounded-full",
        "backdrop-blur-sm transition-all duration-300",
        "focus:outline-none focus:ring-2",
        "group shadow-lg",
        theme === 'light' 
          ? "bg-white/80 border border-gray-200/50 hover:bg-white/90 focus:ring-gray-300/50"
          : "bg-white/10 border border-white/20 hover:bg-white/20 focus:ring-white/30"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background circle that slides */}
      <motion.div
        className={cn(
          "absolute inset-1 rounded-full",
          "bg-gradient-to-r from-[#00B483] to-[#00B843]",
          "shadow-lg"
        )}
        animate={{
          scale: theme === 'light' ? 0.9 : 1,
          opacity: theme === 'light' ? 0.6 : 0.8,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />

      {/* Icons container */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{
            rotate: theme === 'light' ? 0 : 180,
            scale: theme === 'light' ? 1 : 0.8,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Sun 
            className={cn(
              "h-5 w-5 transition-colors duration-300",
              theme === 'light' 
                ? "text-yellow-500" 
                : "text-white/60"
            )}
          />
        </motion.div>

        <motion.div
          className="absolute"
          animate={{
            rotate: theme === 'light' ? 180 : 0,
            scale: theme === 'light' ? 0.8 : 1,
            opacity: theme === 'light' ? 0 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Moon 
            className={cn(
              "h-5 w-5 transition-colors duration-300",
              theme === 'dark' 
                ? "text-blue-400" 
                : "text-white/60"
            )}
          />
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full",
          "bg-gradient-to-r from-[#00B483]/20 to-[#00B843]/20",
          "blur-md opacity-0"
        )}
        animate={{
          opacity: theme === 'dark' ? 0.4 : 0.2,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Hover particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.button>
  );
}
