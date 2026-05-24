import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Deepfake Detection System",
      description: "Engineered an end-to-end deepfake detection pipeline utilizing metadata features, featuring a fully modular architecture from data preparation to final deployment.",
      tags: ["Scikit-learn", "Metadata Analysis", "Python", "Data Pipeline"],
      github: "https://github.com/nyxb1t/deepfake-detection-system"
    },
    {
      title: "Real Estate Price Analyzer",
      description: "Developed a Real Estate Price Analyzer evaluating multiple ML models. Achieved 92% R² accuracy using a fine-tuned XGBoost model, complete with comprehensive feature importance analysis.",
      tags: ["Scikit-learn", "XGBoost", "Python", "Pandas"],
      github: "https://github.com/nyxb1t/real-estate-price-analyzer"
    },
    {
      title: "Handwritten Digit Recognition",
      description: "Developed an Artificial Neural Network for handwritten digit recognition on the MNIST dataset. Achieved ~98% accuracy, featuring custom input predictions and comprehensive performance visualizations.",
      tags: ["Python", "ANN", "TensorFlow", "Keras"],
      github: "https://github.com/nyxb1t/handwritten-digit-recogniser"
    },
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
    // FORCED DARK BACKGROUND: Changed bg-transparent to bg-slate-950
    <section className="min-h-screen w-full bg-slate-950 text-white py-24 px-4 md:px-16 relative z-0 overflow-hidden">
      
      {/* Cinematic Accent - Changed to a very subtle Cyan glow to kill the violet */}
      <div className="absolute top-[30%] right-[10%] w-[50vw] h-[50vw] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-cyan-400/50 to-transparent rounded-full max-w-[200px]"></div>
          </div>
          
          <div className="md:hidden flex items-center gap-2 text-cyan-400/70 text-sm font-mono mt-2 animate-pulse">
            <span>Swipe to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </motion.div>

        {/* CONTAINER: Added -mx-4 to allow cards to bleed to edges on mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-5 pb-12 pt-4 px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // FIXED WIDTH: w-[88vw] fits perfectly on almost any mobile screen
              className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col w-[88vw] md:w-[420px] shrink-0 snap-center shadow-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  Source
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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