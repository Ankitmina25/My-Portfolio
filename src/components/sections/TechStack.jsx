import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Database, Globe, Boxes, Server, MonitorCog, Container, Layers } from 'lucide-react';

const TechStack = () => {
    const skills = [
        {
            name: 'React',
            color: 'shadow-[#61DAFB]/20 text-[#61DAFB]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M22.215 14.185c.433-.615.688-1.28.73-1.968-.041-.69-.296-1.355-.73-1.97a9.204 9.204 0 0 0-1.242-1.353c-.56-.497-1.18-.894-1.841-1.178-.662-.284-1.36-.46-2.073-.522a9.176 9.176 0 0 0-3.32.32 9.141 9.141 0 0 0-1.466.57c-.464.238-.898.514-1.298.826a11.144 11.144 0 0 0-1.3 1.18 13.9 13.9 0 0 0-2.316 3.1 13.9 13.9 0 0 0 2.316 3.1 11.144 11.144 0 0 0 1.3 1.18c.4.312.834.588 1.298.826.471.242.96.433 1.466.57a9.176 9.176 0 0 0 3.32.32c.713-.062 1.411-.238 2.073-.522.662-.284 1.281-.68 1.841-1.178.472-.42.89-.875 1.242-1.353zm-11.83 2.128a11.531 11.531 0 0 1-1.785-2.22.46.46 0 0 1 0-.186c.143-.223.3-.438.47-.645a16.326 16.326 0 0 1 1.784-1.87c.367-.324.757-.62 1.166-.884a14.394 14.394 0 0 1 4.562-1.85c.57-.081 1.146-.11 1.72-.086a6.83 6.83 0 0 1 .472.046c.553.085 1.092.234 1.6.46.33.148.643.333.918.57a6.837 6.837 0 0 1 1.35 1.83.473.473 0 0 1 0 .28c-.066.216-.168.423-.302.614-.247.35-.556.66-.918.918a6.837 6.837 0 0 1-1.6.46c-.553.085-1.092.234-1.6.46-.33.148-.643.333-.918.57a6.837 6.837 0 0 1-1.35 1.83.473.473 0 0 1 0 .28c.066.216.168.423.302.614z"/><circle cx="12" cy="12" r="2.5"/></svg>
            )
        },
        {
            name: 'Node.js',
            color: 'shadow-[#339933]/20 text-[#339933]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M12 24l-11-6.35v-12.7l11-6.35 11 6.35v12.7l-11 6.35zm-9.314-7.382l9.314 5.378 9.314-5.378v-10.756l-9.314-5.378-9.314 5.378v10.756zM11.14 13.914l-1.62-.843v-.73s.59-.304 1.134-.582V8.95c-.328.188-1.574.887-1.92 1.094-.146.087-.31-.157-.15-.285.49-.395 2.152-1.408 2.508-1.6.14-.075.247 0 .247.165v2.863s1.23-.71 1.74-1.004c.143-.08.28.134.148.25-.56.494-1.436 1.097-1.89 1.487v1.17c.567-.32 1.343-.765 1.884-1.077.14-.08.284.145.148.24l-2.015 1.18c-.143.085-.214 0-.214-.147v-1.1l-1.1-.645.71.41z"/></svg>
            )
        },
        {
            name: 'MongoDB',
            color: 'shadow-[#47A248]/20 text-[#47A248]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M17.193 9.555c-1.37-3.993-4.135-7.391-4.135-7.391L12 0l-.916 2.164s-2.765 3.398-4.136 7.391c-1.371 3.993-.32 7.72-.32 7.72l.4 1s.144 2.185 1.332 3.193c0 0 .571.492 1.442.222 0 0 .351-.115.485-.257 0 0 .093.036.082.355l-.01 1.054c-.01.916.634.825.634.825l.042-4.144c1.026.046 1.815-.355 2.222-.72 0 0 1.282-.871 1.487-3.414 0 0 .553-.314.739-1.29l.343-1.049s.931-3.53-.407-7.503z"/></svg>
            )
        },
        {
            name: 'Express.js',
            color: 'shadow-white/10 text-white',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            )
        },
        {
            name: 'HTML',
            color: 'shadow-[#E34F26]/20 text-[#E34F26]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
            )
        },
        {
            name: 'CSS',
            color: 'shadow-[#1572B6]/20 text-[#1572B6]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
            )
        },
        {
            name: 'JavaScript',
            color: 'shadow-[#F7DF1E]/20 text-[#F7DF1E]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M0 0h24v24H0V0zm22.034 18.268c-.153-1.19-.727-2.182-2.112-2.736-1.127-.42-2.162-.596-3.176-.902-.323-.105-.443-.162-.443-.374 0-.172.164-.263.386-.263.367 0 .618.172.76.543.056.166.115.305.281.305h1.9c.148 0 .19-.074.19-.19l-.02-2.77c0-.13-.08-.184-.132-.184-.047 0-.083.023-.153.076-.84.607-1.93.92-3.214.92-2.33 0-3.69-1.39-3.69-3.41 0-1.86 1.082-3.266 3.425-3.266 2.373 0 3.765 1.418 3.765 3.513 0 .153.075.248.243.248h1.725c.143 0 .195-.083.195-.24 0-3.85-2.67-5.32-5.91-5.32-3.824 0-6.195 2.534-6.195 5.257 0 2.943 2.01 4.793 5.4 5.378l1.37.243c.96.173 1.2.3 1.2.73 0 .428-.42.6-1.125.6-.794 0-1.396-.33-1.576-1.035-.045-.21-.128-.315-.338-.315h-1.92c-.143 0-.21.076-.21.22l.015 2.87c0 .13.06.196.165.196.075 0 .148-.03.21-.1C16.8 19.82 17.5 20 18.5 20c2.4 0 3.65-1.18 3.53-3.09v.03z.196.196z"/></svg>
            )
        },
        {
            name: 'OOPs',
            color: 'shadow-[#8B5CF6]/20 text-[#8B5CF6]',
            icon: <Boxes className="w-10 h-10" />
        },
        {
            name: 'OS',
            color: 'shadow-[#6B7280]/20 text-[#6B7280]',
            icon: <MonitorCog className="w-10 h-10" />
        },
        {
            name: 'Networking',
            color: 'shadow-[#3B82F6]/20 text-[#3B82F6]',
            icon: <Globe className="w-10 h-10" />
        },
        {
            name: 'DBMS',
            color: 'shadow-[#F59E0B]/20 text-[#F59E0B]',
            icon: <Database className="w-10 h-10" />
        },
        {
            name: 'SQL',
            color: 'shadow-[#A855F7]/20 text-[#A855F7]',
            icon: <Server className="w-10 h-10" />
        },
        {
            name: 'Tailwind CSS',
            color: 'shadow-[#06B6D4]/20 text-[#06B6D4]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
            )
        },
        {
            name: 'Docker',
            color: 'shadow-[#2496ED]/20 text-[#2496ED]',
            icon: <Container className="w-10 h-10" />
        },
        {
            name: 'Redux Toolkit',
            color: 'shadow-[#764ABC]/20 text-[#764ABC]',
            icon: <Layers className="w-10 h-10" />
        },
        {
            name: 'DSA',
            color: 'shadow-[#10B981]/20 text-[#10B981]',
            icon: <BrainCircuit className="w-10 h-10" />
        },
        {
            name: 'C++',
            color: 'shadow-[#00599C]/20 text-[#00599C]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.295-.1-.62-.268-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.78a3.567 3.567 0 0 0-3.08-1.775A3.573 3.573 0 0 0 8.427 12 3.573 3.573 0 0 0 12 15.546a3.57 3.57 0 0 0 3.08-1.775l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>
            )
        },
        {
            name: 'Git & GitHub',
            color: 'shadow-white/10 text-white',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            )
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        My <span className="accent-gradient">Tech Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50"
                    >
                        Technologies I use to bring ideas to life
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial="initial"
                            whileHover="hover"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, scale: 0.8 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: i * 0.05 }
                                },
                                hover: { y: -10, scale: 1.05 }
                            }}
                            className={`glass-morphism rounded-2xl p-6 h-32 flex flex-col items-center justify-center gap-3 text-center cursor-default overflow-hidden relative group border border-white/5 transition-colors hover:border-current ${skill.color}`}
                        >
                            {/* Background ambient glow - intensifies on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-current transition-opacity duration-500 blur-xl" />
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-current opacity-[0.05] group-hover:opacity-[0.25] blur-2xl rounded-full transition-opacity duration-500" />

                            {/* Top decorative line for a sleek structure */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-current opacity-30 group-hover:w-16 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_10px_currentColor]" />

                            {/* Icon Container */}
                            <motion.div
                                variants={{
                                    initial: { y: 2, scale: 1 },
                                    hover: { y: -2, scale: 1.15 }
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300"
                            >
                                {skill.icon}
                            </motion.div>

                            {/* Tech Name */}
                            <motion.div
                                variants={{
                                    initial: { y: -2, opacity: 0.7 },
                                    hover: { y: 2, opacity: 1 }
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="z-10 mt-1"
                            >
                                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase">
                                    {skill.name}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

