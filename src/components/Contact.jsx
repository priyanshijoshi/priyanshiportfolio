// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMail, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const phoneNumber = "917987132135";

    const text = `Hello Priyanshi,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'joshipriyanshi764@gmail.com', href: 'mailto:joshipriyanshi764@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '917987132135', href: 'tel:917987132135' },
  ];

  const socials = [
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/priyanshi-joshiwes/', label: 'LinkedIn' },
  ];

  const inputClass = "w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-all duration-300";

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">Get In Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-white/60 max-w-lg mx-auto">Have a project in mind? Drop me a message and let's create something amazing together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 space-y-8 text-left">
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <motion.a key={item.label} href={item.href} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + idx * 0.1 }} whileHover={{ x: 5 }} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-black/10 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500/50 transition-colors text-lg">{item.icon}</div>
                  <div>
                    <p className="text-slate-500 dark:text-white/40 text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-slate-700 dark:text-white/80 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
              <p className="text-slate-500 dark:text-white/40 text-sm uppercase tracking-wider mb-4 font-semibold">Follow Me</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a key={social.label} href={social.href} aria-label={social.label} whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }} className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-500 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-lg border border-black/5 dark:border-white/5">{social.icon}</motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="glass-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <p className="text-slate-800 dark:text-white/80 text-lg font-bold mb-2">Let's work together!</p>
                <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">I'm currently available for freelance projects and full-time positions.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-slate-500 dark:text-white/50 text-sm mb-2 font-semibold">Your Name</label>
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-500 dark:text-white/50 text-sm mb-2 font-semibold">Your Email</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-slate-500 dark:text-white/50 text-sm mb-2 font-semibold">Subject</label>
                <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-slate-500 dark:text-white/50 text-sm mb-2 font-semibold">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
              </div>

              <motion.button type="submit" disabled={status === 'sending'} whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer shadow-md shadow-cyan-950/15">
                {status === 'sending' ? (<><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block"><FiSend /></motion.span>Sending...</>) : (<><FiSend />Send Message</>)}
              </motion.button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/20">
                  <FiCheckCircle className="text-lg" />Message sent successfully!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">
                  <FiAlertCircle className="text-lg" />Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
