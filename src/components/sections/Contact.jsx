import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Get In <span className="accent-gradient">Touch</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50"
                    >
                        Have a project in mind? Let's build something amazing together.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
                    {/* Social Links */}
                    <div className="md:col-span-2 flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:border-accent-purple/50 transition-all">
                                <Mail className="text-accent-purple" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase font-bold tracking-widest">Email</p>
                                <a href="mailto:ankitmina2512@gmail.com" className="text-lg font-medium hover:text-accent-purple transition-colors">Ankit Meena</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-accent-blue/50 transition-all">
                                <Linkedin className="text-accent-blue" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase font-bold tracking-widest">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/ankit-meena77/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-accent-blue transition-colors">Ankit Meena</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-white/30 transition-all">
                                <Github size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase font-bold tracking-widest">GitHub</p>
                                <a href="https://github.com/Ankitmina25" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-white/80 transition-colors">Ankit Meena</a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 glass-morphism rounded-3xl p-8 space-y-6"
                    >
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-purple/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-purple/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20"
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-purple/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20 resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full py-4 bg-premium-gradient rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 group">
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
