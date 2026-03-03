import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Natlef Research",
            description: "An advanced R&D ecosystem dedicated to the systematic formulation, digital documentation, and analytical research of herbal and natural products.",
            features: ["Herbal Formulation", "R&D Analysis", "Digital Lab Docs"],
            tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/Ankitmina25/NatLef-Research.git",
            live: "https://www.natlefresearch.com/",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070"
        },
        {
            title: "Mentor Connect",
            description: "An intelligent platform bridging the gap between industry mentors and aspiring students through seamless communication.",
            features: ["User Profiling", "Direct Messaging", "Interactive Board"],
            tech: ["Socket.io", "React", "Node.js", "Tailwind"],
            github: "https://github.com/CodeWithRDX/MentorConnect.git",
            live: "#",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 relative">
                    {/* Background Massive Text */}
                    <div className="absolute -top-10 left-0 text-[12vw] font-[1000] opacity-[0.03] select-none pointer-events-none uppercase italic italic tracking-tighter whitespace-nowrap">
                        SELECTED WORKS
                    </div>

                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black mb-4 uppercase italic tracking-tighter"
                        >
                            FEATURED <span className="accent-gradient">PROJECTS</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/40 max-w-xl text-lg uppercase tracking-widest font-bold italic"
                        >
                            A selection of recent works and experimental builds
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 mb-2"
                    >
                        <a href="#" className="interactive group flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all">
                            VIEW ALL <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="group"
                        >
                            <div className="glass-morphism rounded-[35px] overflow-hidden h-full flex flex-col transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] border-white/5 hover:border-white/20">
                                {/* Project Image Area */}
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                                    {/* Overlay Tech Badges */}
                                    <div className="absolute top-6 right-6 flex flex-col gap-2">
                                        {project.features.slice(0, 2).map(feat => (
                                            <span key={feat} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-white/70">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-10 flex flex-col flex-grow relative">
                                    <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter group-hover:accent-gradient transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/50 mb-8 flex-grow leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="text-[10px] font-bold text-accent-blue/80 tracking-widest uppercase">
                                                #{tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="interactive flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                                            <Github size={16} /> GITHUB
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="interactive flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent-purple hover:text-white transition-colors">
                                            LIVE <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
