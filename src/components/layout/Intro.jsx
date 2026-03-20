import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

/* ─── Animation phase timing (seconds) ──────────────────── */
const PHASES = {
    walk: { start: 0.2, end: 1.8 },
    sit: { start: 1.8, end: 2.8 },
    open: { start: 2.8, end: 3.8 },
    glow: { start: 3.6, end: 4.6 },
    type: { start: 4.2, end: 5.4 },
    reveal: { start: 5.4, end: 6.4 },
};

const ease = [0.43, 0.13, 0.23, 0.96];

/* ─── SVG Scene ──────────────────────────────────────────── */
const Scene = ({ phase }) => {
    const isWalking = phase === 'walk';
    const isSitting = phase === 'sit' || phase === 'open' || phase === 'glow' || phase === 'type';
    const isOpen = phase === 'open' || phase === 'glow' || phase === 'type';
    const isGlowing = phase === 'glow' || phase === 'type';

    return (
        <svg
            viewBox="0 0 800 450"
            className="w-full max-w-3xl"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity={isGlowing ? 0.8 : 0} />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity={isGlowing ? 0.6 : 0} />
                </linearGradient>
                <filter id="blur">
                    <feGaussianBlur stdDeviation="12" />
                </filter>
                <filter id="softShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.4" />
                </filter>
            </defs>

            {/* ── Floor line ── */}
            <line x1="0" y1="360" x2="800" y2="360" stroke="#222" strokeWidth="1" />

            {/* ── Desk ── */}
            {/* Legs */}
            <rect x="360" y="300" width="8" height="60" rx="2" fill="#1e1e1e" />
            <rect x="520" y="300" width="8" height="60" rx="2" fill="#1e1e1e" />
            {/* Top */}
            <rect x="340" y="285" width="200" height="18" rx="4" fill="url(#deskGrad)" />

            {/* ── Chair ── */}
            {/* Seat */}
            <rect x="370" y="332" width="100" height="12" rx="3" fill="#1a1a1a" />
            {/* Back */}
            <rect x="400" y="278" width="10" height="56" rx="3" fill="#1a1a1a" />
            <rect x="384" y="278" width="72" height="10" rx="3" fill="#1a1a1a" />
            {/* Chair legs */}
            <line x1="375" y1="344" x2="368" y2="362" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
            <line x1="465" y1="344" x2="472" y2="362" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />

            {/* ── Laptop body (closed until 'open' phase) ── */}
            {/* Base */}
            <rect x="388" y="278" width="112" height="8" rx="2" fill="#333" />

            {/* Laptop lid — rotates open */}
            <motion.g
                style={{ transformOrigin: '444px 278px' }}
                animate={{ rotateX: isOpen ? -110 : 0 }}
                transition={{ duration: 1, ease }}
            >
                {/* Lid face */}
                <rect x="388" y="216" width="112" height="62" rx="4" fill="#222" />
                {/* Apple-like logo on lid */}
                <circle cx="444" cy="247" r="8" fill="#333" />

                {/* Screen (visible when open) */}
                <motion.rect
                    x="394" y="222" width="100" height="50" rx="2"
                    animate={{ fill: isGlowing ? 'url(#screenGrad)' : '#111' }}
                    transition={{ duration: 0.8 }}
                />
                {/* Screen inner lines (code effect) */}
                {isGlowing && [0, 1, 2, 3].map(i => (
                    <motion.rect
                        key={i}
                        x="400" y={230 + i * 10} rx="2" height="4"
                        initial={{ width: 0 }}
                        animate={{ width: [0, 50 + i * 10] }}
                        transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                        fill="#A855F7"
                        opacity="0.6"
                    />
                ))}
            </motion.g>

            {/* ── Glow beneath laptop (screen spill) ── */}
            <motion.ellipse
                cx="444" cy="300" rx="80" ry="20"
                fill="url(#screenGlow)"
                filter="url(#blur)"
                animate={{ opacity: isGlowing ? 0.6 : 0 }}
                transition={{ duration: 0.8 }}
            />

            {/* ── Character (walking → seated) ── */}
            <motion.g
                animate={{
                    x: isWalking ? [- 300, 0] : 0,
                    y: isSitting ? 40 : 0,
                }}
                transition={{
                    x: { duration: 1.6, ease },
                    y: { duration: 0.8, ease, delay: 0 },
                }}
            >
                {/* Body */}
                <motion.g
                    animate={{ x: isWalking ? [0, 5, -5, 0] : 0 }}
                    transition={{ duration: 0.4, repeat: isWalking ? Infinity : 0 }}
                >
                    {/* Head */}
                    <circle cx="420" cy="205" r="18" fill="#555" />
                    {/* Neck */}
                    <rect x="416" y="222" width="8" height="8" fill="#555" />
                    {/* Torso */}
                    <rect x="400" y="228" width="40" height="44" rx="6" fill="#444" />
                    {/* Laptop carry arm (only when walking) */}
                    {isWalking && (
                        <motion.g
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            style={{ transformOrigin: '410px 240px' }}
                        >
                            {/* Upper arm */}
                            <line x1="400" y1="235" x2="384" y2="255" stroke="#555" strokeWidth="9" strokeLinecap="round" />
                            {/* Lower arm */}
                            <line x1="384" y1="255" x2="376" y2="272" stroke="#555" strokeWidth="8" strokeLinecap="round" />
                            {/* Carried laptop box */}
                            <rect x="357" y="265" width="30" height="18" rx="3" fill="#333" />
                        </motion.g>
                    )}
                    {/* Other arm */}
                    <motion.line
                        x1="440" y1="235"
                        x2={isWalking ? 456 : 452}
                        y2={isWalking ? 255 : 265}
                        stroke="#555" strokeWidth="9" strokeLinecap="round"
                        animate={{ x2: [456, 448, 456] }}
                        transition={{ duration: 0.5, repeat: isWalking ? Infinity : 0 }}
                    />

                    {/* Legs */}
                    <motion.g>
                        {/* Left leg */}
                        <motion.line
                            x1="412" y1="270"
                            x2={isSitting ? 396 : 406}
                            y2={isSitting ? 295 : 310}
                            stroke="#3a3a3a" strokeWidth="11" strokeLinecap="round"
                            animate={{ x2: isWalking ? [406, 398, 406] : isSitting ? 396 : 406, y2: isWalking ? [310, 298, 310] : isSitting ? 295 : 310 }}
                            transition={{ duration: 0.4, repeat: isWalking ? Infinity : 0 }}
                        />
                        {/* Right leg */}
                        <motion.line
                            x1="428" y1="270"
                            x2={isSitting ? 444 : 434}
                            y2={isSitting ? 295 : 310}
                            stroke="#3a3a3a" strokeWidth="11" strokeLinecap="round"
                            animate={{ x2: isWalking ? [434, 442, 434] : isSitting ? 444 : 434, y2: isWalking ? [310, 298, 310] : isSitting ? 295 : 310 }}
                            transition={{ duration: 0.4, repeat: isWalking ? Infinity : 0, delay: 0.2 }}
                        />
                    </motion.g>
                </motion.g>
            </motion.g>
        </svg>
    );
};

/* ─── Typewriter text on laptop screen ───────────────────── */
const lines = ['> const me = "Ankit"', '> stack: "MERN"', '> status: "ready"'];
const ScreenText = ({ active }) => {
    const [shown, setShown] = useState(0);
    useEffect(() => {
        if (!active) return;
        const t = setInterval(() => setShown(s => Math.min(s + 1, lines.length)), 600);
        return () => clearInterval(t);
    }, [active]);
    return (
        <div className="font-mono text-[11px] leading-relaxed text-left">
            {lines.slice(0, shown).map((l, i) => (
                <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">
                    {l}
                </motion.p>
            ))}
            {shown < lines.length && <span className="inline-block w-2 h-3 bg-purple-400 animate-pulse" />}
        </div>
    );
};

/* ─── Main Intro component ───────────────────────────────── */
const Intro = ({ onComplete }) => {
    const [phase, setPhase] = useState('walk');
    const [done, setDone] = useState(false);

    useEffect(() => {
        const schedule = [
            [PHASES.sit.start * 1000, () => setPhase('sit')],
            [PHASES.open.start * 1000, () => setPhase('open')],
            [PHASES.glow.start * 1000, () => setPhase('glow')],
            [PHASES.type.start * 1000, () => setPhase('type')],
            [PHASES.reveal.start * 1000, () => setDone(true)],
        ];
        const timers = schedule.map(([ms, fn]) => setTimeout(fn, ms));
        return () => timers.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        if (done) {
            const t = setTimeout(onComplete, 900);
            return () => clearTimeout(t);
        }
    }, [done, onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="intro"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background grid */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />

                    {/* Ambient glow */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full bg-accent-purple/10 blur-[120px]"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Scene */}
                    <div className="relative z-10 flex flex-col items-center gap-8 px-6">
                        <Scene phase={phase} />

                        {/* Status label */}
                        <motion.p
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-xs font-mono uppercase tracking-[0.35em] text-white/40"
                        >
                            {phase === 'walk' && 'Entering the workspace...'}
                            {phase === 'sit' && 'Getting comfortable...'}
                            {phase === 'open' && 'Opening the laptop...'}
                            {(phase === 'glow' || phase === 'type') && 'Booting up...'}
                        </motion.p>
                    </div>

                    {/* Skip button */}
                    <button
                        onClick={() => { setDone(true); }}
                        className="absolute bottom-8 right-8 text-xs text-white/25 hover:text-white/70 font-mono uppercase tracking-widest transition-colors"
                    >
                        Skip →
                    </button>

                    {/* Progress bar */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-premium-gradient"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: PHASES.reveal.start, ease: 'linear' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Intro;
