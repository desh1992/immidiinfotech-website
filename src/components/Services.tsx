"use client";

import { motion } from "framer-motion";
import { MessageCircle, Code, Users } from "lucide-react";

export function Services() {
    const steps = [
        {
            number: "1",
            title: "Consultation",
            description: "We understand your business requirements and provide suitable solutions tailored to your needs.",
            icon: MessageCircle
        },
        {
            number: "2",
            title: "Development",
            description: "Our experienced team develops high-quality software solutions including B2B and B2C portals.",
            icon: Code
        },
        {
            number: "3",
            title: "Support & Training",
            description: "We provide continuous support and training to keep your workforce updated with latest technology trends.",
            icon: Users
        }
    ];

    const expertiseItems = [
        { name: "Software Development", level: "Expert" },
        { name: "IT Staffing", level: "Expert" },
        { name: "Training Services", level: "Expert" }
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
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
                        >
                            Simplify Your Technology Needs
                        </motion.h2>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start space-x-6 group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Phone Mockup */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            {/* Phone Mockup */}
                            <div className="w-80 h-96 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                                    {/* Phone Screen */}
                                    <div className="h-full flex flex-col">
                                        {/* App Header */}
                                        <div className="bg-gradient-to-r from-[#00B483] to-[#00B843] text-white p-4">
                                            <h3 className="text-lg font-semibold">Our Expertise</h3>
                                        </div>
                                        
                                        {/* Expertise List */}
                                        <div className="flex-1 p-4 space-y-4">
                                            {expertiseItems.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-xs bg-[#00B483] text-white px-2 py-1 rounded-full">
                                                        {item.level}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-[#00B483] rounded-full"
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00B843] rounded-full"
                                animate={{
                                    y: [0, 10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
