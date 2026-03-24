import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificates } from '../../data/certificates';

const CertificateCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex flex-col glass-morphism rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 shadow-xl backdrop-blur-md cursor-pointer h-full"
            onClick={() => window.open(cert.link, '_blank')}
        >
            <div className="relative h-32 overflow-hidden bg-[#0A0A0A]">
                <motion.img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                
                {/* Floating Date Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-bold text-white/80 uppercase tracking-widest">
                    <Calendar size={10} />
                    {cert.date}
                </div>
            </div>

            {/* Overlapping Issuer Logo/Badge */}
            <div className="absolute top-[7rem] left-3">
                <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center border-2 border-[#0A0A0A] shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${cert.accent}20, ${cert.accent}10)`, color: cert.accent }}
                >
                    <Award size={14} />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-3 pt-4 flex flex-col relative z-10 bg-[#0A0A0A]/50">
                <h3 className="text-sm font-bold mb-0.5 leading-tight text-white/90 line-clamp-1">
                    {cert.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-widest mb-2" style={{ color: cert.accent }}>
                    <ShieldCheck size={10} />
                    {cert.issuer}
                </div>

                <p className="text-[10px] text-white/40 leading-relaxed mb-3 flex-1 line-clamp-2">
                    {cert.description}
                </p>

                {/* Technical Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {cert.skills.map(skill => (
                        <span 
                            key={skill}
                            className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-white/50 tracking-wider uppercase"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    <span>Verify</span>
                    <ArrowUpRight size={12} style={{ color: cert.accent }} />
                </div>
            </div>
        </motion.div>
    );
};

const CertificatesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#020202] text-white py-20 px-6 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Matrix</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6 mb-6"
                    >
                        <span className="w-12 h-px bg-accent-purple/50"></span>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-purple">
                            Complete Achievement Grid
                        </p>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">Archive</span>
                    </motion.h1>
                    <p className="max-w-xl text-sm md:text-base text-white/40 leading-relaxed">
                        A comprehensive repository of technical certifications, industrial training, and academic excellence verified across global standards.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>
            </div>

            {/* Giant watermark text */}
            <div className="fixed bottom-10 right-[-2%] text-[20vw] font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap z-0">
                ACHIEVEMENT
            </div>
        </div>
    );
};

export default CertificatesPage;
