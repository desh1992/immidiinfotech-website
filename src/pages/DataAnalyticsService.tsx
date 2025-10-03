"use client";

import { motion } from "framer-motion";
import { 
    BarChart3, 
    CheckCircle, 
    ArrowLeft,
    Database,
    Zap,
    GitBranch,
    TrendingUp,
    Eye
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import CurvedLoop from "@/components/ui/curved-loop";

export function DataAnalyticsService() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            title: "Data Warehouse & Data Lakes",
            description: "Enterprise-grade data warehouse and data lakes implementation for scalable analytics",
            icon: Database,
            features: ["Data Modeling", "ETL Processes", "Data Lake Architecture", "Scalable Storage Solutions"]
        },
        {
            title: "Real-time Data Processing",
            description: "Data analytics, conversion, and processing for mission-critical applications",
            icon: Zap,
            features: ["Stream Processing", "Real-time Analytics", "Event-Driven Architecture", "Low-Latency Solutions"]
        },
        {
            title: "Data Integration & Migration",
            description: "Seamless data integration and transformation between legacy, cloud, and on-premise systems",
            icon: GitBranch,
            features: ["Legacy System Integration", "Cloud Data Migration", "API Development", "Data Synchronization"]
        },
        {
            title: "Custom Analytics Solutions",
            description: "Design and develop custom, tailored on-demand data management solutions",
            icon: TrendingUp,
            features: ["Business Intelligence Dashboards", "Predictive Analytics", "Custom Reporting", "Data Visualization"]
        },
        {
            title: "Data Architecture & Strategy",
            description: "Comprehensive data architecture design and strategic migration planning",
            icon: Eye,
            features: ["Data Strategy", "Architecture Design", "Governance Framework", "Compliance Management"]
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
                            src="/da.jpg"
                            alt="Data Analytics & Business Intelligence Services"
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
                                    Data Analytics & Business Intelligence
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg md:text-xl text-white/90 mb-6"
                                >
                                    Transform Data into Strategic Insights
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
                                >
                                    Enterprise-grade data solutions including data warehouses, real-time processing, and custom analytics platforms. We help organizations unlock the power of their data to drive informed decision-making and business growth.
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
                                    Enterprise-grade data solutions including data warehouses, real-time processing, and custom analytics platforms. We help organizations unlock the power of their data to drive informed decision-making and business growth. Our team of experienced data scientists and analytics experts work closely with your organization to design, implement, and optimize comprehensive data solutions. From data warehouse architecture and real-time processing to advanced analytics and business intelligence, we provide end-to-end data services that transform raw information into actionable insights and strategic advantages.
                                </p>
                            </div>
                            
                            {/* Right side - First bento card */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 flex justify-between flex-col h-full"
                                >
                                    <Database className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Data Warehouse & Data Lakes</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Enterprise-grade data warehouse and data lakes implementation for scalable analytics.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Data Modeling</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">ETL Processes</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Data Lake Architecture</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Scalable Storage Solutions</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Real-time Data Processing - Small Card (Top Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Zap className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Data Processing</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        High-performance streaming analytics and real-time data processing solutions.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Stream Processing</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Event-driven Architecture</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Real-time Analytics</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Data Pipeline Optimization</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Advanced Analytics & Machine Learning - Large Card (Top Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <GitBranch className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics & Machine Learning</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Sophisticated analytics and machine learning solutions to extract insights from complex data. We implement predictive models, statistical analysis, and AI-driven approaches to help organizations make data-driven decisions and uncover hidden patterns in their data.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Predictive Modeling</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Statistical Analysis</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Machine Learning Models</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">AI-driven Insights</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Business Intelligence & Reporting - Large Card (Bottom Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <TrendingUp className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Intelligence & Reporting</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Comprehensive business intelligence solutions with interactive dashboards and automated reporting. We create intuitive visualizations and self-service analytics platforms that enable stakeholders to explore data and make informed decisions quickly.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Interactive Dashboards</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Automated Reporting</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Data Visualization</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Self-service Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Data Visualization - Small Card (Bottom Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Eye className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Data Visualization</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Interactive charts, graphs, and visual representations of complex data.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Interactive Charts</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Custom Dashboards</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Geospatial Analysis</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Real-time Visualizations</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Technology Chips */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
                        <p className="text-gray-600">Advanced analytics tools for data-driven insights</p>
                    </div>
                    
                    <div className="w-full">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[
                                "Data Analytics",
                                "Power BI",
                                "Tableau",
                                "SQL",
                                "Python",
                                "R",
                                "Excel",
                                "Business Intelligence",
                                "Data Visualization",
                                "Machine Learning",
                                "Apache Spark",
                                "Hadoop",
                                "Apache Kafka",
                                "Elasticsearch",
                                "Looker",
                                "QlikView",
                                "SAS",
                                "SPSS",
                                "Jupyter",
                                "R Studio"
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
                                "Data Analytics",
                                "Power BI",
                                "Tableau",
                                "SQL",
                                "Python",
                                "R",
                                "Excel",
                                "Business Intelligence",
                                "Data Visualization",
                                "Machine Learning",
                                "Apache Spark",
                                "Hadoop",
                                "Apache Kafka",
                                "Elasticsearch",
                                "Looker",
                                "QlikView",
                                "SAS",
                                "SPSS",
                                "Jupyter",
                                "R Studio"
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
                                ? "bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200" 
                                : "bg-gradient-to-br from-teal-900/20 to-blue-900/20 border border-teal-700/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Unlock Your Data's Potential?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our data analytics and business intelligence services can help you 
                            transform your data into strategic insights and competitive advantages.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                window.location.href = '/#contact';
                            }}
                        >
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Start Data Analytics Project
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
