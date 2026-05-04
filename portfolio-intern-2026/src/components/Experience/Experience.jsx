import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const timelineData = [
    {
      type: "project",
      title: "Project Udaan NSS SCE KISS-KIIT",
      organization: "General Volunteer",
      date: "November 2025 - Present",
      description: "Member of the National Service Scheme (NSS) team for Project Udaan, focusing on social welfare, educational outreach, and community development initiatives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      )
    },
    {
      type: "competition",
      title: "Federation of Entrepreneurship Development",
      organization: "University Society Member",
      date: "March 2026 - Present",
      description: "Actively contributing to the FED Society at KIIT, collaborating on web projects and refining skills in modern UI/UX and frontend frameworks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      )
    },
    {
      type: "education",
      title: "B.Tech in Computer Science with AI Specialization (Completed 2nd Year)",
      organization: "KIIT University",
      date: "2024 - Present",
      description: "Currently maintaining an 8.69 CGPA while completing core engineering coursework in Data Structures, Algorithms, OOP, and DBMS.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      )
    }
  ];

  return (
    // Changed bg-slate-950 to bg-transparent
    <section className="min-h-screen w-full bg-transparent text-white py-24 px-6 md:px-16 relative z-0 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Header - NOW PERFECTLY ALIGNED */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            My <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-emerald-400/50 to-transparent rounded-full max-w-[200px]"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8">
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              {/* Glowing Node on the line */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 h-10 w-10 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:border-emerald-400 group-hover:text-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300 z-10">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 hover:bg-slate-800/40 transition-all duration-300 shadow-lg relative overflow-hidden">
                
                {/* Subtle gradient flash on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                    {item.title}
                  </h3>
                  <span className="text-sm font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block w-max">
                    {item.date}
                  </span>
                </div>
                
                <h4 className="text-lg text-slate-400 font-medium mb-4">
                  {item.organization}
                </h4>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;