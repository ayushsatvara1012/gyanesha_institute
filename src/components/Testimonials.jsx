import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Krishna",
        review: "Best teaching method ever! can understand any theory with best examples!",
        location: "Student, Ahmedabad",
        rating: 5
    },
    {
        name: "Krupa Radadiya",
        review: "We can easily understand the core of any hard topic…with best live example…",
        location: "Student, Ahmedabad",
        rating: 5
    },
    {
        name: "Karan Kansara",
        review: "One of the best coaching class I've come across in my career.. Perfect Explanation, Co-operation from the staff. And always helpful.",
        location: "Student, Ahmedabad",
        rating: 5
    },
    {
        name: "Yash",
        review: "I have a been studying in this institute from last two years I had an amazing experience studying here.. The staff is very helpful and friendly.",
        location: "Student, Ahmedabad",
        rating: 5
    },
    {
        name: "Hiral",
        review: "My daughter is studing in 9th CBSE , she was joined this institute in last year its a best coaching class with good faculties and co operative staff.",
        location: "Student, Ahmedabad",
        rating: 5
    },
    {
        name: "Maulik",
        review: "I had studied in this institute for more than 3 years in ICSE Board and it has been great experience with Hitarth Sir.",
        location: "Student, Ahmedabad",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);

    // Responsive items per view
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(reviews.length / itemsPerView);

    // Auto-play logic: Starts after 3 seconds, then transitions every 5 seconds
    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 3000);

        return () => clearTimeout(startTimeout);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, []);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section className="py-20 bg-white overflow-hidden relative" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
                        >
                            Student Success
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                        >
                            Voices of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light uppercase tracking-tight">Students</span>
                        </motion.h2>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <div className="flex flex-col items-end">
                            <div className="flex gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fi fi-brands-google text-[#4285F4] text-lg"></i>
                                <span className="text-sm font-bold text-slate-900">5/5 Rating</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => { setIsAutoPlaying(false); handlePrev(); }}
                                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => { setIsAutoPlaying(false); handleNext(); }}
                                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Container with Smooth Sliding Transitions */}
                <div className="relative min-h-[420px] px-2 overflow-visible">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full"
                        >
                            {[0, 1, 2].slice(0, itemsPerView).map((offset) => {
                                const index = (currentIndex + offset) % reviews.length;
                                const item = reviews[index];

                                return (
                                    <motion.div
                                        key={index}
                                        layout
                                        className="bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-start transition-all duration-500 hover:shadow-2xl hover:bg-white border-b-8 border-b-transparent hover:border-b-primary group h-full"
                                    >
                                        <div className="flex items-center gap-4 mb-8 w-full">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary text-xl font-black border border-slate-100 uppercase group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-slate-900 font-bold text-lg mb-0.5">{item.name}</h4>
                                                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">{item.location}</p>
                                            </div>
                                            <div className="p-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                                                <i className="fi fi-brands-google text-primary text-lg"></i>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                                            ))}
                                        </div>

                                        <p className="text-slate-600 font-medium leading-relaxed italic mb-8 flex-grow">
                                            "{item.review}"
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-slate-200 w-full flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Account</span>
                                            </div>
                                            <Quote className="w-8 h-8 text-slate-100 group-hover:text-primary/10 transition-colors" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots (Calculated based on itemsPerView) */}
                <div className="mt-16 flex justify-center gap-4">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-10 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </section>
    );
};

export default Testimonials;
