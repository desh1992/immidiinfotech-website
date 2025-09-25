"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function Contact() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    const contactMethods = [
        {
            icon: Mail,
            text: "info@immidiinfotech.com"
        },
        {
            icon: Phone,
            text: "Contact us for details"
        },
        {
            icon: MapPin,
            text: "Global IT Solutions Provider"
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
        <section id="contact" className={cn(
            "py-20 transition-colors duration-500",
            isLight 
                ? "bg-white" 
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
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Contact Us
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-semibold text-gray-900 mb-4"
                        >
                            Get in Touch
                        </motion.h3>
                        
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 leading-relaxed mb-8"
                        >
                            Ready to transform your technology needs? Contact us today to discuss how we can help your business grow.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            className="space-y-6"
                        >
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center">
                                        <method.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">
                                        {method.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.form
                            variants={itemVariants}
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                                
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                                
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-all duration-200 resize-none"
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#00B483] to-[#00B843] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
