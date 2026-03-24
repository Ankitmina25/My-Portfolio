import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, ArrowUpRight, Globe, Monitor, MousePointer2, Loader2 } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Natlef Research',
        subtitle: 'R&D Ecosystem Platform',
        description:
            'An advanced R&D ecosystem dedicated to the systematic formulation, digital documentation, and analytical research of herbal and natural products.',
        features: ['Herbal Formulation', 'R&D Analysis', 'Digital Lab Docs'],
        tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        github: 'https://github.com/Ankitmina25/NatLef-Research.git',
        live: 'https://www.natlefresearch.com/',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070',
        accent: '#A855F7',
        accentB: '#3B82F6',
    },
    {
        id: '02',
        title: 'Mentor Connect',
        subtitle: 'Intelligent Mentorship Platform',
        description:
            'An intelligent platform bridging the gap between industry mentors and aspiring students through seamless real-time communication.',
        features: ['User Profiling', 'Direct Messaging', 'Interactive Board'],
        tech: ['Express', 'React', 'Node.js', 'Tailwind'],
        github: 'https://github.com/CodeWithRDX/MentorConnect.git',
        live: 'https://mentor-connect-puce.vercel.app',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071',
        accent: '#06B6D4',
        accentB: '#A855F7',
    },
];

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative w-full mb-12 lg:mb-16"
        >
            <div className="relative flex flex-col lg:flex-row bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm min-h-[400px] lg:h-[480px]">
                
                {/* ── Content Side (Left) ── */}
                <div className="flex-1 p-6 md:p-10 lg:w-[38%] flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <span className="text-[10px] font-black text-white/20 select-none tracking-widest">
                            {project.id}
                        </span>
                        <div className="h-px w-8 bg-white/10" />
                    </motion.div>

                    <motion.p 
                        className="text-[9px] font-black uppercase tracking-[0.4em] mb-2"
                        style={{ color: project.accent }}
                    >
                        {project.subtitle}
                    </motion.p>

                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                        {project.title.split(' ')[0]} <br />
                        <span className="text-white/30">{project.title.split(' ').slice(1).join(' ')}</span>
                    </h3>

                    <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((t) => (
                            <span 
                                key={t}
                                className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/5 bg-white/[0.03] text-white/50"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                        >
                            <Github size={14} />
                            Source
                        </a>
                        <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative px-6 py-3 rounded-full overflow-hidden"
                            style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accentB})` }}
                        >
                            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                                Live View <ArrowUpRight size={14} />
                            </div>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* ── Preview Side (Right) ── */}
                <div 
                    className="relative flex-1 min-h-[300px] lg:min-h-full bg-black/40 border-l border-white/5 group/preview"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Browser UI Mockup */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#121212] border-b border-white/5 flex items-center px-4 gap-3 z-20">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/30" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                            <div className="w-2 h-2 rounded-full bg-green-500/30" />
                        </div>
                        <div className="flex-1 max-w-xs h-5 bg-white/[0.03] rounded border border-white/5 flex items-center px-2 gap-1.5">
                            <Globe size={8} className="text-white/20" />
                            <span className="text-[8px] text-white/20 truncate select-none">
                                {project.live.replace('https://', '')}
                            </span>
                        </div>
                    </div>

                    {/* Iframe Container */}
                    <div className="absolute inset-0 pt-8 overflow-hidden">
                        {isLoading && (
                            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0a0a]">
                                <Loader2 className="w-6 h-6 text-accent-blue animate-spin mb-3" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-white/10">Syncing Environment...</span>
                            </div>
                        )}
                        
                        <iframe 
                            src={project.live}
                            className={`w-full h-full border-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'} 
                                ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
                            onLoad={() => setIsLoading(false)}
                            title={project.title}
                        />

                        {/* Interaction Overlay */}
                        <AnimatePresence>
                            {!isHovered && !isLoading && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[1px] cursor-none"
                                >
                                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md flex flex-col items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                                            <MousePointer2 className="text-white/40" size={16} />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/60 mb-0.5">Interactive Sandbox</p>
                                            <p className="text-[7px] font-bold text-white/20 uppercase tracking-widest">Hover to explore</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Interactive Cursor Indicator (Inside Preview) */}
                    <motion.div 
                        animate={{ opacity: isHovered ? 0.3 : 0 }}
                        className="absolute bottom-4 right-4 z-30 px-2 py-1 rounded-full bg-accent-blue/80 text-white text-[8px] font-black uppercase tracking-widest pointer-events-none"
                    >
                        LIVE CONTROL
                    </motion.div>
                </div>

                {/* Background Accent Gradients */}
                <div 
                    className="absolute -top-16 -left-16 w-48 h-48 blur-[100px] rounded-full pointer-events-none opacity-10"
                    style={{ backgroundColor: project.accent }}
                />
                <div 
                    className="absolute -bottom-16 -right-16 w-48 h-48 blur-[100px] rounded-full pointer-events-none opacity-10"
                    style={{ backgroundColor: project.accentB }}
                />
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap">
                PORTFOLIO
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 mb-6"
                    >
                        <span className="w-12 h-px bg-accent-blue/50"></span>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue">
                            Selected Works
                        </p>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
                    >
                        Featured <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">Creations</span>
                    </motion.h2>
                </div>

                {/* horizontal cards list */}
                <div className="flex flex-col gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>

                {/* Navigation CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center gap-8"
                >
                    <div className="h-px w-24 bg-white/10" />
                    <a 
                        href="https://github.com/Ankitmina25"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all"
                    >
                        Explore More Repositories
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
