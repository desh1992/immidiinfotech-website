"use client";

import { motion } from "framer-motion";
import { Settings, Bell, DollarSign } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const features = [
        {
            icon: Settings,
            title: "Customized Solutions",
            description: "We provide customized and tailored solutions for your technology needs, understanding your business requirements in dynamic business environment."
        },
        {
            icon: Bell,
            title: "24/7 Support",
            description: "Our team consists of professionals from project management, architecture, and development to support to satisfy all kinds of technology needs."
        },
        {
            icon: DollarSign,
            title: "Cost Effective",
            description: "We are a client focused company with low cost operations, providing excellent service to our clients without compromising on quality."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <section className={cn(
            "py-20 transition-colors duration-500",
            isLight 
                ? "bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]" 
                : "bg-[#030303]"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className={cn(
                            "text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300",
                            isLight ? "text-gray-900" : "text-white"
                        )}
                    >
                        Why Choose Immidi Infotech?
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={cn(
                                "rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group",
                                isLight 
                                    ? "bg-white border border-gray-200" 
                                    : "bg-gray-800 border border-gray-700"
                            )}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className={cn(
                                "text-xl font-semibold mb-4 transition-colors duration-300",
                                isLight ? "text-gray-900" : "text-white"
                            )}>
                                {feature.title}
                            </h3>
                            <p className={cn(
                                "leading-relaxed transition-colors duration-300",
                                isLight ? "text-gray-600" : "text-gray-300"
                            )}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
