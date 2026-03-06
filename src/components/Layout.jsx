import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToHash />
            <Navbar />
            <main className="flex-grow pt-20"> {/* Offset for the fixed Navbar */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
