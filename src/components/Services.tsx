"use client";

import { motion } from "framer-motion";
import { 
    MessageCircle, 
    Code, 
    Users, 
    Settings, 
    Shield, 
    Database, 
    Brain, 
    Cloud, 
    Target, 
    Zap,
    CheckCircle,
    TrendingUp,
    Cpu,
    Eye,
    BarChart3,
    Layers,
    GitBranch,
    Lock,
    Server,
    Workflow,
    LineChart,
    Award,
    Lightbulb,
    Cog
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function Services() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    // Service categories with detailed information
    const serviceCategories = [
        {
            id: "ai-ml",
            title: "AI & Machine Learning Services",
            subtitle: "Leading the Industry in AI Innovation",
            description: "We are the best in the industry to provide cutting-edge AI and ML services. Our expertise spans across deep learning, natural language processing, computer vision, and predictive analytics.",
            icon: Brain,
            gradient: "from-purple-500 to-indigo-600",
            bgGradient: isLight ? "from-purple-50 to-indigo-50" : "from-purple-900/10 to-indigo-900/10",
            services: [
                {
                    title: "Machine Learning Solutions",
                    description: "Custom ML models for predictive analytics, recommendation systems, and automated decision making",
                    features: ["Deep Learning Networks", "Neural Network Architecture", "Model Training & Optimization", "Real-time Inference"]
                },
                {
                    title: "Natural Language Processing",
                    description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding",
                    features: ["Text Analytics", "Chatbots & Virtual Assistants", "Language Translation", "Document Intelligence"]
                },
                {
                    title: "Computer Vision",
                    description: "Intelligent image and video processing for object detection, facial recognition, and visual analytics",
                    features: ["Object Detection & Recognition", "Image Classification", "Video Analytics", "OCR & Document Processing"]
                },
                {
                    title: "AI Strategy & Consulting",
                    description: "Strategic AI implementation roadmaps and consulting for digital transformation",
                    features: ["AI Readiness Assessment", "Strategy Development", "Ethics & Governance", "ROI Optimization"]
                },
                {
                    title: "MLOps & AI Infrastructure",
                    description: "Complete ML pipeline development, deployment, and monitoring solutions",
                    features: ["ML Pipeline Automation", "Model Deployment", "Performance Monitoring", "Continuous Integration"]
                }
            ]
        },
        {
            id: "program-management",
            title: "Program & Project Management",
            subtitle: "Strategic Excellence in Execution",
            description: "Comprehensive program management services ensuring successful project delivery with proven methodologies and frameworks.",
            icon: Target,
            gradient: "from-blue-500 to-cyan-600",
            bgGradient: isLight ? "from-blue-50 to-cyan-50" : "from-blue-900/10 to-cyan-900/10",
            services: [
                {
                    title: "Program Planning and Execution",
                    description: "Strategic program planning with comprehensive execution frameworks for successful delivery",
                    features: ["Strategic Planning", "Resource Allocation", "Timeline Management", "Risk Assessment"]
                },
                {
                    title: "Framework Implementation",
                    description: "Implementing proven frameworks and approaches to develop effective strategies",
                    features: ["Agile/Scrum Implementation", "PMBOK Standards", "PRINCE2 Methodology", "Custom Framework Development"]
                },
                {
                    title: "Process Development",
                    description: "Develop and enforce project management practices and standardized processes",
                    features: ["Process Documentation", "Quality Standards", "Compliance Management", "Best Practices Implementation"]
                },
                {
                    title: "Project Monitoring",
                    description: "Review, monitor, and manage projects with comprehensive resource management",
                    features: ["Progress Tracking", "Performance Metrics", "Resource Optimization", "Stakeholder Management"]
                },
                {
                    title: "Continuous Improvement",
                    description: "Ongoing enhancement of practices and processes for optimal performance",
                    features: ["Process Optimization", "Lessons Learned", "Knowledge Management", "Innovation Integration"]
                }
            ]
        },
        {
            id: "software-development",
            title: "Software Development & Support",
            subtitle: "Custom Solutions That Exceed Expectations",
            description: "End-to-end software development services with strict adherence to benchmarks and commitment to exceeding client expectations.",
            icon: Code,
            gradient: "from-green-500 to-emerald-600",
            bgGradient: isLight ? "from-green-50 to-emerald-50" : "from-green-900/10 to-emerald-900/10",
            services: [
                {
                    title: "Custom Application Development",
                    description: "Tailored application development and seamless deployment across multiple platforms",
                    features: ["Web Applications", "Mobile Apps", "Desktop Solutions", "Cross-Platform Development"]
                },
                {
                    title: "Complete SDLC Implementation",
                    description: "Full software development lifecycle implementation with industry best practices",
                    features: ["Requirements Analysis", "System Design", "Development & Testing", "Deployment & Maintenance"]
                },
                {
                    title: "Technical Support Services",
                    description: "Comprehensive technical support and maintenance after implementation",
                    features: ["24/7 Support", "Bug Fixes & Updates", "Performance Optimization", "User Training"]
                },
                {
                    title: "Rapid Application Development",
                    description: "Fast-track development and deployment using cutting-edge technologies",
                    features: ["React/Angular/Vue.js", "Node.js/.NET/Java", "Python/Django/Flask", "Cloud-Native Solutions"]
                },
                {
                    title: "Quality Assurance",
                    description: "Rigorous testing and quality benchmarks to exceed client expectations",
                    features: ["Automated Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
                }
            ]
        },
        {
            id: "infrastructure",
            title: "Infrastructure Transformation & Management",
            subtitle: "Enterprise-Grade Systems & Security",
            description: "Comprehensive infrastructure transformation with focus on cloud migration, security implementation, and enterprise-grade standards.",
            icon: Cloud,
            gradient: "from-orange-500 to-red-600",
            bgGradient: isLight ? "from-orange-50 to-red-50" : "from-orange-900/10 to-red-900/10",
            services: [
                {
                    title: "Cloud Migration & Transformation",
                    description: "Infrastructure migration to cloud with complete application transformation",
                    features: ["AWS/Azure/GCP Migration", "Application Modernization", "Hybrid Cloud Solutions", "Cost Optimization"]
                },
                {
                    title: "Application Lifecycle Management",
                    description: "Complete application lifecycle implementation and engineering excellence",
                    features: ["Lifecycle Planning", "Version Control", "Release Management", "Environment Management"]
                },
                {
                    title: "Security & Compliance",
                    description: "Application security and cyber security implementation with compliance management",
                    features: ["Security Audits", "Compliance Frameworks", "Vulnerability Assessment", "Security Monitoring"]
                },
                {
                    title: "Containerization & DevOps",
                    description: "Application containerization, CI/CD implementation, and DevOps practices",
                    features: ["Docker/Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"]
                },
                {
                    title: "Enterprise Architecture",
                    description: "Robust engineering and architecture for security, infrastructure, and applications",
                    features: ["System Architecture", "Security Architecture", "Performance Engineering", "Scalability Design"]
                }
            ]
        },
        {
            id: "data-analytics",
            title: "Data Analytics & Business Intelligence",
            subtitle: "Transform Data into Strategic Insights",
            description: "Enterprise-grade data solutions including data warehouses, real-time processing, and custom analytics platforms.",
            icon: BarChart3,
            gradient: "from-teal-500 to-blue-600",
            bgGradient: isLight ? "from-teal-50 to-blue-50" : "from-teal-900/10 to-blue-900/10",
            services: [
                {
                    title: "Data Warehouse & Data Lakes",
                    description: "Enterprise-grade data warehouse and data lakes implementation for scalable analytics",
                    features: ["Data Modeling", "ETL Processes", "Data Lake Architecture", "Scalable Storage Solutions"]
                },
                {
                    title: "Real-time Data Processing",
                    description: "Data analytics, conversion, and processing for mission-critical applications",
                    features: ["Stream Processing", "Real-time Analytics", "Event-Driven Architecture", "Low-Latency Solutions"]
                },
                {
                    title: "Data Integration & Migration",
                    description: "Seamless data integration and transformation between legacy, cloud, and on-premise systems",
                    features: ["Legacy System Integration", "Cloud Data Migration", "API Development", "Data Synchronization"]
                },
                {
                    title: "Custom Analytics Solutions",
                    description: "Design and develop custom, tailored on-demand data management solutions",
                    features: ["Business Intelligence Dashboards", "Predictive Analytics", "Custom Reporting", "Data Visualization"]
                },
                {
                    title: "Data Architecture & Strategy",
                    description: "Comprehensive data architecture design and strategic migration planning",
                    features: ["Data Strategy", "Architecture Design", "Governance Framework", "Compliance Management"]
                }
            ]
        },
        {
            id: "center-excellence",
            title: "Center of Excellence",
            subtitle: "Innovation Through Proven Methodologies",
            description: "Incorporating proven methodologies and procedures to provide excellent service with continuous innovation and quality assurance.",
            icon: Award,
            gradient: "from-indigo-500 to-purple-600",
            bgGradient: isLight ? "from-indigo-50 to-purple-50" : "from-indigo-900/10 to-purple-900/10",
            services: [
                {
                    title: "Proven Methodologies",
                    description: "Incorporate proven methodologies and procedures to provide excellent service delivery",
                    features: ["Industry Best Practices", "Standardized Processes", "Quality Frameworks", "Service Excellence"]
                },
                {
                    title: "Agile & ITIL Integration",
                    description: "Embed ITIL, Agile, Scrum, Kanban into projects for effective operations and management",
                    features: ["ITIL Implementation", "Agile Transformation", "Scrum Mastery", "Kanban Optimization"]
                },
                {
                    title: "Knowledge Management",
                    description: "In-house knowledge management systems to support teams and drive innovation",
                    features: ["Knowledge Base", "Documentation Systems", "Training Programs", "Best Practice Sharing"]
                },
                {
                    title: "Quality Assurance Excellence",
                    description: "Quality assurance at best in all levels of project management and execution",
                    features: ["Quality Standards", "Process Audits", "Performance Metrics", "Continuous Monitoring"]
                },
                {
                    title: "On-Demand Solutions",
                    description: "On-demand solutions and resource provision for various project requirements",
                    features: ["Flexible Staffing", "Rapid Response", "Scalable Solutions", "Expert Consultation"]
                }
            ]
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="services" className={cn(
            "py-20 transition-colors duration-500",
            isLight 
                ? "bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]" 
                : "bg-[#030303]"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        variants={itemVariants}
                        className={cn(
                            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}
                    >
                        Services & Solutions
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className={cn(
                            "text-xl max-w-3xl mx-auto leading-relaxed",
                            isLight ? "text-gray-600" : "text-gray-300"
                        )}
                    >
                        Comprehensive technology solutions designed to drive innovation, enhance efficiency, 
                        and accelerate your digital transformation journey with industry-leading expertise.
                    </motion.p>
                </motion.div>

                {/* Service Categories */}
                <div className="space-y-24">
                    {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.id}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className={cn(
                                "rounded-3xl p-8 md:p-12 transition-colors duration-500",
                                `bg-gradient-to-br ${category.bgGradient}`,
                                isLight ? "border border-gray-200" : "border border-gray-700"
                            )}
                        >
                            {/* Category Header */}
                            <motion.div
                                variants={itemVariants}
                                className="text-center mb-12"
                            >
                                <div className={cn(
                                    "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6",
                                    `bg-gradient-to-br ${category.gradient} text-white shadow-lg`
                                )}>
                                    <category.icon className="w-8 h-8" />
                                </div>
                                <h3 className={cn(
                                    "text-3xl md:text-4xl font-bold mb-4",
                                    isLight ? "text-gray-900" : "text-white"
                                )}>
                                    {category.title}
                                </h3>
                                <p className={cn(
                                    "text-lg font-semibold mb-4",
                                    `bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`
                                )}>
                                    {category.subtitle}
                                </p>
                                <p className={cn(
                                    "text-lg max-w-4xl mx-auto leading-relaxed",
                                    isLight ? "text-gray-700" : "text-gray-300"
                                )}>
                                    {category.description}
                                </p>
                            </motion.div>

                            {/* Services Grid */}
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {category.services.map((service, serviceIndex) => (
                                    <motion.div
                                        key={serviceIndex}
                                        variants={cardVariants}
                                        className={cn(
                                            "rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group cursor-pointer",
                                            isLight 
                                                ? "bg-white border border-gray-200 hover:border-gray-300" 
                                                : "bg-gray-800 border border-gray-700 hover:border-gray-600"
                                        )}
                                        whileHover={{ y: -5 }}
                                    >
                                        <h4 className={cn(
                                            "text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300",
                                            isLight ? "text-gray-900" : "text-white",
                                            `group-hover:bg-gradient-to-r group-hover:${category.gradient}`
                                        )}>
                                            {service.title}
                                        </h4>
                                        <p className={cn(
                                            "text-sm mb-4 leading-relaxed",
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
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mt-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className={cn(
                            "rounded-3xl p-12 transition-colors duration-500",
                            isLight 
                                ? "bg-gradient-to-br from-[#00B483]/10 to-[#00B843]/10 border border-[#00B483]/20" 
                                : "bg-gradient-to-br from-[#00B483]/20 to-[#00B843]/20 border border-[#00B483]/30"
                        )}
                    >
                        <h3 className={cn(
                            "text-3xl md:text-4xl font-bold mb-6",
                            isLight ? "text-gray-900" : "text-white"
                        )}>
                            Ready to Transform Your Business?
                        </h3>
                        <p className={cn(
                            "text-lg mb-8 max-w-2xl mx-auto",
                            isLight ? "text-gray-700" : "text-gray-300"
                        )}>
                            Let's discuss how our comprehensive services can accelerate your digital transformation 
                            and drive sustainable growth for your organization.
                        </p>
                        <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00B483] to-[#00B843] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Get Started Today
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
