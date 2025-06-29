import { Award, Trophy, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      score: "Score: 54%",
      image: "/lovable-uploads/3f8e1dde-da90-493b-b0ac-19625aae240f.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      score: "Score: 60%",
      image: "/lovable-uploads/79344da7-973e-4d3c-8af9-316706607608.png"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      score: "Score: 57%",
      image: "/lovable-uploads/7657955f-dd30-4c56-a68f-4057734f8762.png"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      provider: "IBM (Coursera)",
      description: "Comprehensive introduction to artificial intelligence concepts and applications",
      date: "March 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/08155e08-c3cd-4291-9e4c-94bb9c72bed9.png"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA (LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/adce0369-aa69-4691-9b48-43eac96594d0.png"
    },
    {
      title: "Cyber Kushti: Hackathon Participation",
      provider: "BREACHX",
      description: "Successfully participated in the Cyber Kushti cybersecurity hackathon",
      date: "February 2025",
      score: "Certificate of Participation",
      image: "/lovable-uploads/2731a8e6-0d07-43f5-9f68-79100329d60d.png"
    },
    {
      title: "Basics of Python",
      provider: "INFOSYS SPRINGBOARD",
      description: "Fundamental Python programming concepts and practical applications",
      date: "September 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/0316cbdc-df07-4974-8b7d-dd89854c933f.png"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Core Java programming concepts and object-oriented programming principles",
      date: "November 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/10e6747b-43a3-473f-926f-2e4b05a7b833.png"
    },
    {
      title: "Prompt Engineering",
      provider: "INFOSYS SPRINGBOARD",
      description: "Advanced techniques for effective AI prompt design and optimization",
      date: "November 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/276ad3a8-50c6-442b-97c0-216181c848b2.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-indigo-100/30 dark:from-purple-900/30 dark:via-transparent dark:to-indigo-900/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 dark:bg-violet-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading with Animated Icons */}
        <div className="text-center mb-14">
  <div className="flex justify-center items-center gap-4">
    <Trophy className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
    <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
    <Trophy className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
  </div>
  <div className="w-20 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-3 rounded-full"></div>
</div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-purple-200/50 dark:border-purple-500/30 hover:border-violet-400/50 dark:hover:border-violet-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white" />
                  </div>
                  <h4 className="text-gray-800 dark:text-white font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-300 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-blue-600 dark:text-blue-200 font-medium">{cert.score}</span>
                  <span className="text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-800 px-4 py-2 rounded-full border border-blue-300 dark:border-blue-600">
                    <Award size={16} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-700 dark:text-blue-300 text-xs font-medium">Certified</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-white dark:bg-gray-900 border-blue-300 dark:border-blue-600">
                      <DialogHeader>
                        <DialogTitle className="text-gray-800 dark:text-blue-300">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-blue-300 dark:border-blue-600"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
