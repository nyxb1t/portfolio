import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // We define the text variables here so Framer Motion can map over them
  const quoteText = "Currently diving deep into Full-Stack architectures and exploring how DeepTech can solve real-world problems.";
  const bioParagraph1 = "I am a Computer Science Engineer (AI Specialization) who spends most of my time exploring the \"why\" behind the code. With an 8.69 CGPA, I’ve built a solid academic foundation, but my real learning happens while I'm building—whether that's fine-tuning a Random Forest Regressor or experimenting with LLM APIs.";
  const bioParagraph2 = "I’m currently navigating the intersection of Machine Learning and Modern Web Development. My background is rooted in Python and Data Science, but I’m now teaching myself React and Frontend Design to transform my backend models into interactive, user-friendly tools. I’m a big believer in learning by doing and constant iteration.";

  // Animation variants for the word-by-word reveal
  const containerReveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.2 }
    }
  };

  const wordReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="min-h-screen w-full bg-slate-950 text-white py-20 px-6 md:px-16 flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Background Glow - "Breathing" Effect */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Column: The Text Narrative */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              About <span className="text-emerald-400">Me</span>
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-emerald-400/50 to-transparent rounded-full max-w-[200px]"></div>
          </motion.div>

          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            
            {/* Word-by-word cinematic reveal for Paragraph 1 */}
            <motion.p variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {bioParagraph1.split(" ").map((word, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block mr-1">
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* Word-by-word cinematic reveal for Paragraph 2 */}
            <motion.p variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {bioParagraph2.split(" ").map((word, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block mr-1">
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* True Terminal Typing Effect with Blinking Cursor */}
            <motion.p 
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.8 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-300 font-mono text-base border-l-2 border-emerald-400 pl-4 py-1 bg-slate-900/30 rounded-r-lg"
            >
              {quoteText.split("").map((char, index) => (
                <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  {char}
                </motion.span>
              ))}
              {/* The Blinking Cursor */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-emerald-400 ml-1 translate-y-1"
              />
            </motion.p>
          </div>
        </div>

        {/* Right Column: The "Bento Box" Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-colors shadow-xl"
          >
            <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Machine Learning & NLP</h3>
            <p className="text-sm text-slate-400">Architecting end-to-end ML pipelines and chatbots using Scikit-learn, Hugging Face, and Flask for real-time inference.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-colors shadow-xl"
          >
            <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Software Engineering</h3>
            <p className="text-sm text-slate-400">Building scalable applications grounded in Data Structures, OOP, and React, focused on clean code and efficient execution.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:col-span-2 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-colors shadow-xl flex items-center gap-6"
          >
            <div className="bg-slate-800 w-14 h-14 rounded-full flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Data Systems & Analytics</h3>
              <p className="text-sm text-slate-400">Designing robust SQL schemas and performing deep exploratory analysis via Pandas and Matplotlib to derive technical insights.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;