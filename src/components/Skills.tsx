// import { Award, Sparkles, Code, Globe, Database, Settings, Brain, Wrench } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "Java", level: 80 },
//         { name: "Javascript", level: 80 },
//         { name: "C", level: 75 },
//         { name: "Python", level: 70 }
//       ],
//       icon: Code
//     },
//     {
//       title: "Web Technologies",
//       skills: [
//         { name: "HTML", level: 90 },
//         { name: "CSS", level: 85 },
//         { name: "Bootstrap", level: 80 },
//         { name: "React.js", level: 80 }
//         // { name: "Express.js", level: 75 }
//         // { name: "Node.js", level: 75 }
//       ],
//       icon: Globe
//     },
//     {
//       title: "Databases",
//       skills: [
//         { name: "MySQL", level: 85 },
//         { name: "MongoDB", level: 75 }
//       ],
//       icon: Database
//     },
//     {
//       title: "AI/ML Tools",
//       skills: [
//         { name: "TensorFlow", level: 80 },
//         { name: "Pandas", level: 85 },
//         { name: "NumPy", level: 80 }
//       ],
//       icon: Brain
//     },
//     {
//       title: "Version Control",
//       skills: [
//         { name: "Git", level: 85 },
//         { name: "GitHub", level: 90 }
//       ],
//       icon: Settings
//     },
//     {
//       title: "Development & Testing Tools",
//       skills: [
//         { name: "Figma", level: 75 },
//         { name: "Postman", level: 80 },
//         { name: "Selenium Testing", level: 65 },
//       ],
//       icon: Wrench
//     }
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300"
//     >
//       {/* Background Glows and Gradients */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200/20 via-transparent to-transparent dark:from-indigo-400/20"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-400/20"></div>
//       <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px]"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center space-x-6 mb-4 overflow-visible">
//             <Sparkles className="text-indigo-400 animate-bounce" size={36} />
//             <div className="overflow-visible">
//               <h2 className="block text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text leading-[1.5] pb-2">
//                 Skills & Technologies
//               </h2>
//             </div>
//             <Sparkles className="text-indigo-400 animate-bounce" size={36} />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mt-3"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => {
//             const IconComponent = category.icon;

//             return (
//               <div key={index} className="group relative">
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


import { Award, Sparkles, Code, Globe, Database, Settings, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Javascript", level: 80 },
        { name: "C", level: 75 },
        { name: "Python", level: 70 }
      ],
      icon: Code
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "React.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Node.js", level: 75 }
      ],
      icon: Globe
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ],
      icon: Database
    },
    {
      title: "AI/ML Tools",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 }
      ],
      icon: Brain
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 }
      ],
      icon: Settings
    },
    {
      title: "Development & Testing Tools",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Postman", level: 80 },
        { name: "Selenium Testing", level: 65 },
      ],
      icon: Wrench
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300"
    >
      {/* Background Glows and Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200/20 via-transparent to-transparent dark:from-indigo-400/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-400/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-6 mb-4 overflow-visible">
            <Sparkles className="text-indigo-400 animate-bounce" size={36} />
            <div className="overflow-visible">
              <h2 className="block text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text leading-[1.5] pb-2">
                Skills & Technologies
              </h2>
            </div>
            <Sparkles className="text-indigo-400 animate-bounce" size={36} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

