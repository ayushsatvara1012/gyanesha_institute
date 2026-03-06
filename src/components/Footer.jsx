import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Linkedin, Facebook, Phone, Mail, Rss, MapPin, BookOpenText } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Column 1: Brand & Bio */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <BookOpenText className="w-8 h-8 text-amber-500" />
                            <span className="font-bold text-2xl tracking-tight text-white">GYanesha<span className="text-amber-500">.</span>Institute</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering future leaders since 2012. We provide excellence in education with expert guidance and proven methodologies for GSEB, CBSE, ICSE, and College levels.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-bold text-lg">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link to="/courses" className="hover:text-amber-500 transition-colors">Courses</Link></li>
                            <li><Link to="/faculties" className="hover:text-amber-500 transition-colors">Faculties</Link></li>
                            <li><Link to="/" className="hover:text-amber-500 transition-colors">Mock Test 2024</Link></li>
                            <li><Link to="/" className="hover:text-amber-500 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-bold text-lg">Contact Info</h3>
                        <ul className="flex flex-col gap-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                <span>Science City / Sola area, Ahmedabad</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <span>090330 01027</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <span>contact@gyanesha.edu.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social Connect */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-bold text-lg">Connect With Us</h3>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:scale-110">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="RSS Feed" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:scale-110">
                                <Rss className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Google Business" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-primary transition-all transform hover:scale-110">
                                <i className="fi fi-brands-google text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Gyanesha Institute. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
