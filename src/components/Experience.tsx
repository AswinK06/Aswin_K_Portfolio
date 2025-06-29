
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Background styling based on theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-indigo-100/30 dark:from-purple-900/30 dark:via-transparent dark:to-indigo-900/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 dark:bg-violet-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
  <div className="flex justify-center items-center gap-4">
    <Briefcase className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 dark:from-purple-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
      Professional Experience
    </h2>
    <Briefcase className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
  </div>
  <div className="w-20 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-3 rounded-full"></div>
</div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-purple-200/50 dark:border-purple-500/30 hover:border-violet-400/50 dark:hover:border-violet-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Junior Associate Developer - Web Development</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2 font-medium text-lg">Stackit Private Limited</p>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-6">
                    <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                    April 2025 - July 2025 (Ongoing 10 weeks)
                  </div>
                  
                  <ul className="space-y-3 text-gray-800 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Engaged in real-time API testing using Postman for the Iraialaihal project, ensuring seamless data integration and system efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed and optimized web components, improving functionality and user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated with teams to troubleshoot issues, validate API responses, and enhance overall project reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
