import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Terminal, LayoutTemplate, Server, Database } from 'lucide-react';

const DataStream = () => {
    return (
        <div className="absolute inset-0 flex flex-col gap-1.5 p-2 opacity-60">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="h-1.5 rounded-full bg-gradient-to-r from-yellow-500/40 to-yellow-500/10"
                    animate={{ 
                        width: ['30%', '90%', '40%'],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 2 + Math.random() * 2, 
                        repeat: Infinity, 
                        ease: 'linear',
                        delay: Math.random()
                    }}
                />
            ))}
        </div>
    );
};

const FloatingTechNodes = () => {
    return (
        <div className="relative w-full max-w-[500px] h-[400px] sm:h-[500px] flex items-center justify-center -mt-10 lg:mt-0">
            {/* Center Core */}
            <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
                {/* Background SVG connections */}
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none" viewBox="0 0 500 500">
                    <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                        d="M 125 150 Q 250 250 375 250 T 400 350 M 125 350 Q 250 250 375 150"
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="2"
                        strokeDasharray="4 4" 
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="relative w-full h-full max-w-[450px]">
                    
                    {/* Frontend Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.5 },
                            x: { duration: 0.8, delay: 0.5 },
                            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } 
                        }}
                        className="absolute top-[10%] left-[5%] w-[60%] sm:w-[55%] p-4 sm:p-5 glass-morphism rounded-2xl border border-white/10 shadow-2xl shadow-accent-purple/20 backdrop-blur-md z-20 hover:scale-105 transition-transform cursor-default"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue shadow-lg shadow-accent-blue/10">
                                <LayoutTemplate size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Frontend Core</h3>
                                <p className="text-white/40 text-xs">React • Tailwind • Redux</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }} 
                                    animate={{ width: '95%' }} 
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-full bg-accent-blue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                                />
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }} 
                                    animate={{ width: '85%' }} 
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                    className="h-full bg-accent-purple rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.7 },
                            x: { duration: 0.8, delay: 0.7 },
                            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 } 
                        }}
                        className="absolute bottom-[10%] left-[8%] w-[55%] sm:w-[50%] p-4 glass-morphism rounded-2xl border border-white/10 shadow-2xl shadow-green-500/10 backdrop-blur-md z-30 hover:scale-105 transition-transform cursor-default"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shadow-lg shadow-green-500/10">
                                <Server size={16} />
                            </div>
                            <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                Server
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                            </h3>
                        </div>
                        <div className="text-xs text-white/60 font-mono space-y-1">
                            <p className="flex justify-between items-center bg-white/5 rounded px-2 py-1"><span>Status</span> <span className="text-green-400">Optimal</span></p>
                            <p className="flex justify-between items-center bg-white/5 rounded px-2 py-1"><span>Ping</span> <span className="text-white">12ms</span></p>
                        </div>
                    </motion.div>

                    {/* Database Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20, y: 0 }}
                        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.9 },
                            x: { duration: 0.8, delay: 0.9 },
                            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } 
                        }}
                        className="absolute top-[25%] right-[2%] w-[45%] h-[50%] sm:h-[55%] p-4 sm:p-5 glass-morphism rounded-2xl border border-white/10 shadow-2xl shadow-yellow-500/10 backdrop-blur-md flex flex-col z-10 hover:scale-105 transition-transform cursor-default"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-500 shadow-lg shadow-yellow-500/10">
                                <Database size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Database</h3>
                                <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">MongoDB</p>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-black/40 rounded-xl border border-white/5 p-2 overflow-hidden relative shadow-inner">
                            <DataStream />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const { scrollY } = useScroll();
    
    // Parallax effects tied to scroll
    const heroY = useTransform(scrollY, [0, 800], [0, 250]);
    const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

    const texts = [
        "Building Scalable Web Apps",
        "MERN Stack Specialist",
        "Turning Ideas into Code",
        "Open Source Enthusiast",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden relative">
            <motion.div 
                style={{ y: heroY, opacity: heroOpacity }}
                className="max-w-7xl mx-auto px-6 w-full"
            >
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 inline-flex items-center gap-2"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="px-4 py-2 rounded-full glass-morphism text-xs font-semibold tracking-widest uppercase text-green-400">
                                Available for hire
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
                        >
                            Ankit{' '}
                            <span className="accent-gradient relative">
                                Meena
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-premium-gradient rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                />
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl font-medium text-white/80 mb-8 h-9 overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-glow"
                                >
                                    {texts[textIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="max-w-lg mx-auto lg:mx-0 text-base text-white/50 mb-10 leading-relaxed"
                        >
                            Full Stack Developer & 3rd Year B.Tech CSE Student specialising in the MERN stack. Passionate about building scalable, real-world applications.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.75 }}
                            className="flex items-center justify-center lg:justify-start gap-8 mb-10"
                        >
                            {[
                                { label: 'Projects', value: '10+' },
                                { label: 'LeetCode', value: '150+' },
                                { label: 'GFG', value: '100+' },
                            ].map((s) => (
                                <div key={s.label} className="text-center lg:text-left">
                                    <p className="text-2xl font-black accent-gradient">{s.value}</p>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">{s.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <button
                                onClick={() => handleScroll('projects')}
                                className="px-8 py-4 bg-premium-gradient rounded-full font-bold shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:scale-105 transition-all flex items-center group"
                            >
                                View Projects
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button
                                onClick={() => handleScroll('contact')}
                                className="px-8 py-4 glass-morphism rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all"
                            >
                                Contact Me
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT — Interactive Code Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                        className="order-1 lg:order-2 flex justify-center relative"
                    >
                        {/* Glow backdrops */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-purple/15 blur-[100px] rounded-full animate-float pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-accent-blue/10 blur-[80px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '-2s' }} />

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10 w-full max-w-[500px]"
                        >
                            {/* Floating Tech Dashboard */}
                            <FloatingTechNodes />

                            {/* Floating tag badges */}
                            <motion.div
                                animate={{ y: [0, 14, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-5 -right-5 px-4 py-2 glass-morphism rounded-xl text-xs font-bold text-accent-blue shadow-lg border border-accent-blue/20"
                            >
                                ⚡ MERN Stack
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -14, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 px-4 py-2 glass-morphism rounded-xl text-xs font-bold text-accent-purple shadow-lg border border-accent-purple/20"
                            >
                                🚀 Open to Work
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, 8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
                                className="absolute top-1/2 -left-8 px-3 py-1.5 glass-morphism rounded-lg text-[10px] font-bold text-green-400 shadow-lg border border-green-400/20"
                            >
                                ✓ Available
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
