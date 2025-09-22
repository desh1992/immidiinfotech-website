"use client";

import { motion } from "framer-motion";
import { Settings, Bell, DollarSign } from "lucide-react";

export function WhyChooseUs() {
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
        <section className="py-20 bg-gray-50">
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
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
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
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
