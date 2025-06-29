import { Code, Database, Globe, Shield, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/f5c7362c-7dc4-4df3-a1ad-142ce42a94a0.png';
    link.download = 'Aswin_K_Resume.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-300">
      {/* Background and Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/30 to-transparent dark:via-slate-800/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-indigo-200/20 dark:from-purple-900/20 dark:via-transparent dark:to-indigo-900/20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-800 dark:text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              Passionate Web Technology enthusiast with hands-on experience in Web API Testing, 
              Secure Coding, and Full-Stack Development. Proficient in JavaScript, Java, and React, 
              with strong fundamentals in C, MySQL, and Node.js.
            </p>
            <p className="text-lg leading-relaxed">
              Currently pursuing Bachelor of Engineering in Computer Science at K S Rangasamy College of Technology. 
              I love building scalable, secure, and elegant solutions while staying curious and innovative.
            </p>

            {/* Contact + Resume */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-gradient-to-r from-violet-200/50 to-purple-200/30 dark:from-violet-900/50 dark:to-purple-800/30 text-violet-700 dark:text-violet-300 px-6 py-3 rounded-full text-sm border border-violet-300/50 dark:border-violet-500/30 backdrop-blur-sm">
                📍 Salem, Tamil Nadu
              </span>
              <span className="bg-gradient-to-r from-purple-200/50 to-indigo-200/30 dark:from-purple-900/50 dark:to-indigo-800/30 text-purple-700 dark:text-purple-300 px-6 py-3 rounded-full text-sm border border-purple-300/50 dark:border-purple-500/30 backdrop-blur-sm">
                📞 +91 9578413638
              </span>
              <Button 
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-3 rounded-full text-sm border border-indigo-500/30 backdrop-blur-sm"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card-group">
              <Code className="text-violet-600 dark:text-violet-400 mx-auto mb-4" size={40} />
              <h3 className="skill-heading">Clean Code</h3>
              <p className="skill-desc">Writing maintainable and efficient code</p>
            </div>
            <div className="bg-card-group">
              <Database className="text-purple-600 dark:text-purple-400 mx-auto mb-4" size={40} />
              <h3 className="skill-heading">Database Design</h3>
              <p className="skill-desc">MySQL & MongoDB expertise</p>
            </div>
            <div className="bg-card-group">
              <Globe className="text-indigo-600 dark:text-indigo-400 mx-auto mb-4" size={40} />
              <h3 className="skill-heading">Web APIs</h3>
              <p className="skill-desc">RESTful API development & testing</p>
            </div>
            <div className="bg-card-group">
              <Shield className="text-pink-600 dark:text-pink-400 mx-auto mb-4" size={40} />
              <h3 className="skill-heading">Security</h3>
              <p className="skill-desc">Secure coding practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
