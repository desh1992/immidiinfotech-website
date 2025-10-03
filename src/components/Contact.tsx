"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { AdvancedMap } from "./ui/interactive-map";
import { sendContactEmail, ContactFormData } from "@/lib/emailjs";

export function Contact() {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const success = await sendContactEmail(formData);
            if (success) {
                setSubmitStatus('success');
                setFormData({ name: "", email: "", subject: "", message: "" });
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

    const contactMethods = [
        {
            icon: MapPin,
            text: "702 Russell Ave, Suite #470C",
            subtext: "Gaithersburg MD 20877, United States of America"
        },
        {
            icon: Phone,
            text: "1-510-280-7669 (Phone)"
        },
        {
            icon: Phone,
            text: "1-510-280-3693 (Fax)"
        },
        {
            icon: Mail,
            text: "contact@immidiinfotech.com"
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
                                    className="flex items-start space-x-4"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <method.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-gray-700 font-medium block">
                                            {method.text}
                                        </span>
                                        {method.subtext && (
                                            <span className="text-gray-500 text-sm block">
                                                {method.subtext}
                                            </span>
                                        )}
                                    </div>
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
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
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
                                    disabled={isSubmitting}
                                    className={cn(
                                        "w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2",
                                        isSubmitting 
                                            ? "bg-gray-400 cursor-not-allowed" 
                                            : "bg-gradient-to-r from-[#00B483] to-[#00B843] text-white hover:shadow-lg"
                                    )}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <span>Send Message</span>
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
                                        <span>Message sent successfully! We'll get back to you soon.</span>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                                    >
                                        <AlertCircle className="w-5 h-5" />
                                        <span>Failed to send message. Please try again or contact us directly.</span>
                                    </motion.div>
                                )}
                            </div>
                        </motion.form>
                    </motion.div>
                </div>

                {/* Building Image and Location Details */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center">
                                <Building className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Office Location</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Building Image */}
                            <motion.div
                                variants={itemVariants}
                                className="relative rounded-xl shadow-lg overflow-hidden"
                            >
                                <img 
                                    src="/Office-Pic.jpg" 
                                    alt="Immidi Infotech Office Building"
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                            </motion.div>

                            {/* Location Details */}
                            <motion.div
                                variants={itemVariants}
                                className="space-y-4"
                            >
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-[#00B483] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                                        <p className="text-gray-600">
                                            702 Russell Ave, Suite #470C<br />
                                            Gaithersburg MD 20877<br />
                                            United States of America
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-[#00B483] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600">1-510-280-7669</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-[#00B483] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Fax</h4>
                                        <p className="text-gray-600">1-510-280-3693</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-[#00B483] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">contact@immidiinfotech.com</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Interactive Map */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-12"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Find Us on Map</h3>
                        </div>
                        
                        <motion.div
                            variants={itemVariants}
                            className="rounded-xl overflow-hidden shadow-lg"
                            style={{ height: '500px' }}
                        >
                            <AdvancedMap
                                center={[39.15064535100687, -77.2070067950877]} // Exact coordinates for 702 Russell Ave, Gaithersburg, MD
                                zoom={16}
                                markers={[
                                    {
                                        id: 1,
                                        position: [39.15064535100687, -77.2070067950877],
                                        color: 'blue',
                                        size: 'large',
                                        popup: {
                                            title: 'Immidi Infotech',
                                            content: '702 Russell Ave, Suite #470C<br/>Gaithersburg MD 20877<br/>United States of America'
                                        }
                                    }
                                ]}
                                enableClustering={false}
                                enableSearch={true}
                                enableControls={true}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
