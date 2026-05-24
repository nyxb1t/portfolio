import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="w-full bg-slate-950 text-white py-24 px-6 relative z-0 overflow-hidden flex flex-col items-center justify-center border-t border-slate-900">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto text-center z-10">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4"
        >
          What's Next?
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
        >
          Let's Build <br className="md:hidden" /> Something.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          I'm currently open to summer internships and collaborative tech projects. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Direct Gmail Redirect Button */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sinha.prachi0605@gmail.com" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 !px-8 !py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-full transition-transform hover:-translate-y-1 w-[200px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Say Hello
          </a>

          {/* Resume Button */}
          <a 
            href="/PS_Resume.pdf" 
            className="flex items-center justify-center gap-3 !px-8 !py-4 bg-transparent text-white font-bold rounded-full border-2 border-slate-700 hover:border-cyan-400 transition-transform hover:-translate-y-1 w-[200px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Resume
          </a>
        </motion.div>

        {/* Minimal Footer Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm"
        >
          <p>© 2026 Prachi Sinha. Built with React & Tailwind.</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/nyxb1t" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/prachi-sinha-88335631a/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;