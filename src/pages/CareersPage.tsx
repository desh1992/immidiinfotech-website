"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Upload, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sendCareersEmail, CareersFormData } from "@/lib/emailjs";

export function CareersPage() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [formData, setFormData] = useState<CareersFormData>({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: undefined
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const openPositions = [
        "Unix/Linux Administrator",
        "Weblogic Portal Administrator", 
        "Senior Java Developer",
        "Weblogic SOA Architect",
        "Senior Solaris Administrator",
        "Software Developer",
        "Database Administrator"
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({
            ...prev,
            resume: file
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const success = await sendCareersEmail(formData);
            if (success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    position: '',
                    experience: '',
                    message: '',
                    resume: undefined
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

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

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-[#00B483] to-[#00B843]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            Available Positions
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-white/90 max-w-3xl mx-auto"
                        >
                            Join our innovative team and be part of cutting-edge technology solutions
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Job Listings */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-20"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold text-gray-900 text-center mb-12"
                        >
                            Currently We Have The Following Positions Open:
                        </motion.h2>
                        
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {openPositions.map((position, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <div className="w-8 h-8 bg-[#00B483] rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-semibold text-sm">{index + 1}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">{position}</h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gray-50 rounded-2xl p-8 md:p-12"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                <span className="border-b-4 border-[#00B483] pb-2">APPLY ONLINE</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                If you would like to be considered for one of our open career opportunities, please fill out the form with your basic contact information and submit your resume including with your full contact information, salary requirements and availability.
                            </p>
                        </motion.div>

                        <motion.form
                            variants={itemVariants}
                            onSubmit={handleSubmit}
                            className="max-w-2xl mx-auto space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-colors duration-200"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-colors duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-colors duration-200"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                    Position of Interest *
                                </label>
                                <select
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-colors duration-200"
                                >
                                    <option value="">Select a position</option>
                                    {openPositions.map((position, index) => (
                                        <option key={index} value={position}>{position}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                                    Years of Experience *
                                </label>
                                <select
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-colors duration-200"
                                >
                                    <option value="">Select experience level</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="2-3">2-3 years</option>
                                    <option value="4-5">4-5 years</option>
                                    <option value="6-10">6-10 years</option>
                                    <option value="10+">10+ years</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cover Letter / Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B483] focus:border-transparent transition-colors duration-200"
                                    placeholder="Tell us about your experience, skills, and why you're interested in joining our team..."
                                />
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload Your Resume *
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-2 bg-[#00B483] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#00B843] transition-colors duration-300">
                                        <Upload className="w-4 h-4" />
                                        <span>Choose File</span>
                                        <input
                                            type="file"
                                            id="resume"
                                            name="resume"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            required
                                        />
                                    </label>
                                    <span className="text-gray-500">
                                        {formData.resume ? formData.resume.name : "No file chosen"}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    Accepted formats: PDF, DOC, DOCX (Max size: 10MB)
                                </p>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full px-8 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg flex items-center justify-center space-x-3",
                                    isSubmitting 
                                        ? "bg-gray-400 cursor-not-allowed" 
                                        : "bg-[#00B483] text-white hover:bg-[#00B843] hover:shadow-xl"
                                )}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Submit Application</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Application submitted successfully! We'll review your application and contact you soon.</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                                >
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Failed to submit application. Please try again or contact us directly.</span>
                                </motion.div>
                            )}
                        </motion.form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
