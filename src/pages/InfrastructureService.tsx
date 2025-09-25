"use client";

import { motion } from "framer-motion";
import { 
    Cloud, 
    CheckCircle, 
    ArrowLeft,
    Server,
    Shield,
    GitBranch,
    Database,
    Settings
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export function InfrastructureService() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            title: "Cloud Migration & Transformation",
            description: "Infrastructure migration to cloud with complete application transformation",
            icon: Cloud,
            features: ["AWS/Azure/GCP Migration", "Application Modernization", "Hybrid Cloud Solutions", "Cost Optimization"]
        },
        {
            title: "Application Lifecycle Management",
            description: "Complete application lifecycle implementation and engineering excellence",
            icon: Server,
            features: ["Lifecycle Planning", "Version Control", "Release Management", "Environment Management"]
        },
        {
            title: "Security & Compliance",
            description: "Application security and cyber security implementation with compliance management",
            icon: Shield,
            features: ["Security Audits", "Compliance Frameworks", "Vulnerability Assessment", "Security Monitoring"]
        },
        {
            title: "Containerization & DevOps",
            description: "Application containerization, CI/CD implementation, and DevOps practices",
            icon: GitBranch,
            features: ["Docker/Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"]
        },
        {
            title: "Enterprise Architecture",
            description: "Robust engineering and architecture for security, infrastructure, and applications",
            icon: Settings,
            features: ["System Architecture", "Security Architecture", "Performance Engineering", "Scalability Design"]
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
                            src="/infra.jpg"
                            alt="Infrastructure Transformation & Management Services"
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
                                    Infrastructure Transformation & Management
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg md:text-xl text-white/90 mb-6"
                                >
                                    Enterprise-Grade Systems & Security
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
                                >
                                    Comprehensive infrastructure transformation with focus on cloud migration, security implementation, and enterprise-grade standards. We help organizations modernize their infrastructure for scalability, security, and performance.
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
                                    Comprehensive infrastructure transformation with focus on cloud migration, security implementation, and enterprise-grade standards. We help organizations modernize their infrastructure for scalability, security, and performance. Our team of experienced infrastructure architects and engineers work closely with your organization to design, implement, and manage robust IT infrastructure solutions. From cloud migration and application lifecycle management to security implementation and enterprise architecture, we provide end-to-end infrastructure services that ensure your systems are secure, scalable, and optimized for business success.
                                </p>
                            </div>
                            
                            {/* Right side - First bento card */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 flex justify-between flex-col h-full"
                                >
                                    <Cloud className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Migration & Transformation</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Infrastructure migration to cloud with complete application transformation.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">AWS/Azure/GCP Migration</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Application Modernization</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Hybrid Cloud Solutions</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Cost Optimization</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Application Lifecycle Management - Small Card (Top Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <GitBranch className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Application Lifecycle Management</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Complete application lifecycle management from development to deployment.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">DevOps Implementation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">CI/CD Pipelines</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Version Control</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Automated Deployment</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Security Implementation - Large Card (Top Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Shield className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Implementation</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Comprehensive security solutions to protect your infrastructure and data. We implement multi-layered security measures including network security, access controls, encryption, and compliance frameworks to ensure your systems meet enterprise security standards.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Network Security</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Access Controls</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Encryption</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Compliance Frameworks</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enterprise Architecture - Large Card (Bottom Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Server className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Architecture</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Strategic enterprise architecture design and implementation to align IT infrastructure with business objectives. We create scalable, maintainable, and future-proof architecture solutions that support organizational growth and digital transformation initiatives.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Architecture Design</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Technology Roadmaps</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Integration Solutions</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Digital Transformation</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Database Management - Small Card (Bottom Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Database className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Database Management</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Comprehensive database administration and optimization services.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Database Administration</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Performance Optimization</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Backup & Recovery</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Data Migration</span>
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
                                ? "bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200" 
                                : "bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-700/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Transform Your Infrastructure?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our infrastructure transformation and management services can help you 
                            modernize your systems for enterprise-grade performance and security.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Cloud className="w-5 h-5 mr-2" />
                            Start Infrastructure Transformation
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
