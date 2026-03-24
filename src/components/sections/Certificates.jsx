import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificates } from '../../data/certificates';

const CertificateCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: 'easeOut' }}
            className="group relative flex flex-col glass-morphism rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 shadow-xl backdrop-blur-md cursor-pointer h-full"
            onClick={() => window.open(cert.link, '_blank')}
        >
            <div className="relative h-36 overflow-hidden bg-[#0A0A0A]">
                <motion.img 
                    src={cert.image} 
                    alt={cert.title} 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                
                {/* Floating Date Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white/70 uppercase tracking-widest">
                    <Calendar size={10} className="text-white/40" />
                    {cert.date}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 flex flex-col relative z-10 bg-[#0A0A0A]/50">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: cert.accent }}>
                    <ShieldCheck size={12} />
                    {cert.issuer}
                </div>

                <h3 className="text-base font-bold mb-2 leading-tight text-white/90 line-clamp-2 min-h-[2.5rem]">
                    {cert.title}
                </h3>

                {/* Technical Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.slice(0, 2).map(skill => (
                        <span 
                            key={skill}
                            className="bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[8px] font-bold text-white/50 tracking-wider uppercase"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
                        Inspect
                    </span>
                    <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${cert.accent}15`, color: cert.accent }}
                    >
                        <ArrowUpRight size={14} />
                    </div>
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
    const displayedCount = 4;
    const initialCertificates = certificates.slice(0, displayedCount);

    return (
        <section id="certificates" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Container */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 mb-6"
                        >
                            <span className="w-12 h-px bg-accent-purple/50"></span>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-purple">
                                Global Standards
                            </p>
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
                        >
                            Professional <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                                Credentials
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link 
                            to="/certificates"
                            className="group flex items-center gap-4 px-8 py-4 rounded-full glass-morphism border border-white/10 hover:border-accent-purple/40 hover:bg-white/5 transition-all duration-500"
                        >
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-accent-purple transition-colors">
                                    Browse the Archive
                                </span>
                                <span className="text-[8px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/50">
                                    {certificates.length} Verified Items
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-purple/20 transition-all duration-500">
                                <ExternalLink size={18} className="text-white/60 group-hover:text-white group-hover:rotate-12 transition-all" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {initialCertificates.map((cert, index) => (
                        <CertificateCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

                {/* Mini Link for Mobile */}
                <div className="mt-12 md:hidden flex justify-center">
                    <Link 
                        to="/certificates"
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-purple border-b border-accent-purple/30 pb-1"
                    >
                        View Full Collection
                    </Link>
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
