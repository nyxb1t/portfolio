import React from 'react';
import GlobalGlow from './components/GlobalGlow/GlobalGlow'; // Add this line
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Extras from './components/Extras/Extras';
import Contact from './components/Contact/Contact';

function App() {
  return (
    // We update the base background to Midnight Violet (#160029) and add font sharpening
    <div className="bg-[#160029] min-h-screen text-[#F5E9E2] font-sans antialiased relative">
      <GlobalGlow /> {/* Add this line: must be z-[-1] so it is behind content */}
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Extras />
      <Contact />
    </div>
  );
}

export default App;