"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Download, CheckCircle, Award, FileDown, Users } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";

export function CompanyDetailsPage() {
    const { theme } = useTheme();
    const isLight = theme === 'light';


    const companyDetails = [
        { label: "Federal ID", value: "27-2221769" },
        { label: "Maryland SDAT Department ID", value: "W14906325" },
        { label: "Duns and Bradstreet Number", value: "007676735" },
        { label: "CAGE Code", value: "7JD81" },
        { label: "Unique Entity ID", value: "QT4CJBNLB583" },
        { label: "MPIN Number", value: "04062805V" },
        { label: "E-Verify Number", value: "264805" },
        { label: "Year Established", value: "2009" },
        { label: "NAICS Codes", value: "541511, 541512, 541513, 541519" }
    ];

    const certifications = [
        {
            title: "Minority Based Enterprise (MBE)",
            organization: "Department of Transportation, State of Maryland",
            description: "Certified as a Minority Based Enterprise by the Maryland DOT"
        },
        {
            title: "Minority Based Enterprise (MBE)",
            organization: "National Minority Supplier Development Council (NMSDC)",
            certificateNumber: "CR42951",
            description: "Certified by NMSDC with Certificate Number: CR42951"
        },
        {
            title: "SBA 8(a) Program",
            organization: "U.S. Small Business Administration",
            date: "August 2024",
            description: "Awarded SBA 8(a) certification in August 2024"
        }
    ];

    const downloadCards = [
        {
            title: "Capability Statement",
            description: "Download The Statement Below",
            buttonText: "Download here"
        },
        {
            title: "Company Brochure",
            description: "Download Our Mission Below",
            buttonText: "Download here"
        }
    ];

    const lcaApplications = [
        { id: "026007", title: "LCA Application 026007" },
        { id: "026010", title: "LCA Application 026010" },
        { id: "247018", title: "LCA Application 247018" },
        { id: "347560", title: "LCA Application 347560" }
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
        <div className={cn(
            "min-h-screen transition-colors duration-500",
            isLight 
                ? "bg-white" 
                : "bg-[#030303]"
        )}>
            {/* Navigation Header */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link 
                        to="/" 
                        className="inline-flex items-center space-x-2 text-[#00B483] hover:text-[#00B843] font-medium transition-colors duration-200 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center mb-16"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        >
                            About Our Company
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Learn more about Immidi Infotech's mission, values, and commitment to excellence
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full mb-20"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 leading-relaxed text-lg text-center max-w-5xl mx-auto"
                        >
                            Immidi Infotech is founded by professionals who are actively part of IT industry to provide technology solutions with a mission to provide high quality IT enabled Services like software development, support, and Technology training and placement services. We provide technology solutions and IT staffing services to startups and fortune 500 companies, offering customized and tailored solutions for your technology needs. Our team consists of range of professionals from project management, architecture, and development to support to satisfy all kinds of technology needs. We are actively into software development, working on B2B and B2C based portals including{" "}
                            <a 
                                href="https://www.talent-share.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#00B483] hover:text-[#00B843] font-semibold underline transition-colors duration-200"
                            >
                                www.talent-share.com
                            </a>{" "}
                            which provides unique services to clients. Our goal is to provide high quality workforce with client focused approach, understanding your business requirements in dynamic business environment and providing suitable solutions.
                        </motion.p>
                    </motion.div>

                    {/* Company Details */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-20"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold text-gray-900 text-center mb-16"
                        >
                            Company Information
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {companyDetails.map((detail, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group text-center"
                                >
                                    {/* Large Value */}
                                    <div className="mb-3">
                                        <p className="text-4xl font-light text-gray-900 group-hover:text-[#00B483] transition-colors duration-300 tracking-tight">
                                            {detail.value}
                                        </p>
                                    </div>
                                    
                                    {/* Small Title */}
                                    <div>
                                        <h3 className="text-sm font-light text-gray-500 uppercase tracking-widest">
                                            {detail.label}
                                        </h3>
                                    </div>
                                    
                                    {/* Subtle underline */}
                                    <div className="w-12 h-0.5 bg-[#00B483] mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-20"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold text-gray-900 text-center mb-12"
                        >
                            Certifications & Awards
                        </motion.h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
                            {certifications.map((cert, index) => {
                                const colors = [
                                    ["#3B82F6", "#60A5FA", "#93C5FD"], // Blue gradient
                                    ["#60A5FA", "#34D399", "#93C5FD"], // Blue-green gradient
                                    ["#F59E0B", "#A78BFA", "#FCD34D"]  // Orange-purple gradient
                                ];
                                
                                const certValue = cert.certificateNumber || cert.date || "Certified";
                                const certSubtitle = cert.organization;
                                
                                return (
                                    <BentoCard
                                        key={index}
                                        title={cert.title}
                                        value={certValue}
                                        subtitle={certSubtitle}
                                        colors={colors[index % colors.length]}
                                        delay={index * 0.2}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Company Documents - Bento Grid Style */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-20"
                    >
                        <div className="flex flex-col gap-10">
                            {/* Header Section */}
                            <div className="flex gap-4 flex-col items-start">
                                <div className="flex gap-2 flex-col">
                                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-gray-900">
                                        Company Documents
                                    </h2>
                                    <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left">
                                        Download our capability statement and company brochure to learn more about our services and mission.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Bento Grid Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Capability Statement - Large Card */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                                >
                                    <FileText className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Capability Statement</h3>
                                        <p className="text-gray-600 max-w-md text-base mb-6">
                                            Download our comprehensive capability statement to learn about our services, expertise, and track record.
                                        </p>
                                        <motion.button 
                                            className="bg-[#00B483] text-white hover:bg-[#00B843] px-8 py-4 rounded-xl font-semibold transition-colors duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl w-fit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-5 h-5" />
                                            <span>Download Statement</span>
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Company Brochure - Small Card */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                                >
                                    <FileDown className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Company Brochure</h3>
                                        <p className="text-gray-600 text-sm mb-6">
                                            Download our mission and company overview brochure.
                                        </p>
                                        <motion.button 
                                            className="bg-[#00B483] text-white hover:bg-[#00B843] px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl w-fit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Download</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Active Labor Applications - Bento Grid Style */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-20"
                    >
                        <div className="flex flex-col gap-10">
                            {/* Header Section */}
                            <div className="flex gap-4 flex-col items-start">
                                <div className="flex gap-2 flex-col">
                                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-gray-900">
                                        Active Labor Condition Applications
                                    </h2>
                                    <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left">
                                        Access our active labor condition applications for compliance and transparency.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Bento Grid Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* LCA Application 1 - Large Card (spans 2 columns) */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                                >
                                    <FileText className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{lcaApplications[0]?.title}</h3>
                                        <p className="text-gray-600 max-w-md text-base mb-6">
                                            Active labor condition application for compliance with federal regulations and fair employment practices.
                                        </p>
                                        <motion.button 
                                            className="bg-[#00B483] text-white hover:bg-[#00B843] px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl w-fit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Download</span>
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* LCA Application 2 - Small Card */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                                >
                                    <FileText className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{lcaApplications[1]?.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Active labor condition application for compliance.
                                        </p>
                                        <motion.button 
                                            className="bg-[#00B483] text-white hover:bg-[#00B843] px-4 py-2 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl w-fit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Download</span>
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* LCA Application 3 - Small Card */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 aspect-square p-6 flex justify-between flex-col"
                                >
                                    <FileText className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{lcaApplications[2]?.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Active labor condition application for compliance.
                                        </p>
                                        <motion.button 
                                            className="bg-[#00B483] text-white hover:bg-[#00B843] px-4 py-2 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl w-fit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Download</span>
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* LCA Application 4 - Large Card (spans 2 columns) */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col"
                                >
                                    <FileText className="w-8 h-8 stroke-1 text-[#00B483]" />
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{lcaApplications[3]?.title}</h3>
                                        <p className="text-gray-600 max-w-md text-base mb-6">
                                            Active labor condition application for compliance with federal regulations and fair employment practices.
                                        </p>
                                        <motion.button 
                                            className="bg-[#00B483] text-white hover:bg-[#00B843] px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl w-fit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Download</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
