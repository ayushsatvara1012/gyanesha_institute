import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

const Hero = () => {
    return (
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                        >
                            <Star className="w-4 h-4 text-accent fill-accent" />
                            <span className="text-sm font-semibold text-slate-700">Established in 2012</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Committed to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                                Excellence
                            </span> in Education.
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Empowering students from GSEB, CBSE, ICSE, and College levels to achieve their academic goals with expert guidance and proven methodologies.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                            >
                                Explore Courses
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                <PlayCircle className="w-5 h-5 text-accent" />
                                Take Mock Test 2024
                            </motion.button>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">12+</p>
                                <p className="text-sm text-slate-500 font-medium mt-1">Years of Excellence</p>
                            </div>
                            <div className="w-px h-12 bg-slate-200"></div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">5k+</p>
                                <p className="text-sm text-slate-500 font-medium mt-1">Students Mentored</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content / Image (Dynamic Layout) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative hidden md:block"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                                alt="Students studying together"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Student ${i}`} />
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-slate-800 leading-tight">
                                    Join 5000+ <br /><span className="text-primary font-medium">Successful Students</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
