import React from 'react';
import { motion } from 'framer-motion';

const Extras = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      // STRATEGY 1: Local PDF Hosting. 
      // Put your PDF in the 'public' folder of your React app (e.g., public/certificates/aws.pdf)
      link: "/aws_certificate.pdf" 
    },
    {
      title: "Cloud Foundation",
      issuer: "Great Learning",
      date: "2025",
      link: "https://www.mygreatlearning.com/certificate/ZJKISLYG" 
    },
    {
      title: "Generative AI Program",
      issuer: "Finlatics",
      date: "2025",
      // STRATEGY 2: Credential ID Display + Fallback Link
      // You can link to your LinkedIn post about it, or host a PDF locally.
      credentialId: "Auth ID: FN-982734A", 
      link: "https://finlatics.com/credentialscheck" // Replace with the specific post link, or local PDF
    }
  ];

  const extracurriculars = [
    {
      title: "Ethical Hacking Workshop",
      role: "Participant • IIT Bombay Techfest",
      date: "December 2025",
      description: "Explored the fundamentals of penetration testing, network security, and vulnerability assessment."
    },
    {
      title: "AI Tools Workshop",
      role: "Participant • Be10x",
      date: "May 2025",
      description: "Mastered productivity and technical workflows using cutting-edge AI tools to optimize development and engineering tasks."
    }
  ];

  return (
    <section className="w-full bg-transparent text-white py-24 px-6 md:px-16 relative z-0">
      
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Beyond the <span className="text-emerald-400">Curriculum</span>
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-emerald-400/50 to-transparent rounded-full max-w-[200px]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              <h3 className="text-2xl font-bold text-slate-200">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const isLink = !!cert.link;
                const CardWrapper = isLink ? 'a' : 'div';
                const wrapperProps = isLink 
                  ? { href: cert.link, target: "_blank", rel: "noreferrer", className: "cursor-pointer" } 
                  : { className: "" };

                return (
                  <CardWrapper 
                    key={index}
                    {...wrapperProps}
                    className={`bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl p-5 transition-all duration-300 flex justify-between items-center group shadow-lg ${isLink ? 'hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-cyan-500/10 block' : ''}`}
                  >
                    <div>
                      <h4 className={`text-lg font-bold text-slate-100 flex items-center gap-2 ${isLink ? 'group-hover:text-cyan-400 transition-colors' : ''}`}>
                        {cert.title}
                        {isLink && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        )}
                      </h4>
                      <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                      
                      {/* NEW: Renders the Credential ID subtly if it exists */}
                      {cert.credentialId && (
                        <p className="text-slate-500 text-xs font-mono mt-1.5 opacity-80">
                          {cert.credentialId}
                        </p>
                      )}
                    </div>
                    
                    <span className={`text-xs font-mono text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 whitespace-nowrap ml-4 ${isLink ? 'group-hover:bg-cyan-500/20 transition-colors' : ''}`}>
                      {cert.date}
                    </span>
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Extracurriculars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <h3 className="text-2xl font-bold text-slate-200">Extracurriculars</h3>
            </div>

            <div className="space-y-6">
              {extracurriculars.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-slate-800 hover:border-emerald-500/50 transition-colors group">
                  <div className="absolute w-3 h-3 bg-slate-950 border-2 border-emerald-400 rounded-full -left-[7.5px] top-1.5 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-shadow"></div>
                  <h4 className="text-lg font-bold text-slate-100">{item.title}</h4>
                  <div className="flex flex-wrap items-center gap-3 mt-1 mb-2">
                    <span className="text-emerald-400 font-medium text-sm">{item.role}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="text-slate-500 text-sm font-mono">{item.date}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Extras;