
import { Rocket, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "IPL Match Prediction",
      description:
        "Built a machine learning model to predict IPL match outcomes using past match data. Implemented Logistic Regression and Random Forest algorithms for classification and used Pandas, Scikit-learn, and Matplotlib for preprocessing and analysis.",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Matplotlib", "Logistic Regression", "Random Forest"],
      type: "Machine Learning Project",
      highlights: [
        "Predictive modeling with ML algorithms",
        "Data preprocessing & analysis",
        "Statistical analysis of cricket data",
        "Model evaluation & optimization",
      ],
      codeUrl: "",
      demoUrl: "",
    },
    {
      title: "Wanderluxe",
      description:
        "Developed a Tourism Management System using JavaScript & MySQL, streamlining bookings and reducing manual effort by 40%. Features comprehensive booking automation and database optimization using HTML, CSS, JavaScript, MySQL, and VS Code.",
      tech: ["JavaScript", "MySQL", "HTML", "CSS", "VS Code"],
      type: "Tourism Management System",
      highlights: [
        "40% efficiency improvement",
        "Booking automation",
        "Database optimization",
        "User-friendly interface",
      ],
      codeUrl: "https://github.com/AswinK06/Tourism-Management-System",
      demoUrl: "",
    },
    {
      title: "Agriseithi",
      description:
        "Built a responsive web platform providing real-time agricultural insights, integrating APIs for data-driven updates using React.js, HTML, CSS, and JavaScript to enhance accessibility for farmers.",
      tech: [
        "React.js",
        "JavaScript",
        "APIs",
        "HTML",
        "CSS",
        "Responsive Design",
      ],
      type: "Agricultural Technology Platform",
      highlights: [
        "Real-time data integration",
        "API integration",
        "Farmer accessibility",
        "Responsive design",
        "Data-driven insights",
      ],
      codeUrl: "https://github.com/AswinK06/Agriseithi",
      demoUrl: "https://agriseithi.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900"
    >
      {/* Background styling based on theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-indigo-100/30 dark:from-purple-900/30 dark:via-transparent dark:to-indigo-900/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 dark:bg-violet-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
       <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3">
            <Rocket className="text-purple-600 dark:text-purple-300 animate-bounce" size={28} />
           <div className="overflow-visible">
              <h2 className="block text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text leading-[1.5] pb-2">
                   Featured Projects
              </h2>
            </div>
            <Rocket className="text-purple-600 dark:text-purple-300 animate-bounce" size={28} />
          </div>
          <div className="w-24 h-1.5 bg-purple-500 dark:bg-purple-400 mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 border border-purple-200/50 dark:border-purple-500/30 hover:border-violet-400/50 dark:hover:border-violet-400/50 hover:shadow-2xl shadow-lg">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-gray-800 dark:text-white font-semibold mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-violet-600 dark:text-violet-400 text-sm"
                        >
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-100/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-300/50 dark:border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.codeUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-violet-500 text-violet-600 dark:text-violet-400 hover:bg-violet-500 hover:text-white"
                        onClick={() => window.open(project.codeUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
