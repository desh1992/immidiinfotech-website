"use client";

import { motion } from "framer-motion";
import { 
    Award, 
    CheckCircle, 
    ArrowLeft,
    BookOpen,
    Users,
    Target,
    Zap,
    Lightbulb
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function CenterExcellenceService() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            title: "Proven Methodologies",
            description: "Incorporate proven methodologies and procedures to provide excellent service delivery",
            icon: BookOpen,
            features: ["Industry Best Practices", "Standardized Processes", "Quality Frameworks", "Service Excellence"]
        },
        {
            title: "Agile & ITIL Integration",
            description: "Embed ITIL, Agile, Scrum, Kanban into projects for effective operations and management",
            icon: Users,
            features: ["ITIL Implementation", "Agile Transformation", "Scrum Mastery", "Kanban Optimization"]
        },
        {
            title: "Knowledge Management",
            description: "In-house knowledge management systems to support teams and drive innovation",
            icon: Lightbulb,
            features: ["Knowledge Base", "Documentation Systems", "Training Programs", "Best Practice Sharing"]
        },
        {
            title: "Quality Assurance Excellence",
            description: "Quality assurance at best in all levels of project management and execution",
            icon: Target,
            features: ["Quality Standards", "Process Audits", "Performance Metrics", "Continuous Monitoring"]
        },
        {
            title: "On-Demand Solutions",
            description: "On-demand solutions and resource provision for various project requirements",
            icon: Zap,
            features: ["Flexible Staffing", "Rapid Response", "Scalable Solutions", "Expert Consultation"]
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
                            "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
                        )}
                    >
                        <Award className="w-10 h-10" />
                    </motion.div>
                    
                    <motion.h1
                        variants={itemVariants}
                        className={cn(
                            "text-5xl md:text-6xl lg:text-7xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}
                    >
                        Center of Excellence
                    </motion.h1>
                    
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-xl font-semibold mb-6",
                            "bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
                        )}
                    >
                        Innovation Through Proven Methodologies
                    </motion.p>
                    
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-lg max-w-4xl mx-auto leading-relaxed",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}
                    >
                        Incorporating proven methodologies and procedures to provide excellent service with continuous innovation and quality assurance. We establish centers of excellence that drive organizational transformation and operational excellence.
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
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                                ? "bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200" 
                                : "bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-700/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Establish Your Center of Excellence?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our Center of Excellence services can help you implement 
                            proven methodologies and drive innovation across your organization.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Award className="w-5 h-5 mr-2" />
                            Start Excellence Program
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
