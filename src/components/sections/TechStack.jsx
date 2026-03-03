import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStack = () => {
    const skills = [
        {
            name: 'MongoDB',
            color: 'shadow-[#47A248]/20 text-[#47A248]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M17.193 9.555c-1.37-3.993-4.135-7.391-4.135-7.391L12 0l-.916 2.164s-2.765 3.398-4.136 7.391c-1.371 3.993-.32 7.72-.32 7.72l.4 1s.144 2.185 1.332 3.193c0 0 .571.492 1.442.222 0 0 .351-.115.485-.257 0 0 .093.036.082.355l-.01 1.054c-.01.916.634.825.634.825l.042-4.144c1.026.046 1.815-.355 2.222-.72 0 0 1.282-.871 1.487-3.414 0 0 .553-.314.739-1.29l.343-1.049s.931-3.53-.407-7.503z" />
                </svg>
            )
        },
        {
            name: 'Express.js',
            color: 'shadow-white/10 text-white',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            )
        },
        {
            name: 'React.js',
            color: 'shadow-[#61DAFB]/20 text-[#61DAFB]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M22.215 14.185c.433-.615.688-1.28.73-1.968-.041-.69-.296-1.355-.73-1.97a9.204 9.204 0 0 0-1.242-1.353c-.56-.497-1.18-.894-1.841-1.178-.662-.284-1.36-.46-2.073-.522a9.176 9.176 0 0 0-3.32.32 9.141 9.141 0 0 0-1.466.57c-.464.238-.898.514-1.298.826a11.144 11.144 0 0 0-1.3 1.18 13.9 13.9 0 0 0-2.316 3.1 13.9 13.9 0 0 0 2.316 3.1 11.144 11.144 0 0 0 1.3 1.18c.4.312.834.588 1.298.826.471.242.96.433 1.466.57a9.176 9.176 0 0 0 3.32.32c.713-.062 1.411-.238 2.073-.522.662-.284 1.281-.68 1.841-1.178.472-.42.89-.875 1.242-1.353zm-11.83 2.128a11.531 11.531 0 0 1-1.785-2.22.46.46 0 0 1 0-.186c.143-.223.3-.438.47-.645a16.326 16.326 0 0 1 1.784-1.87c.367-.324.757-.62 1.166-.884a14.394 14.394 0 0 1 4.562-1.85c.57-.081 1.146-.11 1.72-.086a6.83 6.83 0 0 1 .472.046c.553.085 1.092.234 1.6.46.33.148.643.333.918.57a6.837 6.837 0 0 1 1.35 1.83.473.473 0 0 1 0 .28c-.066.216-.168.423-.302.614-.247.35-.556.66-.918.918a6.837 6.837 0 0 1-1.6.46c-.553.085-1.092.234-1.6.46-.33.148-.643.333-.918.57a6.837 6.837 0 0 1-1.35 1.83.473.473 0 0 1 0 .28c.066.216.168.423.302.614z" />
                    <circle cx="12" cy="12" r="2.5" />
                </svg>
            )
        },
        {
            name: 'Node.js',
            color: 'shadow-[#339933]/20 text-[#339933]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M12 24l-11-6.35v-12.7l11-6.35 11 6.35v12.7l-11 6.35zm-9.314-7.382l9.314 5.378 9.314-5.378v-10.756l-9.314-5.378-9.314 5.378v10.756zM11.14 13.914l-1.62-.843v-.73s.59-.304 1.134-.582V8.95c-.328.188-1.574.887-1.92 1.094-.146.087-.31-.157-.15-.285.49-.395 2.152-1.408 2.508-1.6.14-.075.247 0 .247.165v2.863s1.23-.71 1.74-1.004c.143-.08.28.134.148.25-.56.494-1.436 1.097-1.89 1.487v1.17c.567-.32 1.343-.765 1.884-1.077.14-.08.284.145.148.24l-2.015 1.18c-.143.085-.214 0-.214-.147v-1.1l-1.1-.645.71.41z" />
                </svg>
            )
        },
        {
            name: 'JavaScript',
            color: 'shadow-[#F7DF1E]/20 text-[#F7DF1E]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-1.19-.727-2.182-2.112-2.736-1.127-.42-2.162-.596-3.176-.902-.323-.105-.443-.162-.443-.374 0-.172.164-.263.386-.263.367 0 .618.172.76.543.056.166.115.305.281.305h1.9c.148 0 .19-.074.19-.19l-.02-2.77c0-.13-.08-.184-.132-.184-.047 0-.083.023-.153.076-.84.607-1.93.92-3.214.92-2.33 0-3.69-1.39-3.69-3.41 0-1.86 1.082-3.266 3.425-3.266 2.373 0 3.765 1.418 3.765 3.513 0 .153.075.248.243.248h1.725c.143 0 .195-.083.195-.24 0-3.85-2.67-5.32-5.91-5.32-3.824 0-6.195 2.534-6.195 5.257 0 2.943 2.01 4.793 5.4 5.378l1.37.243c.96.173 1.2.3 1.2.73 0 .428-.42.6-1.125.6-.794 0-1.396-.33-1.576-1.035-.045-.21-.128-.315-.338-.315h-1.92c-.143 0-.21.076-.21.22l.015 2.87c0 .13.06.196.165.196.075 0 .148-.03.21-.1C16.8 19.82 17.5 20 18.5 20c2.4 0 3.65-1.18 3.53-3.09v.03z.196.196z" />
                </svg>
            )
        },
        {
            name: 'Git & GitHub',
            color: 'shadow-white/10 text-white',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            )
        },
        {
            name: 'Tailwind CSS',
            color: 'shadow-[#06B6D4]/20 text-[#06B6D4]',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
            )
        },
    ];

    return (
        <section id="skills" className="py-32 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
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
                            className={`glass-morphism rounded-2xl p-6 h-32 flex flex-col items-center justify-center text-center cursor-default overflow-hidden relative ${skill.color}`}
                        >
                            {/* Name - Visible by default, hidden on hover */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 1, scale: 1 },
                                    hover: { opacity: 0, scale: 0.5 }
                                }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 flex items-center justify-center p-4"
                            >
                                <span className="text-[11px] font-black tracking-[0.2em] uppercase opacity-70">
                                    {skill.name}
                                </span>
                            </motion.div>

                            {/* Icon - Hidden by default, visible on hover */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0, scale: 0.5 },
                                    hover: { opacity: 1, scale: 1.1 }
                                }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 flex items-center justify-center p-4"
                            >
                                <div className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                    {skill.icon}
                                </div>
                            </motion.div>

                            {/* Decorative line */}
                            <motion.div
                                variants={{
                                    initial: { width: "2rem", opacity: 0.2 },
                                    hover: { width: "3rem", opacity: 1 }
                                }}
                                className="absolute bottom-4 h-0.5 bg-current rounded-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

