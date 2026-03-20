import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu } from 'lucide-react';

const skills = [
    { label: 'Frontend Development', level: 90, color: '#A855F7' },
    { label: 'Backend Development', level: 82, color: '#3B82F6' },
    { label: 'Database Design', level: 78, color: '#06B6D4' },
    { label: 'Problem Solving', level: 88, color: '#A855F7' },
];

const cards = [
    {
        icon: <Code2 size={28} />,
        title: 'Frontend',
        desc: 'React, HTML, CSS, Tailwind — building pixel-perfect UIs',
        color: 'from-purple-500/20 to-purple-500/5',
        border: 'border-purple-500/30',
        glow: 'rgba(168,85,247,0.3)',
    },
    {
        icon: <Database size={28} />,
        title: 'Backend',
        desc: 'Node.js, Express, Docker — building scalable systems',
        color: 'from-blue-500/20 to-blue-500/5',
        border: 'border-blue-500/30',
        glow: 'rgba(59,130,246,0.3)',
    },
    {
        icon: <Globe size={28} />,
        title: 'Database',
        desc: 'MongoDB, SQL, DBMS — scalable data models',
        color: 'from-cyan-500/20 to-cyan-500/5',
        border: 'border-cyan-500/30',
        glow: 'rgba(6,182,212,0.3)',
    },
    {
        icon: <Cpu size={28} />,
        title: 'Logic & Arch',
        desc: 'C++, DSA, OOPs, OS — algorithmic thinking',
        color: 'from-emerald-500/20 to-emerald-500/5',
        border: 'border-emerald-500/30',
        glow: 'rgba(52,211,153,0.3)',
    },
];

const SkillBar = ({ label, level, color, delay }) => (
    <div>
        <div className="flex justify-between mb-2">
            <span className="text-sm text-white/70 font-medium">{label}</span>
            <span className="text-sm font-bold" style={{ color }}>{level}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(to right, ${color}, ${color}88)` }}
            />
        </div>
    </div>
);

const About = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.4em] text-accent-purple mb-3"
                    >
                        Get to know me
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black"
                    >
                        About <span className="accent-gradient">Me</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT — Bio + Skill Bars */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-5 text-white/60 leading-relaxed mb-12">
                            <p className="text-lg">
                                Hi, I'm <span className="text-white font-bold">Ankit Meena</span> — a passionate{' '}
                                <span className="text-accent-purple font-semibold">Full Stack Developer</span> currently
                                in my 3rd year of B.Tech in Computer Science.
                            </p>
                            <p>
                                I specialise in the <span className="text-accent-blue font-semibold">MERN stack</span> and
                                love architecting scalable applications that solve real-world problems. Every line of code
                                I write is driven by curiosity and a desire to ship polished products.
                            </p>
                            <p>
                                Outside of coding, I grind DSA consistently — 150+ problems on LeetCode and 100+ on GFG
                                — keeping my logical thinking sharp.
                            </p>
                        </div>

                        {/* Skill Bars */}
                        <div className="space-y-5">
                            {skills.map((s, i) => (
                                <SkillBar key={s.label} {...s} delay={0.2 + i * 0.1} />
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Interactive Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {cards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                onHoverStart={() => setHoveredCard(i)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className={`relative p-6 rounded-2xl border bg-gradient-to-br cursor-default overflow-hidden transition-all duration-300 ${card.color} ${card.border}`}
                                style={{
                                    boxShadow: hoveredCard === i ? `0 10px 40px ${card.glow}` : 'none',
                                }}
                            >
                                <motion.div
                                    className="mb-4"
                                    style={{ color: card.border.replace('border-', '').replace('/30', '') }}
                                    animate={{ rotate: hoveredCard === i ? [0, -10, 10, 0] : 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {card.icon}
                                </motion.div>
                                <h4 className="text-lg font-bold mb-2 text-white">{card.title}</h4>
                                <p className="text-xs text-white/50 leading-relaxed">{card.desc}</p>

                                {/* Decorative corner glow */}
                                <div
                                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-20 blur-xl"
                                    style={{ background: card.glow }}
                                />
                            </motion.div>
                        ))}

                        {/* Wide stat card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="col-span-2 glass-morphism rounded-2xl p-6 flex items-center justify-around"
                        >
                            {[
                                { value: '3rd Year', label: 'B.Tech CSE' },
                                { value: 'MERN', label: 'Specialization' },
                                { value: '150+', label: 'LeetCode' },
                                { value: '100+', label: 'GFG' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <p className={`text-2xl font-black mb-1 ${i % 2 === 0 ? 'text-accent-purple' : 'text-accent-blue'}`}>
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
