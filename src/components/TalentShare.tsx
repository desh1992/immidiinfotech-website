"use client";

import { motion } from "framer-motion";
import { Lightbulb, Star, Rocket, Users } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function TalentShare() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const projectFeatures = [
        {
            icon: Lightbulb,
            label: "Novel Concept"
        },
        {
            icon: Star,
            label: "Unique Services"
        },
        {
            icon: Rocket,
            label: "Innovation Focus"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="talent-share" className={cn(
            "py-20 transition-colors duration-500",
            isLight 
                ? "bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]" 
                : "bg-[#030303]"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Talent-Share Project
                        </motion.h2>
                        
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 leading-relaxed mb-8"
                        >
                            One of the project is <strong>www.talent-share.com</strong> which has a novel concept and provides unique services to clients. This project showcases our ability to create innovative solutions that address real-world business needs.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            {projectFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full"
                                >
                                    <feature.icon className="w-4 h-4 text-[#00B483]" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {feature.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            className="bg-gradient-to-r from-[#00B483] to-[#00B843] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More About Talent-Share
                        </motion.button>
                    </motion.div>

                    {/* Right Side - Browser Mockup */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            {/* Browser Window */}
                            <div className="w-96 bg-white rounded-lg shadow-2xl overflow-hidden">
                                {/* Browser Header */}
                                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
                                        talent-share.com
                                    </div>
                                </div>
                                
                                {/* Browser Content */}
                                <div className="p-8 bg-gradient-to-br from-[#00B483]/10 to-[#00B843]/10">
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Talent-Share Platform
                                        </h3>
                                        <p className="text-gray-600">
                                            Connecting talent with opportunities
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-[#00B483] rounded-full"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00B843] rounded-full"
                                animate={{
                                    y: [0, 10, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
