import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const toggleMobileDropdown = (menu) => {
        setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    };

    return (
        <nav className="fixed top-0 w-full glass-nav bg-white backdrop-blur-md z-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-3">
                        <Link to="/" onClick={closeMobileMenu}>
                            <img src={logo} alt="Gyanesha Institute Logo" className="h-10 md:h-12 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {/* About Us Dropdown */}
                        <div className="relative group relative-menu-wrapper">
                            <Link to="/about" className="text-slate-600  text-sm hover:text-amber-500 transition-colors font-medium py-2 flex items-center gap-1 focus:outline-none">
                                About Us
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-56 z-50">
                                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 flex flex-col gap-1">
                                    <Link to="/#about" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">Vision & Mission</Link>
                                    <Link to="/about" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">Director's Message</Link>
                                    <Link to="/about" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">Expertise</Link>
                                </div>
                            </div>
                        </div>

                        {/* Courses Dropdown */}
                        <div className="relative group relative-menu-wrapper">
                            <Link to="/courses" className="text-slate-600 text-sm hover:text-amber-500 transition-colors font-medium py-2 flex items-center gap-1 focus:outline-none">
                                Courses
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-64 z-50">
                                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 flex flex-col gap-1">
                                    <Link to="/courses" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">School Coaching</Link>
                                    <Link to="/courses" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">Commerce Coaching</Link>
                                    <Link to="/courses" className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">Information Technology</Link>
                                </div>
                            </div>
                        </div>

                        <Link to="/faculties" className="text-slate-600 text-sm hover:text-amber-500 transition-colors font-medium">Faculties</Link>
                        <Link to="/#testimonials" className="text-slate-600 text-sm hover:text-amber-500 transition-colors font-medium">Testimonials</Link>
                        <Link to="/" className="text-slate-600 text-sm hover:text-amber-500 transition-colors font-medium">Careers</Link>
                        <Link to="/" className="text-slate-600 text-sm hover:text-amber-500 transition-colors font-medium">Blog</Link>
                    </div>

                    <div className="hidden lg:flex gap-4">
                        <Link to="/contact" className="border border-primary-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
                            Inquire Now
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-slate-600 hover:text-amber-500 transition-colors focus:outline-none p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto border-b border-slate-100 py-4 px-4 flex flex-col gap-2 z-40">

                    {/* About Us Accordion */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleMobileDropdown('about')}
                            className="flex items-center justify-between py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors"
                        >
                            About Us
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'about' ? '-rotate-180 text-amber-500' : 'text-slate-400'}`} />
                        </button>
                        <div className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ${openMobileDropdown === 'about' ? 'max-h-48 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                            <Link to="/#about" onClick={closeMobileMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-3 transition-colors">Vision & Mission</Link>
                            <Link to="/about" onClick={closeMobileMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-3 transition-colors">Director's Message</Link>
                            <Link to="/about" onClick={closeMobileMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-3 transition-colors">Expertise</Link>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100"></div>

                    {/* Courses Accordion */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleMobileDropdown('courses')}
                            className="flex items-center justify-between py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors"
                        >
                            Courses
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'courses' ? '-rotate-180 text-amber-500' : 'text-slate-400'}`} />
                        </button>
                        <div className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ${openMobileDropdown === 'courses' ? 'max-h-48 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                            <Link to="/courses" onClick={closeMobileMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-3 transition-colors">School Coaching</Link>
                            <Link to="/courses" onClick={closeMobileMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-3 transition-colors">Commerce Coaching</Link>
                            <Link to="/courses" onClick={closeMobileMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-3 transition-colors">Information Technology</Link>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100"></div>

                    <Link to="/faculties" onClick={closeMobileMenu} className="block py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors">Faculties</Link>
                    <Link to="/#testimonials" onClick={closeMobileMenu} className="block py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors">Testimonials</Link>
                    <Link to="/" onClick={closeMobileMenu} className="block py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors">Careers</Link>
                    <Link to="/" onClick={closeMobileMenu} className="block py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors">Blog</Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="block py-3 text-slate-800 font-medium hover:text-amber-500 transition-colors">Contact Us</Link>

                    <Link to="/contact" onClick={closeMobileMenu} className="text-center border border-primary-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
                        Inquire Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
