import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass-morphism p-1">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                                <img
                                    src={profileImg}
                                    alt="Ankit Meena"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Abstract Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-purple/30 blur-3xl rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-8">About <span className="accent-gradient">Me</span></h2>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                I am <span className="text-white font-semibold">Ankit Meena</span>, a 3rd year B.Tech Computer Science student passionate about full stack development.
                            </p>
                            <p>
                                I specialize in the <span className="text-accent-blue font-semibold">MERN stack</span> and love building real-world scalable applications that solve meaningful problems. My journey in tech is driven by curiosity and a constant desire to turn complex ideas into elegant code.
                            </p>
                            <div className="pt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                                <div>
                                    <h4 className="text-accent-purple font-bold text-2xl mb-1">3rd Year</h4>
                                    <p className="text-sm text-white/50 uppercase tracking-wider">B.Tech CSE</p>
                                </div>
                                <div>
                                    <h4 className="text-accent-blue font-bold text-2xl mb-1">MERN</h4>
                                    <p className="text-sm text-white/50 uppercase tracking-wider">Specialization</p>
                                </div>
                                <div>
                                    <h4 className="text-accent-purple font-bold text-2xl mb-1">150+</h4>
                                    <p className="text-sm text-white/50 uppercase tracking-wider">LeetCode</p>
                                </div>
                                <div>
                                    <h4 className="text-accent-blue font-bold text-2xl mb-1">100+</h4>
                                    <p className="text-sm text-white/50 uppercase tracking-wider">GFG</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
