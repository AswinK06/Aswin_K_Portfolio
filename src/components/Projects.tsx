
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Wanderluxe",
      description: "Developed a Tourism Management System using JavaScript & MySQL, streamlining bookings and reducing manual effort by 40%. Features comprehensive booking automation and database optimization using HTML, CSS, JavaScript, MySQL, and VS Code.",
      tech: ["JavaScript", "MySQL", "HTML", "CSS", "VS Code"],
      type: "Tourism Management System",
      highlights: ["40% efficiency improvement", "Booking automation", "Database optimization", "User-friendly interface"],
      codeUrl: "https://github.com/AswinK06/Agriseithi",
      demoUrl: "https://github.com/AswinK06/Agriseithi"
    },
    {
      title: "Consultancy Project",
      description: "Created a user-friendly UI/UX for a temple website, designing login/signup modules, a landing page, and an employment details section using Figma for clean, intuitive design.",
      tech: ["UI/UX Design", "Figma", "Frontend Development", "User Authentication"],
      type: "Temple Management Platform",
      highlights: ["Complete UI/UX design", "User authentication system", "Employment management", "Professional Figma design"],
      codeUrl: "https://github.com/AswinK06/Consultancy-Project",
      demoUrl: "https://gokul-kovil-project.web.app/home"
    },
    {
      title: "Agriseithi",
      description: "Built a responsive web platform providing real-time agricultural insights, integrating APIs for data-driven updates using React.js, HTML, CSS, and JavaScript to enhance accessibility for farmers.",
      tech: ["React.js", "JavaScript", "APIs", "HTML", "CSS", "Responsive Design"],
      type: "Agricultural Technology Platform",
      highlights: ["Real-time data integration", "API integration", "Farmer accessibility", "Responsive design", "Data-driven insights"],
      codeUrl: "https://github.com/AswinK06/Agriseithi",
      demoUrl: "https://github.com/AswinK06/Agriseithi"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100">
      {/* Light theme background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-indigo-100/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-300/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/95 transition-all duration-300 hover:scale-105 border border-purple-200/50 hover:border-violet-300/50 hover:shadow-2xl shadow-lg">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-violet-600 text-sm font-medium">{project.type}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-gray-900 font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-violet-600 text-sm">• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100/80 text-purple-700 px-3 py-1 rounded-full text-xs border border-purple-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
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
