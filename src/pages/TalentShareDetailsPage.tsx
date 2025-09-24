"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { 
    Lightbulb, Star, Rocket, Users, ArrowLeft, Globe, Target, Award, Zap, 
    DollarSign, TrendingUp, Calendar, Code, Database, Server, Smartphone, 
    MapPin, CreditCard, MessageCircle, Search, CheckCircle, HelpCircle,
    BookOpen, GraduationCap, Briefcase, UserCheck, Clock, Shield, ChevronDown
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { FaqSection } from "@/components/ui/faq-section";
import { Button } from "@/components/ui/button";

export function TalentShareDetailsPage() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const projectHighlights = [
        {
            icon: Users,
            title: "Platform for Professionals",
            description: "Find experienced, skilled, working professionals to train, tutor, teach, guide, and perfect your learning requirements"
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Connect with professionals worldwide who are willing to share their knowledge and experience"
        },
        {
            icon: BookOpen,
            title: "Diverse Learning Areas",
            description: "Learn sports, languages, software, social sciences, sciences, arts, communication, business, management, and more"
        },
        {
            icon: Briefcase,
            title: "Practical Experience",
            description: "Get real-world experience from working professionals rather than theoretical knowledge"
        }
    ];

    const revenueProjections = [
        {
            period: "First 12 months",
            revenue: "$25,000",
            users: "20,000 user profiles"
        },
        {
            period: "Next 24 months", 
            revenue: "$45,000",
            users: "55,000 user profiles"
        },
        {
            period: "After 24 months",
            revenue: "$65,000",
            users: "100,000 customer accounts"
        }
    ];

    const technologyStack = [
        { category: "Web Servers", items: ["Oracle Web Servers", "F5 Load Balancers"] },
        { category: "Operating Systems", items: ["Oracle Enterprise Linux 64bit"] },
        { category: "Frontend", items: ["HTML5", "CSS", "AJAX", "XML", "JavaScript"] },
        { category: "Backend", items: ["Java", "J2EE", "Tomcat", "Oracle E-Business Suite"] },
        { category: "Databases", items: ["MySQL", "Oracle 11g RAC"] },
        { category: "Content Management", items: ["WordPress", "Joomla"] },
        { category: "Caching", items: ["Akamai"] },
        { category: "SEO", items: ["Google Search Appliances"] }
    ];

    const plannedUpgrades = [
        { icon: MapPin, title: "Google Maps Integration", description: "Service provider location mapping" },
        { icon: Smartphone, title: "Mobile & Tablet Apps", description: "Native mobile and tablet versions" },
        { icon: CreditCard, title: "Mobile Payments", description: "Integrated mobile payment solutions" },
        { icon: MessageCircle, title: "Social Integration", description: "Facebook, Twitter, and social networking integration" }
    ];

    const faqServiceSeekers = [
        { 
            q: "What is Talent-Share?", 
            a: "Talent-Share is a novel idea to solve a real-life problem. This site provides you with a platform to find experienced, skilled, working professionals to train/ tutor/teach/guide/perfect you to fulfill your learning requirements. All you need to do is to register yourself and look for these skilled, professional individuals in the industry who are willing to share their knowledge and experience, in their respective specialization. You contact them and start learning. It is that simple!!" 
        },
        { 
            q: "Why is Talent-Share?", 
            a: "With Talent-Share, you reach out to hundreds of working professionals, who are SP with working knowledge and that greatly enhances endorsing of knowledge from SP to SS." 
        },
        { 
            q: "What am I going to get from this site?", 
            a: "You will get wide range of skilled man power for your needs. You get access to each one of them with whom you can meet and make progress in your career path." 
        },
        { 
            q: "Why is this site so different than others?", 
            a: "This portal is the only portal with this kind of solution. Bringing skills to door step of learners." 
        },
        { 
            q: "How can I benefit from this site?", 
            a: "You can achieve your goal to succeed by choosing your career path and selecting resources to make you reach your goals." 
        },
        { 
            q: "What services can I get?", 
            a: "Wide range of services is available from thousands of individuals. Learning opportunities are endless. You can learn anything, everything, based your aptitude and requirement. It can be learning/training from those people listed on the portal" 
        },
        { 
            q: "What are the advantages with this site?", 
            a: "You get world wide access to millions of individuals who can help you in reaching your goals." 
        },
        { 
            q: "How do I make payments?", 
            a: "Payments are made through PayPal. Get registered with PayPal and start learning." 
        },
        { 
            q: "How do I contact trainers?", 
            a: "Once you select an individual who matches your learning requirement, you ping him and leave a note for him. You can also chat with him if he is online and make an initial contact and discuss." 
        },
        { 
            q: "How do I make a selection?", 
            a: "Choose a range of individuals who satisfies your learning requirement; go over their profiles and teaching history, their reviews and ratings. Based on your analysis you can go reach them out to get their services." 
        },
        { 
            q: "How do I know how good are they in their specialization?", 
            a: "Read the profile of individual, his/her qualifications, achievements, teaching history, reviews from SS. Use this information and make a judgment and reach out to the individual." 
        },
        { 
            q: "I am taking a course and created my SS profile. I am also good in some areas and wanted to be a tutor/trainer. How do I do that?", 
            a: "Create a SP/trainer profile and publish your information. Prospective learners will go through your profile and will reach out to you for their learning needs. You need a separate profile for each." 
        }
    ];

    const faqServiceProviders = [
        { 
            q: "What is Talent-Share?", 
            a: "Talent-Share is a novel idea to solve a real-life problem. This site provides you with a platform to find experienced, skilled, working professionals, trainers, tutors, and SP for your learning requirements. All you need to do is to register yourself and look for these skilled, professional individuals in the industry who are willing to share their knowledge and experience, in their respective specialization. You contact them and start learning. It is that simple!!" 
        },
        { 
            q: "Why is Talent-Share?", 
            a: "With Talent-Share, you reach out to hundreds of working professionals, who are SP with working knowledge and that greatly enhances endorsing of knowledge from SP to SS." 
        },
        { 
            q: "How am I going to make a difference?", 
            a: "You are going to provide your skills, knowledge and experience to prospective seekers who wish to learn from you. Interested individuals will contact you to get your services and will reach out to you. You coordinate with them and provide them the services they need." 
        },
        { 
            q: "How do I get rewarded for my services?", 
            a: "You publish your service charges on your profile. Individuals or SS, who are interested in your subject and willing to pay for, will contact you." 
        },
        { 
            q: "How can I publish my profile?", 
            a: "Register yourself on this site as SP and start advertising your profile. Interested individuals will contact you." 
        },
        { 
            q: "What are the details that are to be mentioned on my profile?", 
            a: "Update your profile with all your information mentioned and fill up the columns. Provide your experience details, skills details and location and rate details and you are good to go." 
        },
        { 
            q: "How to reach out to prospective SS or SS?", 
            a: "By creating a SP profile." 
        },
        { 
            q: "How can I add value?", 
            a: "Customize your profile and highlight your special skills and talents where other people cannot match up to. That gives additional value to your profile." 
        },
        { 
            q: "How to get referred?", 
            a: "You can get referrals from those satisfied people who already got your services. These individuals should also be members of path2succeed to provide their feedback." 
        },
        { 
            q: "How to get good reviews?", 
            a: "That depends on how good your SS are satisfied with your skills." 
        },
        { 
            q: "How to make teaching/training as my full-time job?", 
            a: "By being an active member and constantly updating your profile and experience, course details, coming up class schedules, you can be a full time SP and make teaching a full-time profession." 
        },
        { 
            q: "How can I publish my profile?", 
            a: "You can create your custom profile and add all details about yourself. Also, you can have references of FB, LinkedIn, and Twitter in your profile which makes millions of people to reach you. This way you can advertise about your services and increase the number of individuals to reach out to you." 
        },
        { 
            q: "How do I get paid?", 
            a: "You provide services to individuals after they pay you. Your payment routes through Talent2share. Talent2Share ensures that you get your payment." 
        },
        { 
            q: "How does Talent-Share benefit?", 
            a: "Talent-Share benefits by charging SPs with a certain percentage." 
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
        <div className={cn(
            "min-h-screen transition-colors duration-500",
            isLight 
                ? "bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]" 
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
                            Talent-Share.com Project
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-4xl mx-auto"
                        >
                            A novel platform connecting experienced professionals with learners worldwide for knowledge sharing and skill development
                        </motion.p>
                    </motion.div>

                    {/* Project Introduction */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-20"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Project Introduction</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Talent-Share is a novel idea to solve a real life problem. This site provides you with a platform to find experienced, skilled, working professionals to train/ tutor/teach/guide/perfect you to fulfill your learning requirements. All you need to do is to register yourself and look for these skilled, professional individuals in the industry who are willing to share their knowledge and experience, in their respective specialization. You contact them and start learning. It is that simple!!
                                </p>
                                <p>
                                    There are thousands of working, experienced, skilled professionals who wish to share their knowledge and experience. The people listed here are working professionals in their respective domain. They are here to share their knowledge and experience to provide you with the best of what they know to make you perfect. Select the specialization you want and find out your SME (subject matter expert) local to your area to learn.
                                </p>
                                <p>
                                    You get a wide range of selection of people from various areas of specialization. You can learn sports, languages, software, social sciences, sciences, arts, communication, business, management, administration and many things which you need to be skilled in everyday life. It can be driving a car, or knowing how to perform banking, or speaking effectively or writing poetry. Anything can be learnt!! The possibilities are endless!!
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-[#00B483]/10 to-[#00B843]/10 rounded-2xl p-8 border border-[#00B483]/20"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Highlights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projectHighlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <highlight.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                                            <p className="text-gray-600 text-sm">{highlight.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Business Model & Revenue */}
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
                            Business Model & Revenue Projections
                        </motion.h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Project Phase</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-[#00B483]" />
                                        <span className="text-gray-600">Status: <strong>In Development</strong></span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <DollarSign className="w-5 h-5 text-[#00B483]" />
                                        <span className="text-gray-600">Pricing: <strong>Volume-based monthly charges</strong></span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Globe className="w-5 h-5 text-[#00B483]" />
                                        <span className="text-gray-600">User Base: <strong>Global, World-wide</strong></span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Sources</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <TrendingUp className="w-5 h-5 text-[#00B483]" />
                                        <span className="text-gray-600">Monthly charges and percentage on volume</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Target className="w-5 h-5 text-[#00B483]" />
                                        <span className="text-gray-600">Portal advertisements</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Shield className="w-5 h-5 text-[#00B483]" />
                                        <span className="text-gray-600">Low percentage charges on revenue</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-[#00B483]/10 to-[#00B843]/10 rounded-2xl p-8 border border-[#00B483]/20"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Revenue Projections</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {revenueProjections.map((projection, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 text-center">
                                        <h4 className="font-semibold text-gray-900 mb-2">{projection.period}</h4>
                                        <div className="text-2xl font-bold text-[#00B483] mb-2">{projection.revenue}/month</div>
                                        <div className="text-sm text-gray-600">{projection.users}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Technology Stack */}
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
                            Technology Stack
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {technologyStack.map((category, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl p-6 shadow-lg"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                                    <div className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-[#00B483] rounded-full"></div>
                                                <span className="text-gray-600 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Planned Upgrades */}
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
                            Planned Technology Upgrades
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {plannedUpgrades.map((upgrade, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <upgrade.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {upgrade.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {upgrade.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ Sections in 2-Column Layout */}
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
                            Frequently Asked Questions
                        </motion.h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* FAQ for Service Seekers */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <UserCheck className="w-6 h-6 text-[#00B483] mr-3" />
                                    For Service Seekers
                                </h3>
                                <div className="space-y-2">
                                    {faqServiceSeekers.map((faq, index) => (
                                        <FaqItem
                                            key={index}
                                            question={faq.q}
                                            answer={faq.a}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* FAQ for Service Providers */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Briefcase className="w-6 h-6 text-[#00B483] mr-3" />
                                    For Service Providers
                                </h3>
                                <div className="space-y-2">
                                    {faqServiceProviders.map((faq, index) => (
                                        <FaqItem
                                            key={index}
                                            question={faq.q}
                                            answer={faq.a}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-[#00B483] to-[#00B843] rounded-2xl p-12 text-white"
                        >
                            <h3 className="text-3xl font-bold mb-4">Ready to Experience Talent-Share?</h3>
                            <p className="text-white/90 mb-8 text-lg">
                                Join our platform and discover how it can transform your learning and professional development journey.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.talent-share.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-white text-[#00B483] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span>Visit Talent-Share.com</span>
                                </a>
                                <Link
                                    to="/#contact"
                                    className="inline-flex items-center space-x-2 bg-white/20 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    <span>Get in Touch</span>
                                    <Award className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

// FaqItem component for individual FAQ items
const FaqItem = React.forwardRef<
    HTMLDivElement,
    {
        question: string;
        answer: string;
        index: number;
    }
>((props, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { question, answer, index } = props;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className={cn(
                "group rounded-lg",
                "transition-all duration-200 ease-in-out",
                "border border-gray-200",
                "overflow-hidden",
                isOpen
                    ? "bg-gradient-to-br from-white via-gray-50 to-white"
                    : "hover:bg-gray-50"
            )}
        >
            <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent text-left flex items-start gap-3 min-h-[60px]"
            >
                <h3
                    className={cn(
                        "text-base font-medium transition-colors duration-200 text-left",
                        "text-gray-700",
                        isOpen && "text-gray-900",
                        "break-words flex-1 min-w-0"
                    )}
                    style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto',
                        whiteSpace: 'normal'
                    }}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "p-0.5 rounded-full flex-shrink-0 mt-0.5",
                        "transition-colors duration-200",
                        isOpen ? "text-[#00B483]" : "text-gray-500"
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </Button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: { duration: 0.2, ease: "easeOut" },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: { duration: 0.2, ease: "easeIn" },
                        }}
                    >
                        <div className="px-6 pb-4 pt-2">
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-sm text-gray-600 leading-relaxed break-words overflow-hidden"
                                style={{
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    hyphens: 'auto'
                                }}
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});
FaqItem.displayName = "FaqItem";
