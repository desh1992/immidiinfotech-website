"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
    Brain, 
    Target, 
    Code, 
    Cloud, 
    BarChart3, 
    Award,
    ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const services = [
        { id: "ai-ml", label: "AI & Machine Learning", path: "/services/ai-ml", icon: Brain },
        { id: "program-management", label: "Program & Project Management", path: "/services/program-management", icon: Target },
        { id: "software-development", label: "Software Development & Support", path: "/services/software-development", icon: Code },
        { id: "infrastructure", label: "Infrastructure Transformation", path: "/services/infrastructure", icon: Cloud },
        { id: "data-analytics", label: "Data Analytics & BI", path: "/services/data-analytics", icon: BarChart3 },
        { id: "center-excellence", label: "Center of Excellence", path: "/services/center-excellence", icon: Award },
    ];

    const navLinks = [
        { id: "home", label: "Home", path: "/" },
        { id: "services", label: "Services & Solutions", path: "/#services", hasDropdown: true },
        { id: "careers", label: "Careers", path: "/#careers" },
        { id: "company", label: "Company Details", path: "/#company" },
        { id: "talent-share", label: "Talent-Share Project", path: "/#talent-share" },
        { id: "contact", label: "Contact Us", path: "/#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <motion.div
                            className="flex items-center space-x-3 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                            <span className="text-xl font-bold text-gray-900">Immidi Infotech</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.id} className="relative">
                                {link.hasDropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                                    >
                                        <button
                                            className={cn(
                                                "flex items-center space-x-1 text-gray-700 hover:text-[#00B483] font-medium transition-colors duration-200",
                                                location.pathname.startsWith('/services') && "text-[#00B483]"
                                            )}
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown className={cn(
                                                "w-4 h-4 transition-transform duration-200",
                                                isServicesDropdownOpen && "rotate-180"
                                            )} />
                                        </button>
                                        
                                        {/* Dropdown Menu */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ 
                                                opacity: isServicesDropdownOpen ? 1 : 0, 
                                                y: isServicesDropdownOpen ? 0 : 10 
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className={cn(
                                                "absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden",
                                                isServicesDropdownOpen ? "block" : "hidden"
                                            )}
                                        >
                                            <div className="p-2">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        to={service.path}
                                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                                        onClick={() => setIsServicesDropdownOpen(false)}
                                                    >
                                                        <div className="w-8 h-8 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-lg flex items-center justify-center">
                                                            <service.icon className="w-4 h-4 text-white" />
                                                        </div>
                                                        <span className="text-gray-700 font-medium">{service.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "text-gray-700 hover:text-[#00B483] font-medium transition-colors duration-200",
                                            location.pathname === link.path && "text-[#00B483]"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className={cn(
                                "w-6 h-0.5 bg-gray-700 transition-all duration-300",
                                isMenuOpen && "rotate-45 translate-y-1.5"
                            )}
                        />
                        <motion.span
                            className={cn(
                                "w-6 h-0.5 bg-gray-700 transition-all duration-300",
                                isMenuOpen && "opacity-0"
                            )}
                        />
                        <motion.span
                            className={cn(
                                "w-6 h-0.5 bg-gray-700 transition-all duration-300",
                                isMenuOpen && "-rotate-45 -translate-y-1.5"
                            )}
                        />
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300",
                        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="py-4 space-y-2">
                        {navLinks.map((link, index) => (
                            <div key={link.id}>
                                {link.hasDropdown ? (
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-700 hover:text-[#00B483] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown className={cn(
                                                "w-4 h-4 transition-transform duration-200",
                                                isServicesDropdownOpen && "rotate-180"
                                            )} />
                                        </button>
                                        
                                        {/* Mobile Services Dropdown */}
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ 
                                                opacity: isServicesDropdownOpen ? 1 : 0, 
                                                height: isServicesDropdownOpen ? "auto" : 0 
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-6 space-y-1">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        to={service.path}
                                                        className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-[#00B483] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setIsServicesDropdownOpen(false);
                                                        }}
                                                    >
                                                        <div className="w-6 h-6 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded flex items-center justify-center">
                                                            <service.icon className="w-3 h-3 text-white" />
                                                        </div>
                                                        <span className="text-sm">{service.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "block w-full text-left px-4 py-2 text-gray-700 hover:text-[#00B483] hover:bg-gray-50 rounded-lg transition-colors duration-200",
                                            location.pathname === link.path && "text-[#00B483] bg-gray-50"
                                        )}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    );
}
