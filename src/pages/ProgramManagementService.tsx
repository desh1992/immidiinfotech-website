"use client";

import { motion } from "framer-motion";
import { 
    Target, 
    CheckCircle, 
    ArrowLeft,
    Calendar,
    Users,
    FileText,
    TrendingUp,
    Award
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function ProgramManagementService() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            title: "Program Planning and Execution",
            description: "Strategic program planning with comprehensive execution frameworks for successful delivery",
            icon: Calendar,
            features: ["Strategic Planning", "Resource Allocation", "Timeline Management", "Risk Assessment"]
        },
        {
            title: "Framework Implementation",
            description: "Implementing proven frameworks and approaches to develop effective strategies",
            icon: FileText,
            features: ["Agile/Scrum Implementation", "PMBOK Standards", "PRINCE2 Methodology", "Custom Framework Development"]
        },
        {
            title: "Process Development",
            description: "Develop and enforce project management practices and standardized processes",
            icon: Users,
            features: ["Process Documentation", "Quality Standards", "Compliance Management", "Best Practices Implementation"]
        },
        {
            title: "Project Monitoring",
            description: "Review, monitor, and manage projects with comprehensive resource management",
            icon: TrendingUp,
            features: ["Progress Tracking", "Performance Metrics", "Resource Optimization", "Stakeholder Management"]
        },
        {
            title: "Continuous Improvement",
            description: "Ongoing enhancement of practices and processes for optimal performance",
            icon: Award,
            features: ["Process Optimization", "Lessons Learned", "Knowledge Management", "Innovation Integration"]
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
                            "bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg"
                        )}
                    >
                        <Target className="w-10 h-10" />
                    </motion.div>
                    
                    <motion.h1
                        variants={itemVariants}
                        className={cn(
                            "text-5xl md:text-6xl lg:text-7xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}
                    >
                        Program & Project Management
                    </motion.h1>
                    
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-xl font-semibold mb-6",
                            "bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent"
                        )}
                    >
                        Strategic Excellence in Execution
                    </motion.p>
                    
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-lg max-w-4xl mx-auto leading-relaxed",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}
                    >
                        Comprehensive program management services ensuring successful project delivery with proven methodologies and frameworks. We help organizations achieve their strategic objectives through effective planning, execution, and continuous improvement.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className={cn(
                            "rounded-3xl p-12 transition-colors duration-500",
                            isLight 
                                ? "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200" 
                                : "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-700/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Optimize Your Project Management?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our program and project management services can help you achieve 
                            strategic excellence and deliver successful outcomes.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Target className="w-5 h-5 mr-2" />
                            Get Project Consultation
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
