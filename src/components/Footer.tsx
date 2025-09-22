"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
    const footerLinks = [
        { id: "home", label: "Home" },
        { id: "services", label: "Services" },
        { id: "careers", label: "Careers" },
        { id: "company", label: "Company" },
        { id: "talent-share", label: "Talent-Share" },
        { id: "contact", label: "Contact" }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Facebook, href: "#", label: "Facebook" }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
        hidden: { opacity: 0, y: 20 },
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
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {/* Logo */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center space-x-3"
                    >
                        <div className="w-10 h-10 bg-[#00B483] rounded-lg flex items-center justify-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" fill="white" />
                                <rect x="6" y="6" width="12" height="8" rx="1" fill="#00B483" />
                                <rect x="6" y="10" width="12" height="4" rx="1" fill="#00B483" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold">Immidi Infotech</span>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center md:justify-center gap-6"
                    >
                        {footerLinks.map((link) => (
                            <motion.button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-300 hover:text-white transition-colors duration-200"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-end space-x-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00B483] transition-colors duration-200"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="border-t border-gray-800 mt-12 pt-8 text-center"
                >
                    <p className="text-gray-400">
                        &copy; 2009 Immidiinfotech.com. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
