import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Song Popularity Predictor",
      description: "Developed an end-to-end ML application using a Random Forest Regressor to predict track success based on audio features.",
      tags: ["Python", "Scikit-learn", "Flask", "Render"],
      github: "https://github.com/nyxb1t/music-popularity-predictor",
      live: "https://music-popularity-predictor-0xc5.onrender.com"
    },
    {
      title: "Spotify Recommendation System",
      description: "Built a content-based system using cosine similarity and vector-based ranking to suggest tracks with similar audio profiles.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      github: "https://github.com/nyxb1t/spotify-recommendation-system"
    },
    {
      title: "Multilingual Chatbots",
      description: "Created a poetic generator and a translation chatbot utilizing pretrained transformer models and LLM APIs.",
      tags: ["HuggingFace", "LLM APIs", "Python"],
      github: "https://github.com/nyxb1t/nlp-chatbots"
    },
    {
      title: "Spotify Data Analysis",
      description: "Conducted statistical analysis on 100k+ tracks to visualize correlations between audio features like energy and popularity.",
      tags: ["Matplotlib", "Seaborn", "Pandas"],
      github: "https://github.com/nyxb1t/spotify-data-analysis"
    }
  ];

  return (
    // Changed bg-slate-950 to bg-transparent to allow global glow through
    <section className="min-h-screen w-full bg-transparent text-white py-24 px-6 md:px-16 relative z-0 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header - NOW PERFECTLY ALIGNED */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-cyan-400/50 to-transparent rounded-full max-w-[200px]"></div>
        </motion.div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project, index) => (
            
            /* INDIVIDUAL CARDS - Now with staggered Framer Motion */
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col min-w-[85vw] sm:min-w-[400px] max-w-[450px] shrink-0 snap-center shadow-lg hover:shadow-cyan-500/10 cursor-grab active:cursor-grabbing"
            >
              <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm group" title="View Source">
                  <svg className="group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  Source
                </a>
                
                {/* CONDITIONAL RENDER: Only shows Demo link if project.live exists */}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm group" title="Live Demo">
                    <svg className="group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;