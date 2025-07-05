import { Trophy, Award, Star, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const achievements = [
    {
      title: "🏆 First Prize Winner",
      subtitle: "5G Networking Presentation",
      description: "Won first prize at Kumarasamy College of Engineering for expertise in next-generation communication technologies and innovative presentation skills",
      provider: "CHAKRAWAR Technical Combat",
      date: "March 2023",
      image: "/lovable-uploads/5cf2bc37-e8e9-4042-bd58-3013c45ed00f.png"
    },
    {
      title: "🏅 Top Performer",
      subtitle: "Ranked 227th out of 3000+",
      description: "Achieved competitive ranking in Unstop's Engineering February Series - a monthly problem-solving challenge demonstrating technical excellence",
      provider: "Certificate of Excellence",
      date: "February 2025",
      image: "/lovable-uploads/7ab3520a-0d19-4318-8221-8dbf4a1a5d0c.png"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-indigo-100/30 dark:from-purple-900/30 dark:via-transparent dark:to-indigo-900/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 dark:bg-violet-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading with bouncing icons */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-4">
            <Star className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <Star className="text-purple-600 dark:text-purple-300 animate-bounce" size={32} />
          </div>
          <div className="w-20 h-1 bg-purple-500 dark:bg-purple-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-purple-200/50 dark:border-purple-500/30 hover:border-violet-400/50 dark:hover:border-violet-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg border-2 border-blue-300 dark:border-blue-400 flex items-center justify-center">
                      <Trophy className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="text-blue-600 dark:text-blue-400" size={24} />
                      <h3 className="text-blue-700 dark:text-blue-300 font-bold text-xl">{achievement.title}</h3>
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{achievement.subtitle}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-600 dark:text-blue-200 text-sm font-medium">{achievement.provider}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-white dark:bg-gray-900 border-blue-300 dark:border-blue-600">
                      <DialogHeader>
                        <DialogTitle className="text-gray-900 dark:text-blue-300">{achievement.subtitle}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img
                          src={achievement.image}
                          alt={`${achievement.subtitle} Certificate`}
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

export default Achievements;
