"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function Footer() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const footerLinks = [
        { id: "home", label: "Home", path: "/" },
        { id: "services", label: "Services", path: "/#services" },
        { id: "careers", label: "Careers", path: "/careers" },
        { id: "company", label: "Company", path: "/company-details" },
        { id: "talent-share", label: "Talent-Share", path: "/talent-share-details" },
        { id: "contact", label: "Contact", path: "/#contact" }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/immidi-infotech/?viewAsMember=true", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/immidiinfotech", label: "Twitter" },
        { icon: Facebook, href: "https://www.facebook.com/immidiinfotech", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/immidiinfotech/", label: "Instagram" }
    ];

    const handleNavigation = (link: any) => {
        if (link.path.startsWith('/#')) {
            // Handle section scrolling (only for contact)
            const sectionId = link.path.substring(2); // Remove '/#'
            if (window.location.pathname === '/') {
                // We're on home page, just scroll
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // We're on a different page, navigate to home first then scroll
                window.location.href = `/#${sectionId}`;
            }
        } else if (link.path === '/') {
            // Handle home navigation
            if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.location.href = '/';
            }
        } else {
            // Handle other routes normally - navigate directly to pages
            window.location.href = link.path;
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
        <footer className={cn(
            "transition-colors duration-500",
            isLight ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        )}>
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
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                            <img 
                                src="/immidi-logo.png" 
                                alt="Immidi Infotech Logo" 
                                className="w-full h-full object-contain"
                            />
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
                                onClick={() => handleNavigation(link)}
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
