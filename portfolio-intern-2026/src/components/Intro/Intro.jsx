import React from 'react';
import { motion } from 'framer-motion';

import avatar from '../../assets/avatar.png';

const Intro = () => {
  return (
    // Restored bg-slate-950 to keep your original solid theme
    <section className="relative h-screen w-full flex flex-row flex-nowrap items-center bg-slate-950 text-white overflow-hidden">
      
      {/* 1. Cinematic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. LEFT SIDE - Animated Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: '50%' }} 
        className="h-full flex items-center justify-end pr-[60px] z-10"
      >
        {/* THE FLOATING AVATAR PHYSICS */}
        <motion.div 
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          {/* Subtle glow behind the image that pulses gently */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <img 
            src={avatar} 
            alt="Prachi" 
            className="relative h-[65vh] w-auto rounded-2xl shadow-2xl border border-slate-700/50 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 3. RIGHT SIDE - Animated Content */}
      <div style={{ width: '50%' }} className="h-full flex flex-col items-start justify-center pl-[60px] z-10">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl font-bold mb-4 tracking-tighter leading-none"
        >
          Prachi<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Sinha
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 my-6 origin-left rounded-full"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl text-slate-200 font-mono mb-2 uppercase tracking-[0.2em]"
        >
          SOFTWARE ENGINEER
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-slate-400 font-mono mb-8"
        >
          AI Specialization <span className="text-emerald-500/50 mx-2">|</span> Full Stack Development <span className="text-emerald-500/50 mx-2">|</span> Data Analysis
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-md bg-slate-800/30 border border-slate-700/50 rounded-r-xl border-l-4 border-l-emerald-400 p-5 backdrop-blur-sm shadow-xl"
        >
          <p className="text-slate-300 text-lg leading-relaxed italic">
            "Bridging the gap between complex Machine Learning models and user-centric web applications to build intelligent, data-driven solutions."
          </p>
        </motion.div>

        {/* Interactive Social Buttons (Native SVGs) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex gap-5 mt-10"
        >
          {/* GitHub */}
          <a href="https://github.com/nyxb1t" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800/80 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 rounded-full border border-slate-700 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/prachi-sinha-88335631a/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-slate-800/80 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 rounded-full border border-slate-700 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          
          {/* Direct Gmail Link */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sinha.prachi0605@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center w-12 h-12 bg-slate-800/80 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 rounded-full border border-slate-700 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 hover:-translate-y-1"
            title="Email Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Intro;