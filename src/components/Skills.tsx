
// import { Award, Sparkles, Code, Globe, Database, Settings } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "Java", level: 80 },
//         { name: "JavaScript", level: 80 },
//         { name: "C", level: 70 },
//         { name: "Python", level: 70 }
//       ],
//       color: "blue",
//       icon: Code
//     },
//     {
//       title: "Web Technologies",
//       skills: [
//         { name: "HTML", level: 85 },
//         { name: "CSS & Tailwind CSS", level: 75 },
//         { name: "React.js", level: 80 },
//         { name: "Bootstrap", level: 80 }
//       ],
//       color: "green",
//       icon: Globe
//     },
//     {
//       title: "Databases", 
//       skills: [
//         { name: "MySQL", level: 80 },
//         { name: "MongoDB", level: 75 }
//       ],
//       color: "purple",
//       icon: Database
//     },
//     {
//       title: "Development & Testing Tools",
//       skills: [
//         { name: "Git", level: 80 },
//         { name: "GitHub", level: 85 },
//         { name: "VS Code", level: 85 },
//         { name: "Figma", level: 75 },
//         { name: "Postman", level: 80 }
//       ],
//       color: "orange",
//       icon: Settings
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-gray-900 dark:bg-gradient-to-br dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 light:bg-gradient-to-br light:from-slate-900 light:via-indigo-900 light:to-purple-900 transition-colors duration-300">
//       {/* Education-themed background for light mode */}
//       <div className="absolute inset-0 dark:bg-transparent light:bg-gradient-to-br light:from-slate-900 light:via-indigo-900 light:to-purple-900"></div>
//       <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-indigo-400/20 dark:via-transparent dark:to-transparent light:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] light:from-indigo-400/20 light:via-transparent light:to-transparent"></div>
//       <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] dark:from-purple-400/20 dark:via-transparent dark:to-transparent light:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] light:from-purple-400/20 light:via-transparent light:to-transparent"></div>
      
//       {/* Floating geometric shapes */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-violet-500/30 rounded-full blur-2xl animate-pulse"></div>
//       <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-violet-400/30 to-indigo-500/30 rounded-full blur-2xl animate-pulse"></div>
      
//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Sparkles className="text-indigo-400 animate-bounce" size={40} />
//             <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </h2>
//             <Sparkles className="text-indigo-400 animate-bounce" size={40} />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {skillCategories.map((category, index) => {
//             const IconComponent = category.icon;
            
//             return (
//               <div key={index} className="group relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                 <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 shadow-xl hover:scale-105">
//                   <div className="flex items-center mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
//                       <IconComponent size={24} className="text-white" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                       {category.title}
//                     </h3>
//                   </div>
                  
//                   <div className="space-y-4">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div key={skillIndex} className="group/skill">
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="text-sm font-medium text-gray-300">
//                             {skill.name}
//                           </span>
//                           <span className="text-xs text-indigo-400 opacity-75">
//                             {skill.level}%
//                           </span>
//                         </div>
//                         <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
//                           <div 
//                             className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105"
//                             style={{ width: `${skill.level}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import { Award, Sparkles, Code, Globe, Database, Settings } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "Java", level: 80 },
//         { name: "JavaScript", level: 80 },
//         { name: "C", level: 70 },
//         { name: "Python", level: 70 }
//       ],
//       color: "blue",
//       icon: Code
//     },
//     {
//       title: "Web Technologies",
//       skills: [
//         { name: "HTML", level: 85 },
//         { name: "CSS & Tailwind CSS", level: 75 },
//         { name: "React.js", level: 80 },
//         { name: "Bootstrap", level: 80 }
//       ],
//       color: "green",
//       icon: Globe
//     },
//     {
//       title: "Databases", 
//       skills: [
//         { name: "MySQL", level: 80 },
//         { name: "MongoDB", level: 75 }
//       ],
//       color: "purple",
//       icon: Database
//     },
//     {
//       title: "Development & Testing Tools",
//       skills: [
//         { name: "Git", level: 80 },
//         { name: "GitHub", level: 85 },
//         { name: "VS Code", level: 85 },
//         { name: "Figma", level: 75 },
//         { name: "Postman", level: 80 }
//       ],
//       color: "orange",
//       icon: Settings
//     }
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300"
//     >
//       {/* Soft radial gradient overlays */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200/20 via-transparent to-transparent dark:from-indigo-400/20"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-400/20"></div>

//       {/* Glows */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px]"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Sparkles className="text-indigo-400 animate-bounce" size={40} />
//             <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </h2>
//             <Sparkles className="text-indigo-400 animate-bounce" size={40} />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skillCategories.map((category, index) => {
//             const IconComponent = category.icon;

//             return (
//               <div key={index} className="group relative">
//                 {/* Glow behind card */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 dark:from-slate-700/20 dark:to-slate-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//                 <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-8 rounded-xl border border-slate-200/40 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
//                   <div className="flex items-center mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
//                       <IconComponent size={24} className="text-white" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-800 dark:text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                       {category.title}
//                     </h3>
//                   </div>

//                   <div className="space-y-4">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div key={skillIndex} className="group/skill">
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                             {skill.name}
//                           </span>
//                           <span className="text-xs text-indigo-500 opacity-75">
//                             {skill.level}%
//                           </span>
//                         </div>
//                         <div className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
//                           <div
//                             className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105"
//                             style={{ width: `${skill.level}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { Award, Sparkles, Code, Globe, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 70 },
        { name: "Python", level: 70 }
      ],
      color: "blue",
      icon: Code
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS & Tailwind CSS", level: 75 },
        { name: "React.js", level: 80 },
        { name: "Bootstrap", level: 80 }
      ],
      color: "green",
      icon: Globe
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ],
      color: "purple",
      icon: Database
    },
    {
      title: "Development & Testing Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 80 }
      ],
      color: "orange",
      icon: Settings
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200/20 via-transparent to-transparent dark:from-indigo-400/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-400/20"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-indigo-400 animate-bounce" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <Sparkles className="text-indigo-400 animate-bounce" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 dark:from-slate-700/20 dark:to-slate-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-8 rounded-xl border border-slate-200/40 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-indigo-500 opacity-75">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

