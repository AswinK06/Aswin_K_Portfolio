import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Background styling based on theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-indigo-100/30 dark:from-purple-900/30 dark:via-transparent dark:to-indigo-900/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 dark:bg-violet-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading with Animation */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-4">
            <GraduationCap className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Education
            </h2>
            <GraduationCap className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
          </div>
          <div className="w-20 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-purple-200/50 dark:border-purple-500/30 hover:border-violet-400/50 dark:hover:border-violet-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={40} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Engineering</h3>
                <p className="text-blue-600 dark:text-blue-300 mb-2 font-medium text-lg">Computer Science Engineering</p>
                <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MapPin size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                  K S Rangasamy College of Technology, Salem, Tamil Nadu
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-4">
                  <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                  2022 - Present
                </div>
                <div className="bg-blue-50 dark:bg-slate-800/60 px-6 py-4 rounded-lg border border-blue-200 dark:border-purple-500/30">
                  <div className="text-blue-700 dark:text-blue-300 font-bold text-xl">
                    CGPA: 8.38/10 (Till 5th semester)
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    Consistently maintaining excellent academic performance throughout the program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
