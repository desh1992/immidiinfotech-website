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
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import CurvedLoop from "@/components/ui/curved-loop";

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
            "min-h-screen transition-colors duration-500 overflow-x-hidden",
            isLight 
                ? "bg-white" 
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
                            src="/pm.jpg"
                            alt="Program & Project Management Services"
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
                                    Program & Project Management
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg md:text-xl text-white/90 mb-6"
                                >
                                    Strategic Excellence in Execution
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
                                >
                                    Comprehensive program management services ensuring successful project delivery with proven methodologies and frameworks. We help organizations achieve their strategic objectives through effective planning, execution, and continuous improvement.
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
                                    Comprehensive program management services ensuring successful project delivery with proven methodologies and frameworks. We help organizations achieve their strategic objectives through effective planning, execution, and continuous improvement. Our team of certified project management professionals works closely with your organization to implement best practices, optimize processes, and deliver projects on time and within budget. From strategic planning and resource allocation to risk management and stakeholder engagement, we provide end-to-end program management solutions that drive success and enable sustainable growth.
                                </p>
                            </div>
                            
                            {/* Right side - First bento card */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 flex justify-between flex-col h-full"
                                >
                                    <Calendar className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Program Planning and Execution</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Strategic program planning with comprehensive execution frameworks for successful delivery.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Strategic Planning</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Resource Allocation</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Timeline Management</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Risk Assessment</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Framework Implementation - Small Card (Top Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <FileText className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Framework Implementation</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Implementing proven frameworks and approaches to develop effective strategies.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Agile/Scrum Implementation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">PMBOK Standards</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">PRINCE2 Methodology</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Custom Framework Development</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Process Development - Large Card (Top Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Users className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Development</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Develop and enforce project management practices and standardized processes. We create comprehensive process documentation, establish quality standards, ensure compliance management, and implement best practices across your organization.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Process Documentation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Quality Standards</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Compliance Management</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Best Practices Implementation</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Monitoring - Large Card (Bottom Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <TrendingUp className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Monitoring</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Review, monitor, and manage projects with comprehensive resource management. We provide real-time progress tracking, performance metrics analysis, resource optimization, and effective stakeholder management to ensure project success.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Progress Tracking</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Performance Metrics</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Resource Optimization</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Stakeholder Management</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Continuous Improvement - Small Card (Bottom Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Award className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Ongoing enhancement of practices and processes for optimal performance.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Process Optimization</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Lessons Learned</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Knowledge Management</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Innovation Integration</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Technology Chips - Horizontal Scroll */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
                        <p className="text-gray-600">Professional project management tools and methodologies</p>
                    </div>
                    
                    <div className="w-full">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[
                                "Project Management",
                                "PMP",
                                "Agile",
                                "Scrum",
                                "Kanban",
                                "JIRA",
                                "Confluence",
                                "Microsoft Project",
                                "Program Excellence",
                                "Strategic Planning",
                                "Trello",
                                "Asana",
                                "Monday.com",
                                "Smartsheet",
                                "Azure DevOps",
                                "GitLab",
                                "Slack",
                                "Teams",
                                "Zoom",
                                "Miro"
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white border-2 border-[#00B483] text-[#00B483] px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#00B483] hover:text-white transition-all duration-300 cursor-pointer mx-4 flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[
                                "Project Management",
                                "PMP",
                                "Agile",
                                "Scrum",
                                "Kanban",
                                "JIRA",
                                "Confluence",
                                "Microsoft Project",
                                "Program Excellence",
                                "Strategic Planning",
                                "Trello",
                                "Asana",
                                "Monday.com",
                                "Smartsheet",
                                "Azure DevOps",
                                "GitLab",
                                "Slack",
                                "Teams",
                                "Zoom",
                                "Miro"
                            ].map((tech, index) => (
                                <motion.div
                                    key={`duplicate-${index}`}
                                    variants={itemVariants}
                                    className="bg-white border-2 border-[#00B483] text-[#00B483] px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#00B483] hover:text-white transition-all duration-300 cursor-pointer mx-4 flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
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
                                window.location.href = '/#contact';
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
