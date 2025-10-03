"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Careers() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const openPositions = [
        "Unix/Linux Administrator",
        "Weblogic Portal Administrator", 
        "Senior Java Developer",
        "Weblogic SOA Architect",
        "Senior Solaris Administrator",
        "Software Developer",
        "Database Administrator"
    ];

    const benefits = [
        "Competitive Salary Packages",
        "Professional Development Opportunities",
        "Flexible Work Environment",
        "Health & Wellness Benefits",
        "Career Growth Path",
        "Innovative Technology Projects"
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
        <section id="careers" className={cn(
            "py-20 transition-colors duration-500",
            isLight 
                ? "bg-gray-50" 
                : "bg-[#0a0a0a]"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Join Our Team
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Explore exciting career opportunities and be part of our innovative technology solutions team
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Open Positions */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Currently We Have The Following Positions Open:
                            </h3>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="space-y-4">
                            {openPositions.map((position, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="w-8 h-8 bg-[#00B483] rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">{position}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* Benefits & CTA */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Work With Us?
                            </h3>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center space-x-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#00B483] flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-6">
                            <Link
                                to="/careers"
                                className="inline-flex items-center space-x-3 bg-[#00B483] text-white hover:bg-[#00B843] px-8 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl group"
                            >
                                <Briefcase className="w-5 h-5" />
                                <span>Apply Now</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
