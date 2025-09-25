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
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

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
            "min-h-screen transition-colors duration-500 overflow-x-hidden",
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

                {/* Header with Banner Image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative mb-20 overflow-hidden"
                    style={{ 
                        width: '100vw', 
                        marginLeft: 'calc(-50vw + 50%)',
                        maxWidth: '100vw'
                    }}
                >
                    {/* Background Image */}
                    <div className="relative h-[300px] md:h-[350px] lg:h-[400px]">
                        <img
                            src="/sd.jpg"
                            alt="Software Development & Support Services"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Dark Overlay for Better Text Readability */}
                        <div className="absolute inset-0 bg-black/30"></div>
                        
                        {/* Progressive Blur Overlay */}
                        <ProgressiveBlur
                            direction="bottom"
                            blurLayers={6}
                            blurIntensity={2}
                            className="absolute inset-0"
                        />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center px-8 max-w-6xl">
                                <motion.h1
                                    variants={itemVariants}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                                >
                                    Software Development & Support
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg md:text-xl text-white/90 mb-6"
                                >
                                    Custom Solutions That Exceed Expectations
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
                                >
                                    End-to-end software development services with strict adherence to benchmarks and commitment to exceeding client expectations. We deliver innovative, scalable, and robust software solutions that drive business growth.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Services Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-20"
                >
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            {/* Left side - Text content */}
                            <div className="lg:col-span-2">
                                <p className="text-lg max-w-xl leading-relaxed tracking-tight text-gray-600 text-left">
                                    End-to-end software development services with strict adherence to benchmarks and commitment to exceeding client expectations. We deliver innovative, scalable, and robust software solutions that drive business growth. Our team of experienced developers and engineers work closely with your organization to understand requirements, design optimal solutions, and implement cutting-edge technologies. From custom application development and complete SDLC implementation to quality assurance and testing, we provide comprehensive software development services that ensure your projects are delivered on time, within budget, and exceed your expectations.
                                </p>
                            </div>
                            
                            {/* Right side - First bento card */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 flex justify-between flex-col h-full"
                                >
                                    <Monitor className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Application Development</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Tailored application development and seamless deployment across multiple platforms.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Web Applications</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Mobile Apps</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Desktop Solutions</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Cross-Platform Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Complete SDLC Implementation - Small Card (Top Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Laptop className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Complete SDLC Implementation</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Comprehensive software development lifecycle management from planning to deployment.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Requirements Analysis</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">System Design</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Implementation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Deployment & Maintenance</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Modern Technology Stack - Large Card (Top Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Globe className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Technology Stack</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Leveraging cutting-edge technologies and frameworks to build scalable, secure, and high-performance applications. We stay current with the latest trends and best practices to deliver solutions that meet modern standards.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Frontend Technologies</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Backend Frameworks</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Database Solutions</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Cloud Integration</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Quality Assurance & Testing - Large Card (Bottom Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Shield className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance & Testing</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Comprehensive testing strategies to ensure software quality, reliability, and performance. We implement rigorous testing protocols throughout the development process to deliver bug-free, high-quality software solutions.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Automated Testing</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Performance Testing</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Security Testing</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">User Acceptance Testing</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mobile Development - Small Card (Bottom Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Smartphone className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Development</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Native and cross-platform mobile applications for iOS and Android platforms.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">iOS Development</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Android Development</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Cross-Platform Apps</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">App Store Deployment</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
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
