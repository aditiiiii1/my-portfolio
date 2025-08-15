import React, { useState } from 'react';
import {
  Github, Mail, Code, User, Briefcase, FileText, Download, Menu, X
} from 'lucide-react';
import myPhoto from './images/my-photo.png';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-R4KY6VNBDP'); // Paste your ID here

const navItems = [
  { name: 'About', href: '#about', icon: <User size={20} /> },
  { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
  { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
  { name: 'Resume', href: '#resume', icon: <FileText size={20} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
];


const skills = {
  'Languages & Technologies': ['C', 'Java', 'HTML', 'CSS', 'JavaScript', 'Python', 'RESTful APIs'],
  'Frameworks & Libraries': ['React.js', 'Node.js','Bootstrap', 'Express.js', 'Tailwind CSS', 'Redux', 'NumPy', 'Pandas', 'Matplotlib'],
  'Databases & Platforms': ['MongoDB', 'SQL', 'PostgreSQL', 'ServiceNow'],
  'Tools': ['Git', 'GitHub', 'Microsoft Word', 'Excel', 'PowerPoint'],
  'Concepts': ['Data Visualization', 'UX design', 'MVC Architecture', 'Agile/Scrum Methodology']
};

const projects = [
  {
    title: 'Gemini Pro Financial Decoder',
    description: 'Developed an AI-powered financial analysis tool using Google\'s Gemini Pro API that transforms complex financial reports into clear, actionable insights. Implemented a responsive frontend featuring a professional dark blue and sea green color scheme. The system analyzes balance sheets, income statements, and cash flow data to generate executive summaries and highlight key metrics. Built and deployed within 12 hours during a hackathon, demonstrating rapid prototyping skills.',
    githubUrl: 'https://github.com/aditiiiii1/financial-decoder',
  },
  {
    title: 'Auto-Reply Email Assistant',
    description: 'Created an intelligent email automation system that processes and responds to incoming messages using custom business logic. Engineered direct IMAP server integration for secure email handling without third-party APIs. Implemented natural language processing to categorize emails and generate context-aware responses. Reduced manual email response time by 70% for routine inquiries while maintaining personalized communication standards.',
    githubUrl: 'https://github.com/aditiiiii1/smart-autoreply-emailassistant',
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio website was designed to turn clear ideas into a simple and engaging user experience. React was chosen for its efficiency and seamless navigation across pages, while Tailwind CSS supports a clean, minimal layout and consistent responsiveness on any device. Content is organised for easy access, allowing visitors to quickly explore work and background. Every detail aims to make browsing intuitive and fast, offering a distraction-free experience.',
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerClass = "max-w-6xl mx-auto px-6 lg:px-8";
  const sectionClass = "py-20 md:py-32";
  const headingClass = "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d11979] mb-8 font-poppins";

  return (
    <div className="bg-[#f5f5dc] min-h-screen font-sans text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@400;500;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-logo { font-family: 'Brush Script MT', cursive; }
      `}</style>

      <header className="fixed w-full z-50 bg-[#f5f5dc]/80 backdrop-blur-lg">
        <div className={`${containerClass} flex items-center justify-between py-6`}>
          <div className="text-2xl font-poppins font-light text-[#d11979] relative">
            aditi
            <span className="absolute -right-3 bottom-[0.2em] text-[0.4em] leading-[0]">
              <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 py-2 px-4 rounded-full font-medium text-gray-600 hover:text-[#d11979]"
              >
                {item.icon} {item.name}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#f5f5dc]/95 backdrop-blur-sm z-40 pt-20">
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium text-gray-800 hover:text-[#d11979]"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="font-inter">
        <section id="hero" className="h-screen flex items-center justify-center">
          <div className={`${containerClass} text-center px-4`}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-poppins font-bold text-[#d11979] mb-6 leading-tight">
              Hi, I'm <span className="text-gray-800">Aditi!</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              A tech enthusiast with a flair for creative problem-solving
              and a drive to make systems smarter :)
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="#projects"
                className="bg-[#d11979] hover:bg-[#b3176a] text-white font-semibold py-3 px-8 rounded-full text-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full text-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className={`${sectionClass} scroll-mt-[2.0rem]`}>
  <div className={`${containerClass} flex flex-col md:flex-row items-start gap-12`}>
    <div className="w-full md:w-1/2 text-left self-center">
      <h2 className={headingClass}>About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        I am a Computer Science and Business Systems undergraduate at Vignana Bharathi Institute of Technology, Hyderabad
        and on track to graduate in 2026. My enthusiasm for technology motivates me to 
        explore diverse areas, ranging from web development to backend systems and 
        automation. I view technology as more than just coding, believing that digital solutions can truly inspire and create lasting impact. I also hold two ServiceNow 
        certifications and enjoy diving deep into the world of technology. I am always 
        eager to expand my skill set and keep up with the latest trends in this dynamic 
        field.
        <br /><br />
        My journey includes more than just technical achievements. I served as the 
        Membership Development Officer at IEEE - VBIT SB, where I led community building 
        initiatives and encouraged collaboration among my peers. This experience helped 
        me grow as a communicator and team player.
      </p>
    </div>
    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 shrink-0 rounded-full shadow-2xl overflow-hidden self-center md:ml-16">
      <img src={myPhoto} alt="Aditi's Profile" className="object-cover w-full h-full" />
    </div>
  </div>
</section>

        <section id="skills" className={sectionClass}>
          <div className={containerClass}>
            <h2 className={headingClass}>Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-[#f5f5dc] border-2 border-[#d11979]/30 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span key={index} className="bg-[#d11979]/10 text-gray-800 text-sm font-medium px-4 py-2 rounded-full border border-[#d11979]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={sectionClass}>
          <div className={containerClass}>
            <h2 className={headingClass}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
  <div key={index} className="bg-[#f5f5dc] border-2 border-[#d11979]/30 p-6 rounded-xl shadow-lg">
    <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">{project.title}</h3>
    <p className="text-gray-600 mb-4">{project.description}</p>
    
    {/* Only render if githubUrl is provided */}
    {project.githubUrl && (
      <div className="flex flex-wrap gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-800 font-semibold"
        >
          <Github size={16} /> Source Code
        </a>
      </div>
    )}
  </div>
))}

            </div>
          </div>
        </section>

        <section id="resume" className={`${sectionClass} scroll-mt-20`}>
          <div className={containerClass}>
            <h2 className={headingClass}>My Resume</h2>
            <div className="max-w-2xl mx-auto bg-[#f5f5dc] border-2 border-[#d11979]/30 rounded-xl shadow-lg">
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">View My Professional Journey</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/Aditi_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-[#d11979]/10 text-[#d11979] rounded-lg border border-[#d11979]/20"
                  >
                    <FileText size={18} />
                    View Resume
                  </a>
                  <a 
                    href="/Aditi_Resume.pdf"
                    download="Aditi_A_Resume.pdf"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-[#d11979]/10 text-[#d11979] rounded-lg border border-[#d11979]/20"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <div className={containerClass}>
            <h2 className={headingClass}>Contact Me</h2>
            <p className="text-gray-600 text-lg text-center mb-12">
            I am looking forward to new opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="mailto:aditiii.a19@gmail.com" 
                className="flex items-center gap-3 bg-[#d11979] text-white py-3 px-6 rounded-full hover:bg-[#b3176a] transition-colors"
              >
                <Mail size={24} />
                <span className="font-semibold text-lg">Gmail</span>
              </a>
              <a 
                href="https://linkedin.com/in/aditiii19/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="font-semibold text-lg">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/aditiiiii1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
                <span className="font-semibold text-lg">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f5dc] text-center py-6">
        <p className="text-gray-500 text-sm mt-2">&copy; {new Date().getFullYear()} Aditi A. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;