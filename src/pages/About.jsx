import React from 'react';
import { motion } from 'framer-motion';
import { Users, Compass, BookOpen, Target, Heart, Award, CheckCircle2, Quote, Star, ArrowRight } from 'lucide-react';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const expertiseItems = [
        "Student Engagement",
        "Continuous Evaluation program",
        "Active Responses",
        "Regular Feed-back",
        "Gyanesha Institute Teaching Methodology",
        "Success"
    ];

    return (
        <div className="bg-white">
            {/* Hero Section: The Origin (Redesigned to match Homepage Style) */}
            <section className="relative bg-slate-50 overflow-hidden min-h-[90vh] flex items-center">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                    <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                    <div className="w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <motion.div
                            {...fadeIn}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                            >
                                <Star className="w-4 h-4 text-accent fill-accent" />
                                <span className="text-sm font-semibold text-slate-700">The Legend Since 2012</span>
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                                The Story of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light uppercase tracking-tight">
                                    Gyanesha
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Founded on March 1st, 2012, by <strong>Mr. Hitarth S Gajjar</strong>, our institute emerged with a singular vision: to revolutionize coaching for GSEB, ICSE, and CBSE students through personalized mastery.
                            </p>

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8">
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">12+</p>
                                    <p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-wider">Years Active</p>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">5k+</p>
                                    <p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-wider">Success Stories</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content: Modern Floating Images */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl border-8 border-white">
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/006/817/039/small/educational-equipment-boards-and-books-education-concept-with-copy-space-photo.jpg"
                                    alt="Institute Campus"
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute top-8 right-8 text-white">
                                    <div className="font-bold text-2xl">Modern Learning</div>
                                    <div className="text-white/80">Campus Environment</div>
                                </div>
                            </div>

                            {/* Floating Detail Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div className="text-sm font-bold text-slate-800 leading-tight">
                                        Professional <br /><span className="text-primary">Coaching Standard</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bento Grid: Optimized Spacing and White Background */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* 1. Leadership Card - Full Width at Top */}
                        <motion.div
                            {...fadeIn}
                            className="lg:col-span-3 bg-[#f8fafc] rounded-[3rem] p-10 lg:p-14 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group"
                        >
                            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                        alt="Mr. Hitarth S Gajjar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 flex-grow text-center md:text-left">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 mb-6 font-bold text-xs uppercase tracking-widest text-slate-500">
                                    The Leadership
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Mr. Hitarth S Gajjar</h3>
                                <p className="text-primary font-bold text-lg mb-6 tracking-wide">CFO & Founder Director</p>

                                <div className="mb-8 max-w-3xl">
                                    <Quote className="w-10 h-10 text-primary/10 mb-4 mx-auto md:mx-0" />
                                    <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight mb-4 italic">
                                        "When you know better, <span className="text-primary">you do better.</span>"
                                    </p>
                                    <p className="text-slate-500 leading-relaxed font-medium text-lg">
                                        In today's competitive landscape, smart work is the differentiator. At Gyanesha, we make your academic dreams our primary goal through individualized attention and proven success methodologies.
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2 mx-auto md:mx-0"
                                >
                                    Read Full Message <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* 2. Side Stack: Vision & Mission (Vertical Left) */}
                        <div className="flex flex-col gap-8">
                            {/* Vision Card */}
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.1 }}
                                className="bg-primary/[0.03] border border-primary/10 rounded-[3rem] p-10 flex flex-col justify-between group hover:bg-primary/5 transition-colors duration-500 flex-grow"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
                                    <Target className="text-primary w-8 h-8 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        Building fine connections with students, fostering excellence in coordination with parents, and achieving "Gyanesha's Excellence."
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mission Card */}
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.2 }}
                                className="bg-accent/[0.03] border border-accent/10 rounded-[3rem] p-10 flex flex-col justify-between group hover:bg-accent/5 transition-colors duration-500 flex-grow"
                            >
                                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent transition-colors duration-500">
                                    <Heart className="text-accent w-8 h-8 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        To outstrip up-skilled students, pledging for educational betterment, and creating exceptional inspiration.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. Methodology Card (Occupies 2 columns on Desktop) */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden group shadow-2xl flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 flex-grow">
                                <h3 className="text-3xl font-extrabold mb-10 leading-tight">
                                    Our Professional <br /><span className="text-accent">Methodology</span>
                                </h3>

                                <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
                                    {expertiseItems.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group/item bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col items-start gap-3 hover:bg-white/10 hover:border-accent/40 transition-all duration-500 relative overflow-hidden w-full sm:w-auto sm:min-w-[200px] flex-grow lg:flex-grow-0"
                                        >
                                            <div className="absolute -bottom-2 -right-2 text-7xl md:text-8xl font-black text-white/5 group-hover/item:text-accent/10 transition-colors duration-500 pointer-events-none uppercase italic">
                                                {idx + 1}
                                            </div>

                                            <span className="text-xs md:text-sm font-bold text-white/90 leading-tight relative z-10 uppercase tracking-widest">
                                                {item}
                                            </span>

                                            <div className="w-8 h-1 bg-accent/30 rounded-full mt-2 group-hover/item:w-full transition-all duration-500"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Three Pillars - Slate background for contrast */}
            <section className="py-20 bg-slate-50" id="pillars">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">The Three Pillars</motion.h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">The foundation of every student's journey at Gyanesha Institute.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: 'Connect', desc: 'Connecting with students to build rapport and enhance engagement.', icon: Users, color: 'text-primary' },
                            { title: 'Collaborate', desc: 'Inspiring students to work together in small groups toward success.', icon: Compass, color: 'text-accent' },
                            { title: 'Transform', desc: 'Focusing on achievement and ultimate academic progress.', icon: BookOpen, color: 'text-emerald-500' }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 text-center"
                            >
                                <div className={`w-20 h-20 mx-auto rounded-3xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group`}>
                                    <pillar.icon className={`w-10 h-10 ${pillar.color}`} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{pillar.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
