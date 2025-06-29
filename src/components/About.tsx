import { Code, Database, Globe, Shield, Rocket, Target, Download } from 'lucide-react';
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
    <section
      id="about"
      className="py-20 px-4 relative bg-[#f9f6ff] dark:bg-gradient-to-br dark:from-[#1f0036] dark:to-[#33024d] transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Rocket className="text-purple-600 dark:text-purple-300" size={28} />
          <h2 className="text-4xl font-bold text-purple-700 dark:text-white">About Me</h2>
          <Target className="text-purple-600 dark:text-purple-300" size={28} />
        </div>
        <div className="w-24 h-1 bg-purple-500 dark:bg-purple-400 mx-auto rounded-full"></div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4">
        {/* Text Section */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-2xl">
          <p className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 text-lg leading-relaxed">
            Passionate Web Technology enthusiast with hands-on experience in Web API Testing, Secure Coding, and Full-Stack Development. Proficient in JavaScript, Java, and React with a strong foundation in C, MySQL, and Node.js.
          </p>
          <p className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 text-lg leading-relaxed">
            Dedicated to building secure, scalable, and efficient web solutions while continuously exploring innovative technologies. Currently pursuing Bachelor of Engineering in Computer Science at K S Rangasamy College of Technology.
          </p>

          {/* Location & Contact */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className="flex items-center gap-2 bg-[#f3e9ff] dark:bg-purple-900/50 text-purple-700 dark:text-purple-200 px-5 py-2 rounded-full shadow">
              📍 Salem, Tamil Nadu
            </span>
            <span className="flex items-center gap-2 bg-[#fbe9f3] dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 px-5 py-2 rounded-full shadow">
              📞 +91 9578413638
            </span>
            <Button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-5 py-2 rounded-full shadow-md"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 gap-6 mt-12 md:mt-0 max-w-md w-full">
          <div className="bg-white dark:bg-[#2a003f] rounded-lg p-6 text-center shadow hover:shadow-xl transition-all">
            <Code className="text-purple-600 dark:text-purple-300 mx-auto mb-4" size={36} />
            <h3 className="font-bold text-purple-700 dark:text-white">Clean Code</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Writing maintainable and efficient code</p>
          </div>
          <div className="bg-white dark:bg-[#2a003f] rounded-lg p-6 text-center shadow hover:shadow-xl transition-all">
            <Database className="text-purple-600 dark:text-purple-300 mx-auto mb-4" size={36} />
            <h3 className="font-bold text-purple-700 dark:text-white">Database Design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">MySQL & MongoDB expertise</p>
          </div>
          <div className="bg-white dark:bg-[#2a003f] rounded-lg p-6 text-center shadow hover:shadow-xl transition-all">
            <Globe className="text-purple-600 dark:text-purple-300 mx-auto mb-4" size={36} />
            <h3 className="font-bold text-purple-700 dark:text-white">Web APIs</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">RESTful API development & testing</p>
          </div>
          <div className="bg-white dark:bg-[#2a003f] rounded-lg p-6 text-center shadow hover:shadow-xl transition-all">
            <Shield className="text-purple-600 dark:text-purple-300 mx-auto mb-4" size={36} />
            <h3 className="font-bold text-purple-700 dark:text-white">Security</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Secure coding practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
