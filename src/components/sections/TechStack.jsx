import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Globe, Boxes, Server, MonitorCog, Container, Layers } from 'lucide-react';

const TechStack = () => {
    const skillCategories = [
        {
            title: "Architectural Frameworks",
            position: "top-left",
            skills: [
                {
                    name: 'React',
                    color: '#61DAFB',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M22.215 14.185c.433-.615.688-1.28.73-1.968-.041-.69-.296-1.355-.73-1.97a9.204 9.204 0 0 0-1.242-1.353c-.56-.497-1.18-.894-1.841-1.178-.662-.284-1.36-.46-2.073-.522a9.176 9.176 0 0 0-3.32.32 9.141 9.141 0 0 0-1.466.57c-.464.238-.898.514-1.298.826a11.144 11.144 0 0 0-1.3 1.18 13.9 13.9 0 0 0-2.316 3.1 13.9 13.9 0 0 0 2.316 3.1 11.144 11.144 0 0 0 1.3 1.18c.4.312.834.588 1.298.826.471.242.96.433 1.466.57a9.176 9.176 0 0 0 3.32.32c.713-.062 1.411-.238 2.073-.522.662-.284 1.281-.68 1.841-1.178.472-.42.89-.875 1.242-1.353zm-11.83 2.128a11.531 11.531 0 0 1-1.785-2.22.46.46 0 0 1 0-.186c.143-.223.3-.438.47-.645a16.326 16.326 0 0 1 1.784-1.87c.367-.324.757-.62 1.166-.884a14.394 14.394 0 0 1 4.562-1.85c.57-.081 1.146-.11 1.72-.086a6.83 6.83 0 0 1 .472.046c.553.085 1.092.234 1.6.46.33.148.643.333.918.57a6.837 6.837 0 0 1 1.35 1.83.473.473 0 0 1 0 .28c-.066.216-.168.423-.302.614-.247.35-.556.66-.918.918a6.837 6.837 0 0 1-1.6.46c-.553.085-1.092.234-1.6.46-.33.148-.643.333-.918.57a6.837 6.837 0 0 1-1.35 1.83.473.473 0 0 1 0 .28c.066.216.168.423.302.614z"/><circle cx="12" cy="12" r="2.5"/></svg>
                    )
                },
                {
                    name: 'Node.js',
                    color: '#339933',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 24l-11-6.35v-12.7l11-6.35 11 6.35v12.7l-11 6.35zm-9.314-7.382l9.314 5.378 9.314-5.378v-10.756l-9.314-5.378-9.314 5.378v10.756zM11.14 13.914l-1.62-.843v-.73s.59-.304 1.134-.582V8.95c-.328.188-1.574.887-1.92 1.094-.146.087-.31-.157-.15-.285.49-.395 2.152-1.408 2.508-1.6.14-.075.247 0 .247.165v2.863s1.23-.71 1.74-1.004c.143-.08.28.134.148.25-.56.494-1.436 1.097-1.89 1.487v1.17c.567-.32 1.343-.765 1.884-1.077.14-.08.284.145.148.24l-2.015 1.18c-.143.085-.214 0-.214-.147v-1.1l-1.1-.645.71.41z"/></svg>
                    )
                },
                {
                    name: 'Laravel',
                    color: '#FF2D20',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M24 22.531l-10-5.311v-10.45l10-5.31h.001v21.071zm-24 0l10-5.311v-10.45l-10-5.31h-.001v21.071z"/></svg>
                    )
                },
                {
                    name: 'Express.js',
                    color: '#ffffff',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                    )
                }
            ]
        },
        {
            title: "Development Ecosystem",
            position: "top-right",
            skills: [
                {
                    name: 'Tailwind CSS',
                    color: '#06B6D4',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12.001 4.8-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                    )
                },
                {
                    name: 'VS Code',
                    color: '#007ACC',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-5.585-4.312a1.151 1.151 0 0 0-1.41.059L.328 6.44a1.162 1.162 0 0 0-.012 1.636l4.285 4.192-4.292 4.137a1.162 1.162 0 0 0 .013 1.635l1.732 1.55a1.15 1.15 0 0 0 1.41.059l5.586-4.314 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.86l-2.902-2.12 2.902-2.12v4.24zM22 17.585l-4.595-3.357 4.595-3.357v6.714z"/></svg>
                    )
                },
                {
                    name: 'Git & GitHub',
                    color: '#ffffff',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    )
                },
                {
                    name: 'Docker',
                    color: '#2496ED',
                    icon: <Container className="w-full h-full" />
                }
            ]
        },
        {
            title: "Core Engineering",
            position: "bottom-left",
            skills: [
                {
                    name: 'JavaScript',
                    color: '#F7DF1E',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M0 0h24v24H0V0zm22.034 18.268c-.153-1.19-.727-2.182-2.112-2.736-1.127-.42-2.162-.596-3.176-.902-.323-.105-.443-.162-.443-.374 0-.172.164-.263.386-.263.367 0 .618.172.76.543.056.166.115.305.281.305h1.9c.148 0 .19-.074.19-.19l-.02-2.77c0-.13-.08-.184-.132-.184-.047 0-.083.023-.153.076-.84.607-1.93.92-3.214.92-2.33 0-3.69-1.39-3.69-3.41 0-1.86 1.082-3.266 3.425-3.266 2.373 0 3.765 1.418 3.765 3.513 0 .153.075.248.243.248h1.725c.143 0 .195-.083.195-.24 0-3.85-2.67-5.32-5.91-5.32-3.824 0-6.195 2.534-6.195 5.257 0 2.943 2.01 4.793 5.4 5.378l1.37.243c.96.173 1.2.3 1.2.73 0 .428-.42.6-1.125.6-.794 0-1.396-.33-1.576-1.035-.045-.21-.128-.315-.338-.315h-1.92c-.143 0-.21.076-.21.22l.015 2.87c0 .13.06.196.165.196.075 0 .148-.03.21-.1C16.8 19.82 17.5 20 18.5 20c2.4 0 3.65-1.18 3.53-3.09v.03z.196.196z"/></svg>
                    )
                },
                {
                    name: 'C++',
                    color: '#00599C',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.295-.1-.62-.268-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.78a3.567 3.567 0 0 0-3.08-1.775A3.573 3.573 0 0 0 8.427 12 3.573 3.573 0 0 0 12 15.546a3.57 3.57 0 0 0 3.08-1.775l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>
                    )
                },
                {
                    name: 'SQL',
                    color: '#A855F7',
                    icon: <Server className="w-full h-full" />
                },
                {
                    name: 'MongoDB',
                    color: '#47A248',
                    icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M17.193 9.555c-1.37-3.993-4.135-7.391-4.135-7.391L12 0l-.916 2.164s-2.765 3.398-4.136 7.391c-1.371 3.993-.32 7.72-.32 7.72l.4 1s.144 2.185 1.332 3.193c0 0 .571.492 1.442.222 0 0 .351-.115.485-.257 0 0 .093.036.082.355l-.01 1.054c-.01.916.634.825.634.825l.042-4.144c1.026.046 1.815-.355 2.222-.72 0 0 1.282-.871 1.487-3.414 0 0 .553-.314.739-1.29l.343-1.049s.931-3.53-.407-7.503z"/></svg>
                    )
                }
            ]
        },
        {
            title: "Computer Science CSX",
            position: "bottom-right",
            skills: [
                {
                    name: 'DSA',
                    color: '#10B981',
                    icon: <BrainCircuit className="w-full h-full" />
                },
                {
                    name: 'OOPs',
                    color: '#8B5CF6',
                    icon: <Boxes className="w-full h-full" />
                },
                {
                    name: 'Networking',
                    color: '#3B82F6',
                    icon: <Globe className="w-full h-full" />
                },
                {
                    name: 'OS/DBMS',
                    color: '#6B7280',
                    icon: <MonitorCog className="w-full h-full" />
                }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background Mesh Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="w-8 h-px bg-accent-blue/50"></span>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue">
                            Technical Evolution
                        </p>
                        <span className="w-8 h-px bg-accent-blue/50"></span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4"
                    >
                        Stack Of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">Technology</span>
                    </motion.h2>
                </div>

                {/* Hub and Spoke Layout */}
                <div className="relative min-h-[800px] md:min-h-[900px] flex items-center justify-center">
                    
                    {/* Central Hub Circle */}
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="absolute z-20 w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl flex items-center justify-center p-8 text-center"
                    >
                        <div className="absolute inset-0 rounded-full bg-accent-blue/5 animate-pulse blur-xl" />
                        <span className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            Stack Of <br /> Technology
                        </span>
                        
                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-[-1]" viewBox="0 0 100 100">
                           {/* Lines are effectively implemented via the grid/border CSS below for better responsiveness */}
                        </svg>
                    </motion.div>

                    {/* Skill Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-24 md:gap-y-16 w-full max-w-5xl">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ 
                                    opacity: 0, 
                                    x: category.position.includes('left') ? -50 : 50,
                                    y: category.position.includes('top') ? -50 : 50 
                                }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                                className={`relative group p-[1px] rounded-[2rem] overflow-hidden`}
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-accent-blue/20 transition-all duration-500" />
                                
                                <div className="relative bg-black/60 backdrop-blur-xl rounded-[2rem] p-8 min-h-[300px] border border-white/5 h-full">
                                    
                                    {/* Category Pill Title */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-white text-black rounded-full shadow-2xl">
                                        <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                            {category.title}
                                        </span>
                                    </div>

                                    {/* Skills Icons Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
                                        {category.skills.map((skill, skillIdx) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ y: -5 }}
                                                className="flex flex-col items-center gap-3 group/skill"
                                            >
                                                {/* Skill Icon */}
                                                <div className="w-12 h-12 flex items-center justify-center relative p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover/skill:border-white/20 transition-all">
                                                    <div 
                                                        className="absolute inset-0 blur-lg opacity-0 group-hover/skill:opacity-30 transition-opacity rounded-full"
                                                        style={{ backgroundColor: skill.color }}
                                                    />
                                                    <div 
                                                        className="w-full h-full relative z-10 opacity-70 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-110"
                                                        style={{ color: skill.color }}
                                                    >
                                                        {skill.icon}
                                                    </div>
                                                </div>
                                                
                                                {/* Skill Name */}
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 group-hover/skill:text-white transition-colors text-center">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Custom Decorative Connecting Lines (Corner Borders) */}
                                <div className={`absolute w-32 h-32 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity z-[-1]
                                    ${category.position === 'top-left' ? 'bottom-0 right-0 border-r border-b rounded-br-[4rem]' : ''}
                                    ${category.position === 'top-right' ? 'bottom-0 left-0 border-l border-b rounded-bl-[4rem]' : ''}
                                    ${category.position === 'bottom-left' ? 'top-0 right-0 border-r border-t rounded-tr-[4rem]' : ''}
                                    ${category.position === 'bottom-right' ? 'top-0 left-0 border-l border-t rounded-tl-[4rem]' : ''}
                                    border-white/40`} 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Giant Background Watermark */}
            <div className="absolute top-1/2 left-[-10%] text-[20vw] font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-tighter leading-none -rotate-90 origin-center translate-y-[-50%]">
                EVOLUTION
            </div>
        </section>
    );
};

export default TechStack;

