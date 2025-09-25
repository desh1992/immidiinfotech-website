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
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import CurvedLoop from "@/components/ui/curved-loop";

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
                            src="/coe.jpg"
                            alt="Center of Excellence Services"
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
                                    Center of Excellence
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg md:text-xl text-white/90 mb-6"
                                >
                                    Innovation Through Proven Methodologies
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
                                >
                                    Incorporating proven methodologies and procedures to provide excellent service with continuous innovation and quality assurance. We establish centers of excellence that drive organizational transformation and operational excellence.
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
                                    Incorporating proven methodologies and procedures to provide excellent service with continuous innovation and quality assurance. We establish centers of excellence that drive organizational transformation and operational excellence. Our team of experienced professionals works closely with your organization to implement best practices, streamline processes, and create sustainable frameworks for long-term success. From proven methodologies and agile integration to continuous improvement and innovation management, we provide comprehensive center of excellence services that ensure your organization achieves operational excellence and drives innovation.
                                </p>
                            </div>
                            
                            {/* Right side - First bento card */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 flex justify-between flex-col h-full"
                                >
                                    <BookOpen className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Methodologies</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Incorporate proven methodologies and procedures to provide excellent service delivery.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Industry Best Practices</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Standardized Processes</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Quality Frameworks</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Service Excellence</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Agile & ITIL Integration - Small Card (Top Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Target className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Agile & ITIL Integration</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Combine agile methodologies with ITIL best practices for optimal service delivery.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Agile Frameworks</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">ITIL Processes</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Service Management</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Process Integration</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Continuous Improvement - Large Card (Top Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Zap className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Implement continuous improvement methodologies to enhance service quality and operational efficiency. We establish frameworks for ongoing optimization, performance monitoring, and iterative enhancement that drive sustainable growth and excellence across all organizational functions.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Performance Monitoring</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Process Optimization</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Quality Enhancement</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Iterative Enhancement</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Innovation Management - Large Card (Bottom Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Lightbulb className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Management</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Foster innovation culture and manage innovation processes to drive organizational transformation. We create environments that encourage creative thinking, implement innovation frameworks, and establish processes for idea generation, evaluation, and implementation that lead to breakthrough solutions and competitive advantage.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Innovation Frameworks</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Idea Management</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Creative Thinking</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Transformation</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Team Development - Small Card (Bottom Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Users className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Team Development</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Develop high-performing teams through training and skill enhancement programs.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Skill Enhancement</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Training Programs</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Team Building</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Performance Development</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Curved Loop Animation - Full Width */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 mb-52"
                    style={{ 
                        width: '100vw', 
                        marginLeft: 'calc(-50vw + 50%)',
                        maxWidth: '100vw'
                    }}
                >
                    <div className="relative w-full h-32">
                        <CurvedLoop 
                            marqueeText="Center of Excellence ✦ Innovation ✦ Best Practices ✦ Success ✦"
                            speed={1.5}
                            curveAmount={250}
                            direction="left"
                            interactive={true}
                            className={cn(
                                "font-bold",
                                isLight 
                                    ? "text-gray-800" 
                                    : "text-white"
                            )}
                        />
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
