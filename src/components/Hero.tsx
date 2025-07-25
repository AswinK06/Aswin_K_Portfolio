
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing animation state
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const typingTexts = [
    "AI/ML Intern @ EduSkills & Google",
    "Future Software Engineer 🚀",
    "Tech Symposium Winner",
    "Web App Designer",
    "MERN Stack Developer",
    "LeetCode Problem Solver"
  ];

  useEffect(() => {
    const currentString = typingTexts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000); // Wait 4s before backspacing
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? 200 : 100); // Typing speed vs backspacing speed

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, typingTexts]);

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-300">
      <div className="text-center text-gray-800 dark:text-gray-200 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-indigo-400 p-1 bg-gradient-to-r from-purple-400 to-indigo-400 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/0ec66dcd-fc62-4ab8-83ab-98f6cd039a05.png" 
                  alt="Aswin K - Professional Photo"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              
              {/* Subtle ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-pulse"></div>
            </div>
          </div>
          
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
              Aswin K
          </h1>

          
          {/* Typing Animation */}
          <div className="mb-6 h-16 flex items-center justify-center">
            <div className="text-xl md:text-2xl text-black dark:text-white font-semibold">
              <span>{currentText}</span>
              <span className="animate-pulse text-black dark:text-white">|</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate web technology enthusiast with hands-on experience in Web API testing, secure coding, and full-stack development. 
            Focused on building secure, scalable, and testable web solutions.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-8 py-3 text-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/AswinK06" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/aswin-k-6a40ab259" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://leetcode.com/u/Aswin_2005/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </a>
          <a 
            href="mailto:aswinkannan0606@gmail.com" 
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-purple-500 cursor-pointer hover:text-purple-600 transition-colors duration-300" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
