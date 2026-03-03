import React from 'react';
import Navbar from './Navbar';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen text-white">
            <Background />
            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
