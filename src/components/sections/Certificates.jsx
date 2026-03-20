import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';

const certificates = [
    {
        id: 'google-net-01',
        title: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google',
        date: 'Sep 2024',
        description: 'Comprehensive networking fundamentals course covering protocols, IP addressing, routing, and network troubleshooting.',
        skills: ['Networking'], 
        link: 'https://drive.google.com/file/d/1cMHBasnpOImW0Of0sYBxSjaUYrattMtU/view?usp=sharing', // User's Google Drive Link
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034', 
        accent: '#F3F4F6', 
    },
    {
        id: 'udemy-lar-02',
        title: 'PHP with Laravel for Beginners',
        issuer: 'Udemy',
        date: 'Feb 2026',
        description: 'In-depth mastery of Laravel MVC architecture, backend logic, and robust database management system integration.',
        skills: ['Backend'], 
        link: 'https://drive.google.com/file/d/1Aa5DKbll6UKXn8voNppVGtKLRTL5bLWb/view?usp=sharing', // User's Google Drive Link
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070', 
        accent: '#9CA3AF', 
    },
    {
        id: 'nptel-net-03',
        title: 'Advanced Computer Networks',
        issuer: 'NPTEL (Skill India)',
        date: 'Jan-Apr 2025',
        description: 'Rigorous 12-week advanced certification by IIT covering complex network architectures and algorithms.',
        skills: ['Networking'], 
        link: 'https://drive.google.com/file/d/1l6Ct_jMKplixNIsNrp5rOC7qAtc_Cn6O/view?usp=sharing', // User's Google Drive Link
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072', 
        accent: '#F3F4F6', 
    },
    {
        id: 'training-04',
        title: 'Professional Industrial Training',
        issuer: 'Industrial Program',
        date: '2024-2025',
        description: 'Advanced hands-on industrial training focusing on real-world application of core engineering and development principles.',
        skills: ['Development'], 
        link: 'https://drive.google.com/file/d/1jgnEF4KmNnor4-HkXEViDnAVII_T8acX/view?usp=sharing', 
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072', 
        accent: '#9CA3AF', 
    }
];

const CertificateCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            className="group relative flex flex-col glass-morphism rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500 shadow-2xl backdrop-blur-md cursor-pointer"
            onClick={() => window.open(cert.link, '_blank')}
        >
            <div className="relative h-32 overflow-hidden bg-[#0A0A0A]">
                <motion.img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                
                {/* Hover Reveal Text */}
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-black tracking-[0.2em] uppercase text-xs border border-white/20 px-4 py-2 rounded-full glass-morphism">View</span>
                </div>
                
                {/* Floating Date Badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                    <Calendar size={12} className="text-white/50" />
                    {cert.date}
                </div>
            </div>

            {/* Overlapping Issuer Logo/Badge */}
            <div className="absolute top-[7rem] left-4">
                <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center border-4 border-[#0A0A0A] shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${cert.accent}30, ${cert.accent}10)`, color: cert.accent }}
                >
                    <Award size={18} className="drop-shadow-lg" />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 pt-6 flex flex-col relative z-10 bg-[#0A0A0A]/50">
                
                <h3 className="text-base md:text-lg font-bold mb-0.5 leading-tight text-white/90">
                    {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: cert.accent }}>
                    <ShieldCheck size={12} />
                    {cert.issuer}
                </div>

                <p className="text-xs text-white/50 leading-relaxed mb-4 flex-1">
                    {cert.description}
                </p>

                {/* Technical Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map(skill => (
                        <span 
                            key={skill}
                            className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-[10px] font-bold text-white/60 tracking-wider uppercase"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-6 border-t border-white/5">
                    <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group/link"
                    >
                        <span className="text-xs font-black uppercase tracking-widest text-white/40 group-hover/link:text-white transition-colors duration-300">
                            Verify Credential
                        </span>
                        <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:scale-110"
                            style={{ background: `${cert.accent}20`, color: cert.accent }}
                        >
                            <ArrowUpRight size={14} />
                        </div>
                    </a>
                </div>
            </div>
            
            {/* Hover Glow Edge Effect */}
            <div 
                className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: cert.accent, filter: 'blur(4px)' }} 
            />
        </motion.div>
    );
};

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 relative overflow-hidden bg-[#020202]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
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
                            Official Accreditations
                        </p>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter"
                    >
                        Professional <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                            Credentials
                        </span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

            </div>
            
            {/* Giant watermark text */}
            <div className="absolute bottom-10 left-[-5%] text-[15vw] font-black text-white/[0.015] uppercase select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap">
                VERIFIED
            </div>
        </section>
    );
};

export default Certificates;
