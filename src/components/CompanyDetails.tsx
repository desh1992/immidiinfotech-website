"use client";

import { motion } from "framer-motion";
import { Building, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function CompanyDetails() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const statCards = [
        {
            icon: Building,
            title: "Fortune 500",
            description: "We provide technology solutions to startups and fortune 500 companies"
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Range of professionals from project management, architecture, and development"
        },
        {
            icon: TrendingUp,
            title: "Quality Focus",
            description: "Customer centric, service oriented approach in providing services"
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
        <section id="company" className={cn(
            "py-20 transition-colors duration-500",
            isLight 
                ? "bg-white" 
                : "bg-[#030303]"
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
                        About Our Company
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Company Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 leading-relaxed"
                        >
                            Immidi Infotech is founded by professionals who are actively part of IT industry to provide technology solutions with a mission to provide high quality IT enabled Services like software development, support, and Technology training and placement services.
                        </motion.p>
                        
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 leading-relaxed"
                        >
                            We provide technology solutions and IT staffing services to startups and fortune 500 companies. Our team consists of range of professionals from project management, architecture, and development to support to satisfy all kinds of technology needs.
                        </motion.p>
                        
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 leading-relaxed"
                        >
                            We are actively into software development, working on B2B and B2C based portals including{" "}
                            <a 
                                href="https://www.talent-share.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#00B483] hover:text-[#00B843] font-semibold underline transition-colors duration-200"
                            >
                                www.talent-share.com
                            </a>{" "}
                            which provides unique services to clients.
                        </motion.p>
                        
                        <motion.div
                            variants={itemVariants}
                            className="pt-4"
                        >
                            <Link
                                to="/company-details"
                                className="inline-flex items-center space-x-2 text-[#00B483] hover:text-[#00B843] font-semibold transition-colors duration-200 group text-lg"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Company Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        {statCards.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <card.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
