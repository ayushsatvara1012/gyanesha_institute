import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Code, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

const tabs = [
    { id: 'school', label: 'School Coaching', icon: GraduationCap },
    { id: 'commerce', label: 'Commerce', icon: Briefcase },
    { id: 'it', label: 'IT & Certified', icon: Code },
];

const coursesData = {
    school: [
        { title: 'Primary (4th - 7th)', desc: 'Building strong fundamentals.', features: ['Personalized Attention', 'Regular Assessments', 'Interactive Learning'] },
        { title: 'Secondary (8th - 10th)', desc: 'Board exam preparation.', features: ['GSEB, CBSE, ICSE', 'Mock Tests Series', 'Doubt Solving Sessions'] },
        { title: 'Higher Secondary (11th - 12th)', desc: 'Specialized coaching for peak performance.', features: ['Expert Faculty', 'Comprehensive Material', 'Career Guidance'] },
    ],
    commerce: [
        { title: 'B.Com / M.Com', desc: 'Master in Commerce degrees.', features: ['Accountancy', 'Economics', 'Business Law'] },
        { title: 'B.B.A / MBA', desc: 'Business Administration coaching.', features: ['Management Principles', 'Financial Analysis', 'Case Studies'] },
    ],
    it: [
        { title: 'BCA / MCA', desc: 'Computer Applications.', features: ['Programming Logic', 'Database Management', 'Software Engineering'] },
        { title: 'Certified Courses', desc: 'Skill-based short courses.', features: ['PHP Web Development', 'MS Office Mastery', 'Tally ERP 9'] },
    ]
};

const CourseCatalog = () => {
    const [activeTab, setActiveTab] = useState('school');

    return (
        <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Our Diverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Course Offerings</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        Tailored programs designed to meet the academic needs of every student.
                    </motion.p>
                </div>

                {/* Custom Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute inset-0 bg-primary rounded-full shadow-md"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <tab.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`grid gap-8 w-full ${coursesData[activeTab].length === 2
                                    ? 'grid-cols-1 md:grid-cols-2 lg:max-w-5xl mx-auto'
                                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                }`}
                        >
                            {coursesData[activeTab].map((course, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col items-start w-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 pointer-events-none"></div>

                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <BookOpen className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                                    <p className="text-slate-500 mb-4 leading-relaxed flex-grow text-lg">{course.desc}</p>

                                    <div className="w-full space-y-4 mb-10">
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 ml-1">Key Highlights</p>
                                        {course.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-slate-600 font-medium group/item">
                                                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-accent group-hover:text-white" />
                                                </div>
                                                <span className="text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 rounded-2xl text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 group/btn">
                                        <span>Explore Details</span>
                                        <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CourseCatalog;
