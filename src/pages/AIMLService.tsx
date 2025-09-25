"use client";

import { motion } from "framer-motion";
import { 
    Brain, 
    CheckCircle, 
    ArrowLeft,
    Cpu,
    Eye,
    MessageSquare,
    Target,
    Zap
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import CurvedLoop from "@/components/ui/curved-loop";

export function AIMLService() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            title: "Machine Learning Solutions",
            description: "Custom ML models for predictive analytics, recommendation systems, and automated decision making",
            icon: Cpu,
            features: ["Deep Learning Networks", "Neural Network Architecture", "Model Training & Optimization", "Real-time Inference"]
        },
        {
            title: "Natural Language Processing",
            description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding",
            icon: MessageSquare,
            features: ["Text Analytics", "Chatbots & Virtual Assistants", "Language Translation", "Document Intelligence"]
        },
        {
            title: "Computer Vision",
            description: "Intelligent image and video processing for object detection, facial recognition, and visual analytics",
            icon: Eye,
            features: ["Object Detection & Recognition", "Image Classification", "Video Analytics", "OCR & Document Processing"]
        },
        {
            title: "AI Strategy & Consulting",
            description: "Strategic AI implementation roadmaps and consulting for digital transformation",
            icon: Target,
            features: ["AI Readiness Assessment", "Strategy Development", "Ethics & Governance", "ROI Optimization"]
        },
        {
            title: "MLOps & AI Infrastructure",
            description: "Complete ML pipeline development, deployment, and monitoring solutions",
            icon: Zap,
            features: ["ML Pipeline Automation", "Model Deployment", "Performance Monitoring", "Continuous Integration"]
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
                            src="/ai-ml.jpg"
                            alt="AI & Machine Learning Services"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
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
                                    AI & Machine Learning Services
                                </motion.h1>
                                
                                <motion.p
                                    variants={itemVariants}
                                    className="text-xl font-semibold mb-6 text-white/90"
                                >
                                    Leading the Industry in AI Innovation
                                </motion.p>
                                
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg max-w-5xl mx-auto leading-relaxed text-white/80"
                                >
                                    We are the best in the industry to provide cutting-edge AI and ML services. Our expertise spans across deep learning, natural language processing, computer vision, and predictive analytics. Transform your business with intelligent solutions that drive innovation and competitive advantage.
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
                                    Comprehensive AI and ML solutions designed to transform your business with cutting-edge technology and expert implementation. We deliver custom machine learning models, advanced analytics, and strategic consulting to drive innovation and competitive advantage. Our team of experienced data scientists and AI engineers work closely with your organization to identify opportunities, develop tailored solutions, and implement scalable AI systems that deliver measurable results. From predictive analytics and natural language processing to computer vision and automated decision-making, we provide end-to-end AI services that help you stay ahead of the competition and unlock new possibilities for growth and efficiency.
                                </p>
                            </div>
                            
                            {/* Right side - First bento card */}
                            <div className="lg:col-span-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6 flex justify-between flex-col h-full"
                                >
                                    <Cpu className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning Solutions</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Custom ML models for predictive analytics, recommendation systems, and automated decision making.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Deep Learning Networks</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Neural Networks</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Model Training</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className="text-xs text-gray-600">Real-time Inference</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Computer Vision - Small Card (Top Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Eye className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Vision</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Intelligent image and video processing for object detection, facial recognition, and visual analytics.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Object Detection</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Image Classification</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Video Analytics</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">OCR & Document Processing</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Natural Language Processing - Large Card (Top Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <MessageSquare className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Language Processing</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Advanced NLP solutions for text analysis, sentiment analysis, and language understanding. Our expertise includes chatbots, virtual assistants, language translation, and document intelligence.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Text Analytics</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Chatbots & Virtual Assistants</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Language Translation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Document Intelligence</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* AI Strategy & Consulting - Large Card (Bottom Left) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                            >
                                <Target className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Strategy & Consulting</h3>
                                    <p className="text-gray-600 max-w-md text-base mb-6">
                                        Strategic AI implementation roadmaps and consulting for digital transformation. We provide AI readiness assessment, strategy development, ethics & governance, and ROI optimization.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">AI Readiness Assessment</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Strategy Development</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">Ethics & Governance</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">ROI Optimization</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* MLOps & AI Infrastructure - Small Card (Bottom Right) */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                            >
                                <Zap className="w-8 h-8 stroke-1 text-[#00B483]" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">MLOps & AI Infrastructure</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Complete ML pipeline development, deployment, and monitoring solutions.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">ML Pipeline Development</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Model Deployment</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Performance Monitoring</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-gray-600">Infrastructure Scaling</span>
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
                            marqueeText="AI ✦ Machine Learning ✦ Innovation ✦ Excellence ✦"
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
                                ? "bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200" 
                                : "bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-700/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Implement AI Solutions?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our AI and Machine Learning services can transform your business 
                            and drive innovation in your industry.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Brain className="w-5 h-5 mr-2" />
                            Get AI Consultation
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
