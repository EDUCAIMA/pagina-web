import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingAvatar from './FloatingAvatar';

const Layout = ({ children }) => (
    <div className="min-h-screen bg-vx-base flex flex-col text-vx-text">
        <Navbar />
        <main className="flex-grow pt-16">
            {children}
        </main>
        <Footer />
        <FloatingAvatar />
    </div>
);

export default Layout;
