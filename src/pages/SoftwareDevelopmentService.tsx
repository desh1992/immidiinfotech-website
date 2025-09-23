"use client";

import { motion } from "framer-motion";
import { 
    Code, 
    CheckCircle, 
    ArrowLeft,
    Monitor,
    Smartphone,
    Laptop,
    Globe,
    Shield
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function SoftwareDevelopmentService() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            title: "Custom Application Development",
            description: "Tailored application development and seamless deployment across multiple platforms",
            icon: Monitor,
            features: ["Web Applications", "Mobile Apps", "Desktop Solutions", "Cross-Platform Development"]
        },
        {
            title: "Complete SDLC Implementation",
            description: "Full software development lifecycle implementation with industry best practices",
            icon: Code,
            features: ["Requirements Analysis", "System Design", "Development & Testing", "Deployment & Maintenance"]
        },
        {
            title: "Technical Support Services",
            description: "Comprehensive technical support and maintenance after implementation",
            icon: Shield,
            features: ["24/7 Support", "Bug Fixes & Updates", "Performance Optimization", "User Training"]
        },
        {
            title: "Rapid Application Development",
            description: "Fast-track development and deployment using cutting-edge technologies",
            icon: Globe,
            features: ["React/Angular/Vue.js", "Node.js/.NET/Java", "Python/Django/Flask", "Cloud-Native Solutions"]
        },
        {
            title: "Quality Assurance",
            description: "Rigorous testing and quality benchmarks to exceed client expectations",
            icon: Smartphone,
            features: ["Automated Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <div className={cn(
            "min-h-screen transition-colors duration-500",
            isLight 
                ? "bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]" 
                : "bg-[#030303]"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link 
                        to="/"
                        className={cn(
                            "inline-flex items-center text-sm font-medium transition-colors duration-300 hover:scale-105",
                            isLight ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"
                        )}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className={cn(
                            "inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8",
                            "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg"
                        )}
                    >
                        <Code className="w-10 h-10" />
                    </motion.div>
                    
                    <motion.h1
                        variants={itemVariants}
                        className={cn(
                            "text-5xl md:text-6xl lg:text-7xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}
                    >
                        Software Development & Support
                    </motion.h1>
                    
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-xl font-semibold mb-6",
                            "bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
                        )}
                    >
                        Custom Solutions That Exceed Expectations
                    </motion.p>
                    
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-lg max-w-4xl mx-auto leading-relaxed",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}
                    >
                        End-to-end software development services with strict adherence to benchmarks and commitment to exceeding client expectations. We deliver innovative, scalable, and robust software solutions that drive business growth.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={cn(
                                "rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group",
                                isLight 
                                    ? "bg-white border border-gray-200 hover:border-gray-300" 
                                    : "bg-gray-800 border border-gray-700 hover:border-gray-600"
                            )}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            
                            <h3 className={cn(
                                "text-xl font-bold mb-4",
                                isLight ? "text-gray-900" : "text-white"
                            )}>
                                {service.title}
                            </h3>
                            
                            <p className={cn(
                                "text-sm mb-6 leading-relaxed",
                                isLight ? "text-gray-600" : "text-gray-400"
                            )}>
                                {service.description}
                            </p>
                            
                            <div className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-500" />
                                        <span className={cn(
                                            "text-sm",
                                            isLight ? "text-gray-700" : "text-gray-300"
                                        )}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className={cn(
                            "rounded-3xl p-12 transition-colors duration-500",
                            isLight 
                                ? "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200" 
                                : "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Build Your Next Software Solution?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our software development and support services can help you 
                            create innovative solutions that exceed your expectations.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Code className="w-5 h-5 mr-2" />
                            Start Development Project
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
