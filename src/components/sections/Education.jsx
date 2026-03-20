import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const educationData = [
    {
        id: 1,
        degree: 'Bachelor of Technology',
        field: 'Computer Science & Engineering',
        institution: 'Lovely Professional University',
        location: 'Punjab, India',
        period: 'Aug 2024 — Present',
        score: 'CGPA: 7.2',
        accent: '#A855F7',
        current: true,
    },
    {
        id: 2,
        degree: 'Diploma',
        field: 'Computer Science & Engineering',
        institution: 'NIMS University',
        location: 'Jaipur, Rajasthan',
        period: '2020 — 2023',
        score: 'CGPA: 7.74',
        accent: '#3B82F6',
        current: false,
    },
    {
        id: 3,
        degree: '10th Standard',
        field: 'Secondary Education',
        institution: 'Emmanuel Sr. Sec. School',
        location: 'Bund, Rajasthan',
        period: '2017 — 2018',
        score: 'Percentage: 50%',
        accent: '#06B6D4',
        current: false,
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, flex: 0 }}
                        whileInView={{ opacity: 1, flex: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 mb-6"
                    >
                        <span className="w-12 h-px bg-accent-purple/50"></span>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-purple">
                            Academic Journey
                        </p>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black"
                    >
                        Education <span className="accent-gradient">& Degrees</span>
                    </motion.h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

                    <div className="space-y-10">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                    <div
                                        className="w-3 h-3 rounded-full border-2 shadow-lg"
                                        style={{
                                            borderColor: edu.accent,
                                            background: edu.current ? edu.accent : '#0A0A0A',
                                            boxShadow: `0 0 12px ${edu.accent}50`,
                                        }}
                                    />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                                    <div
                                        className="group glass-morphism rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
                                    >
                                        {/* Accent top bar */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-px opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ background: `linear-gradient(90deg, transparent, ${edu.accent}, transparent)` }}
                                        />

                                        {/* Header Row */}
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                                    style={{ background: `${edu.accent}15`, color: edu.accent }}
                                                >
                                                    <GraduationCap size={20} />
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-white/90 leading-tight">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-xs text-white/50">{edu.field}</p>
                                                </div>
                                            </div>
                                            {edu.current && (
                                                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 shrink-0">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-1.5 text-xs text-white/40">
                                            <div className="flex items-center gap-2">
                                                <Award size={12} style={{ color: edu.accent }} />
                                                <span className="font-semibold text-white/70">{edu.institution}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={12} className="text-white/30" />
                                                <span>{edu.location}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={12} className="text-white/30" />
                                                    <span>{edu.period}</span>
                                                </div>
                                                <span
                                                    className="font-bold px-2 py-0.5 rounded-md text-[10px]"
                                                    style={{ background: `${edu.accent}15`, color: edu.accent }}
                                                >
                                                    {edu.score}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Bottom glow */}
                                        <div
                                            className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ background: edu.accent, filter: 'blur(4px)' }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Watermark */}
            <div className="absolute bottom-8 right-[-5%] text-[12vw] font-black text-white/[0.015] uppercase select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap">
                SCHOLAR
            </div>
        </section>
    );
};

export default Education;
