import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';

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
        live: '#',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071',
        accent: '#06B6D4',
        accentB: '#A855F7',
    },
];

/* ── Magnetic 3-D tilt card ─────────────────────────────── */
const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
    const glowX   = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glowY   = useTransform(y, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top)  / rect.height - 0.5);
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1200 }}
        >
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative group rounded-[32px] overflow-hidden cursor-none"
            >
                {/* ── Animated gradient border ── */}
                <div
                    className="absolute inset-0 rounded-[32px] p-px z-0 transition-opacity duration-500"
                    style={{ opacity: hovered ? 1 : 0 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-[32px]"
                        style={{
                            background: `conic-gradient(from 0deg at ${glowX}% ${glowY}%, ${project.accent}, ${project.accentB}, ${project.accent})`,
                        }}
                    />
                </div>

                {/* ── Inner card ── */}
                <div className="relative z-10 m-px rounded-[31px] overflow-hidden bg-[#0a0a0a]">

                    {/* Image area */}
                    <div className="relative h-44 overflow-hidden">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            animate={{ scale: hovered ? 1.08 : 1 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        />

                        {/* Dark overlay that lifts on hover */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: hovered ? 0.3 : 0.65 }}
                            style={{ background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 40%, transparent 100%)' }}
                            transition={{ duration: 0.4 }}
                        />

                        {/* Number badge */}
                        <div className="absolute top-4 left-4 font-black text-4xl leading-none select-none pointer-events-none"
                             style={{ color: `${project.accent}18`, WebkitTextStroke: `1px ${project.accent}40` }}>
                            {project.id}
                        </div>

                        {/* Feature pills */}
                        <div className="absolute top-5 right-5 flex flex-col gap-2">
                            {project.features.slice(0, 2).map((f) => (
                                <motion.span
                                    key={f}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: hovered ? 1 : 0.6, x: hovered ? 0 : 8 }}
                                    transition={{ duration: 0.35 }}
                                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md"
                                    style={{
                                        background: `${project.accent}22`,
                                        border: `1px solid ${project.accent}40`,
                                        color: project.accent,
                                    }}
                                >
                                    {f}
                                </motion.span>
                            ))}
                        </div>

                        {/* Hover glow spot following mouse */}
                        <motion.div
                            className="absolute w-40 h-40 rounded-full pointer-events-none blur-3xl"
                            style={{
                                background: project.accent,
                                opacity: hovered ? 0.15 : 0,
                                left: useTransform(x, [-0.5, 0.5], ['0%', '80%']),
                                top:  useTransform(y, [-0.5, 0.5], ['0%', '80%']),
                                transform: 'translate(-50%, -50%)',
                            }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-5 relative">
                        {/* Subtle inner glow */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-px"
                            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
                            animate={{ opacity: hovered ? 1 : 0 }}
                            transition={{ duration: 0.4 }}
                        />

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1.5 transition-colors duration-300"
                           style={{ color: project.accent }}>
                            {project.subtitle}
                        </p>

                        <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tight leading-tight">
                            {project.title}
                        </h3>

                        <p className="text-white/50 text-xs leading-relaxed mb-4">
                            {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                    style={{
                                        background: `${project.accentB}15`,
                                        color: `${project.accentB}`,
                                        border: `1px solid ${project.accentB}25`,
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Bottom CTA bar — slides up on hover */}
                        <div className="relative h-12 overflow-hidden">
                            {/* Default state */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-between"
                                animate={{ y: hovered ? -48 : 0, opacity: hovered ? 0 : 1 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                <div className="flex gap-2">
                                    {[...Array(3)].map((_, i) => (
                                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    ))}
                                </div>
                                <span className="text-xs text-white/30 uppercase tracking-widest font-bold">Hover to explore</span>
                            </motion.div>

                            {/* Hovered state */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-between"
                                animate={{ y: hovered ? 0 : 48, opacity: hovered ? 1 : 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors group/btn"
                                >
                                    <Github size={15} />
                                    Source Code
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.accent}, ${project.accentB})`,
                                        boxShadow: `0 4px 20px ${project.accent}40`,
                                    }}
                                >
                                    Live Demo <ArrowUpRight size={14} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ── Section ─────────────────────────────────────────────── */
const Projects = () => (
    <section id="projects" className="py-16 relative overflow-hidden">
        {/* Big ghost text decoration */}
        <div className="absolute -top-6 left-0 right-0 text-center text-[20vw] font-black opacity-[0.02] select-none pointer-events-none uppercase leading-none tracking-tighter">
            WORKS
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.4em] text-accent-purple mb-3"
                    >
                        Selected Works
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
                    >
                        Featured<br />
                        <span className="accent-gradient">Projects</span>
                    </motion.h2>
                </div>

                <motion.a
                    href="https://github.com/Ankitmina25"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors mb-2"
                >
                    View All on GitHub <ArrowRight size={16} />
                </motion.a>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center mt-16"
            >
                <a
                    href="https://github.com/Ankitmina25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 glass-morphism rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:scale-105 transition-all"
                >
                    <Github size={18} />
                    More on GitHub
                    <ArrowUpRight size={16} />
                </a>
            </motion.div>
        </div>
    </section>
);

export default Projects;
