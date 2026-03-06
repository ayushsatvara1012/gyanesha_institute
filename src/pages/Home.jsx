import React from 'react';
import Hero from '../components/Hero';
import CourseCatalog from '../components/CourseCatalog';
import Testimonials from '../components/Testimonials';
import { BookOpen, Users, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Hero />
            {/* The 3 Pillars Section Redesign - Switch to White for contrast */}
            <section className="py-20 bg-white relative overflow-hidden" id="about">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
                        >
                            Our Philosophy
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
                        >
                            The 3 Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Gyanesha</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
                        >
                            Our core philosophy isn't just a statement — it's the engine that drives student transformation and academic excellence.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                title: 'Connect',
                                desc: 'Building genuine rapport with every student to understand their unique learning style and engagement triggers.',
                                icon: Users,
                                color: 'from-blue-500 to-indigo-600'
                            },
                            {
                                title: 'Collaborate',
                                desc: 'Creating a synergistic environment where students and mentors work together towards a common goal of mastery.',
                                icon: Compass,
                                color: 'from-amber-400 to-orange-600'
                            },
                            {
                                title: 'Transform',
                                desc: '"When you know better, you do better." We focus on measurable progress that transforms academic potential into reality.',
                                icon: BookOpen,
                                color: 'from-emerald-500 to-teal-600'
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                            >
                                {/* Sequential Numbering */}
                                <div className="absolute top-8 right-10 text-6xl font-black text-slate-50 group-hover:text-primary/5 transition-colors duration-300 pointer-events-none">
                                    0{i + 1}
                                </div>

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} p-4 mb-8 shadow-lg shadow-primary/20 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                                    <pillar.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {pillar.desc}
                                </p>

                                {/* Decorative bar */}
                                <div className="mt-8 w-12 h-1.5 rounded-full bg-slate-100 overflow-hidden group-hover:w-full transition-all duration-300">
                                    <div className={`h-full w-full bg-gradient-to-r ${pillar.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Course Catalog - Keep Slate to alternate */}
            <CourseCatalog />
            {/* Testimonials - Switch to White to alternate */}
            <Testimonials />
        </>
    );
};

export default Home;
