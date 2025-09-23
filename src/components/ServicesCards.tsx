"use client";

import { motion } from "framer-motion";
import { 
    Brain, 
    Target, 
    Code, 
    Cloud, 
    BarChart3, 
    Award,
    ArrowRight
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function ServicesCards() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const services = [
        {
            id: "ai-ml",
            title: "AI & Machine Learning Services",
            description: "Leading the Industry in AI Innovation. We are the best in the industry to provide cutting-edge AI and ML services. Our expertise spans across deep learning, natural language processing, computer vision, and predictive analytics.",
            icon: Brain,
            gradient: "from-purple-500 to-indigo-600",
            bgGradient: isLight ? "from-purple-50 to-indigo-50" : "from-purple-900/10 to-indigo-900/10",
            link: "/services/ai-ml"
        },
        {
            id: "program-management",
            title: "Program & Project Management",
            description: "Strategic Excellence in Execution. Comprehensive program management services ensuring successful project delivery with proven methodologies and frameworks.",
            icon: Target,
            gradient: "from-blue-500 to-cyan-600",
            bgGradient: isLight ? "from-blue-50 to-cyan-50" : "from-blue-900/10 to-cyan-900/10",
            link: "/services/program-management"
        },
        {
            id: "software-development",
            title: "Software Development & Support",
            description: "Custom Solutions That Exceed Expectations. End-to-end software development services with strict adherence to benchmarks and commitment to exceeding client expectations.",
            icon: Code,
            gradient: "from-green-500 to-emerald-600",
            bgGradient: isLight ? "from-green-50 to-emerald-50" : "from-green-900/10 to-emerald-900/10",
            link: "/services/software-development"
        },
        {
            id: "infrastructure",
            title: "Infrastructure Transformation & Management",
            description: "Enterprise-Grade Systems & Security. Comprehensive infrastructure transformation with focus on cloud migration, security implementation, and enterprise-grade standards.",
            icon: Cloud,
            gradient: "from-orange-500 to-red-600",
            bgGradient: isLight ? "from-orange-50 to-red-50" : "from-orange-900/10 to-red-900/10",
            link: "/services/infrastructure"
        },
        {
            id: "data-analytics",
            title: "Data Analytics & Business Intelligence",
            description: "Transform Data into Strategic Insights. Enterprise-grade data solutions including data warehouses, real-time processing, and custom analytics platforms.",
            icon: BarChart3,
            gradient: "from-teal-500 to-blue-600",
            bgGradient: isLight ? "from-teal-50 to-blue-50" : "from-teal-900/10 to-blue-900/10",
            link: "/services/data-analytics"
        },
        {
            id: "center-excellence",
            title: "Center of Excellence",
            description: "Innovation Through Proven Methodologies. Incorporating proven methodologies and procedures to provide excellent service with continuous innovation and quality assurance.",
            icon: Award,
            gradient: "from-indigo-500 to-purple-600",
            bgGradient: isLight ? "from-indigo-50 to-purple-50" : "from-indigo-900/10 to-purple-900/10",
            link: "/services/center-excellence"
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

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className={cn(
                                "rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group cursor-pointer",
                                `bg-gradient-to-br ${service.bgGradient}`,
                                isLight 
                                    ? "border border-gray-200 hover:border-gray-300" 
                                    : "border border-gray-700 hover:border-gray-600"
                            )}
                            whileHover={{ y: -5 }}
                        >
                            <Link to={service.link} className="block">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                
                                <h3 className={cn(
                                    "text-2xl font-bold mb-4 transition-colors duration-300",
                                    isLight ? "text-gray-900" : "text-white"
                                )}>
                                    {service.title}
                                </h3>
                                
                                <p className={cn(
                                    "text-base mb-6 leading-relaxed",
                                    isLight ? "text-gray-600" : "text-gray-300"
                                )}>
                                    {service.description}
                                </p>
                                
                                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    <span className="mr-2 bg-gradient-to-r from-[#00B483] to-[#00B843] bg-clip-text text-transparent">
                                        Learn More
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[#00B483]" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

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
                            Get Started Today
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
