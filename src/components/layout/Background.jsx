import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    const particles = useMemo(() =>
        Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 12 + 8,
            delay: Math.random() * 6,
        }))
        , []);

    /* Randomly positioned grid lines */
    const gridLines = useMemo(() =>
        Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            left: `${10 + i * 12}%`,
        }))
        , []);

    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Large ambient blobs */}
            <motion.div
                className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-accent-purple/15 blur-[150px] rounded-full"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-accent-blue/15 blur-[150px] rounded-full"
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-[40%] right-[10%] w-[25%] h-[25%] bg-cyan-600/10 blur-[100px] rounded-full"
                animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />

            {/* Floating particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        top: p.top,
                    }}
                    animate={{ y: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Vertical scan line animation */}
            <motion.div
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-purple/30 to-transparent"
                animate={{ left: ['-5%', '105%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
            />

            {/* Grainy texture overlay */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default Background;
