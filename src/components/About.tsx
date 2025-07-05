
import { Code, Database, Globe, Shield, Rocket, Target, Download, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/ASWIN_K_RESUME_1.pdf';
    link.download = 'Aswin_K_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#faf6ff] via-[#f0e9ff] to-[#ede6ff] dark:from-[#120026] dark:via-[#1e0036] dark:to-[#2a004d] transition-all duration-500">
      {/* Background sparkles (optional) */}
      <div className="absolute -top-10 -right-10 opacity-20 dark:opacity-10 blur-2xl text-purple-300">
        <Rocket size={120} />
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-4">
          <Rocket className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <Target className="text-purple-600 dark:text-purple-300 animate-bounce animation-delay-300" size={32} />
        </div>
        <div className="w-20 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <p className="border-l-4 border-purple-500 dark:border-purple-400 pl-5 text-lg font-medium leading-relaxed hover:translate-x-1 transition-all duration-300">
            Enthusiastic AI/ML beginner with hands-on exposure to Object Detection using TensorFlow/Keras and a strong foundation in Python and ReactJS. Actively learning LLMs, LangChain, and Generative AI with a keen interest in building scalable, real-world AI solutions.
          </p>
          <p className="border-l-4 border-indigo-500 dark:border-indigo-400 pl-5 text-lg font-medium leading-relaxed hover:translate-x-1 transition-all duration-300">
            Currently pursuing my B.E. in Computer Science at K S Rangasamy College of Technology, I'm always exploring new tools and frameworks in AI/ML, web development, and modern technologies to craft innovative solutions.
          </p>

          {/* Location & Resume */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <MapPin size={16} /> Salem, Tamil Nadu
            </span>
            <span className="flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Phone size={16} /> +91 9578413638
            </span>
            <Button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:scale-105 transition-all"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Icon Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Code, title: "AI/ML Development", desc: "TensorFlow, Keras & Python expertise" },
            { icon: Database, title: "Database Design", desc: "MySQL & MongoDB proficiency" },
            { icon: Globe, title: "Web Development", desc: "React.js & full-stack development" },
            { icon: Shield, title: "Object Detection", desc: "Computer vision & AI applications" },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/60 dark:bg-white/10 border border-purple-100 dark:border-purple-500/20 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-center backdrop-blur-md"
            >
              <item.icon className="text-purple-600 dark:text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-bold text-lg text-gray-800 dark:text-white bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
