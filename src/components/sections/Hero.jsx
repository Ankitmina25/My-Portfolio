import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
        "Building Scalable Web Applications",
        "MERN Stack Specialist",
        "Turning Ideas into Code"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 inline-block"
                        >
                            <span className="px-4 py-2 rounded-full glass-morphism text-xs font-semibold tracking-widest uppercase text-accent-blue">
                                Available for hire
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
                        >
                            Ankit <span className="accent-gradient">Meena</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl font-medium text-white/80 mb-8 h-8"
                        >
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
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
                            className="max-w-2xl mx-auto lg:mx-0 text-lg text-white/60 mb-10 leading-relaxed"
                        >
                            Full Stack Developer & Software Developer | 3rd Year B.Tech CSE Student | MERN Stack Developer
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <button className="px-8 py-4 bg-premium-gradient rounded-full font-bold shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:scale-105 transition-all flex items-center group">
                                View Projects
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 glass-morphism rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all">
                                Contact Me
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Image (Anime Character) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center relative"
                    >
                        {/* Animated Glow Backdrops */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-purple/20 blur-[100px] rounded-full animate-float pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent-blue/10 blur-[80px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '-2s' }} />

                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 w-full max-w-[500px] aspect-square"
                        >
                            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-accent-purple/20 group">
                                <img
                                    src="/assets/anime-character.png"
                                    alt="Ankit Meena Avatar"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                {/* Micro-glow effect on hover around eyes area */}
                                <div className="absolute top-[30%] left-[40%] w-20 h-20 bg-accent-blue/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            {/* Floating tech elements (bubbles) */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-6 -right-6 px-4 py-2 glass-morphism rounded-xl text-xs font-bold text-accent-blue shadow-lg"
                            >
                                MERN
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 px-4 py-2 glass-morphism rounded-xl text-xs font-bold text-accent-purple shadow-lg"
                            >
                                React
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
