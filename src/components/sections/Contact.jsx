import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, XCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com/
// 2. Create a Service (Gmail → copy Service ID below)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" in the template to your own email (ankitmina2512@gmail.com)
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID = 'service_9r3juvx';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_wg66uzf';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'ctr3TNSBEs3xx3qiw';   // e.g. 'abcDEFghiJKL'

// ─── Rate Limit Config ────────────────────────────────────────────────────────
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in ms
const STORAGE_KEY = 'email_send_timestamps';

const getRateLimitData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveRateLimitData = (timestamps) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
};

const checkRateLimit = () => {
    const now = Date.now();
    let timestamps = getRateLimitData();

    // Filter out timestamps older than the window
    timestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    saveRateLimitData(timestamps);

    if (timestamps.length >= RATE_LIMIT_MAX) {
        const oldest = timestamps[0];
        const waitTimeMs = RATE_LIMIT_WINDOW - (now - oldest);
        const waitTimeMins = Math.ceil(waitTimeMs / 60000);
        return waitTimeMins;
    }
    return null;
};


const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none ' +
    'focus:border-accent-purple/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)] ' +
    'transition-all placeholder:text-white/25 text-sm';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error | rate-limited
    const [waitTime, setWaitTime] = useState(0);


    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) return;

        // Check Rate Limit
        const retryInMins = checkRateLimit();
        if (retryInMins) {
            setWaitTime(retryInMins);
            setStatus('rate-limited');
            setTimeout(() => setStatus('idle'), 6000);
            return;
        }

        setStatus('loading');
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    to_name: 'Ankit',
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            // Record successful send
            const timestamps = getRateLimitData();
            timestamps.push(Date.now());
            saveRateLimitData(timestamps);

            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };


    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-purple/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.4em] text-accent-purple mb-3"
                    >
                        Let's talk
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Get In <span className="accent-gradient">Touch</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-lg mx-auto"
                    >
                        Have a project in mind or just want to say hi? Drop me a message — I'll get back to you!
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
                    {/* Left — Contact Links */}
                    <div className="md:col-span-2 flex flex-col justify-center space-y-6">
                        {[
                            {
                                icon: <Mail size={22} />,
                                label: 'Email',
                                value: 'ankitmina2512@gmail.com',
                                href: 'mailto:ankitmina2512@gmail.com',
                                color: 'text-accent-purple',
                                glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] group-hover:border-accent-purple/50',
                            },
                            {
                                icon: <Linkedin size={22} />,
                                label: 'LinkedIn',
                                value: 'ankit-meena77',
                                href: 'https://www.linkedin.com/in/ankit-meena77/',
                                color: 'text-accent-blue',
                                glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] group-hover:border-accent-blue/50',
                            },
                            {
                                icon: <Github size={22} />,
                                label: 'GitHub',
                                value: 'Ankitmina25',
                                href: 'https://github.com/Ankitmina25',
                                color: 'text-white/80',
                                glow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-white/30',
                            },
                        ].map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-5 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center transition-all duration-300 ${item.color} ${item.glow}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-white/35 uppercase font-bold tracking-widest mb-0.5">{item.label}</p>
                                    <p className={`text-sm font-semibold ${item.color} transition-colors`}>{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right — Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 glass-morphism rounded-3xl p-8 space-y-5 relative overflow-hidden"
                    >
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 blur-2xl rounded-bl-full pointer-events-none" />

                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2 block">Name</label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2 block">Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2 block">Message</label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01 }}
                                rows="4"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        {/* Submit button */}
                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 bg-premium-gradient rounded-xl font-bold flex items-center justify-center gap-2 transition-all group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader size={18} className="animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </motion.button>

                        {/* Toast feedback */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium"
                                >
                                    <CheckCircle size={18} />
                                    Message sent! I'll get back to you soon. 🎉
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium"
                                >
                                    <XCircle size={18} />
                                    Something went wrong. Please try again or email me directly.
                                </motion.div>
                            )}

                            {status === 'rate-limited' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium"
                                >
                                    <XCircle size={18} />
                                    Too many messages. Please try again in {waitTime} {waitTime === 1 ? 'minute' : 'minutes'}.
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
