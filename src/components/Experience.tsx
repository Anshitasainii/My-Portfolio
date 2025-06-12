import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'education';
  delay: number;
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      organization: "Modern Institute of Technology & Research Centre (MITRC)",
      date: "2021 - 2025",
      description: "Bachelor's degree in Computer Science and Engineering with a focus on software development, data structures, and algorithms.",
      type: 'education',
      delay: 0.1
    },
    {
      id: 2,
      title: "Higher Secondary Education",
      organization: "CBSE",
      date: "2020 - 2021",
      description: "Completed higher secondary education with a focus on Mathematics and Science.",
      type: 'education',
      delay: 0.2
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-primary-500/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My educational qualifications and academic milestones.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-secondary-500 transform md:translate-x-[-0.5px] ml-6 md:ml-0"></div>

          <div className="space-y-12">
            {timelineItems.map((item) => (
              <motion.div 
                key={item.id}
                className="relative flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full transform md:translate-x-[-50%] mt-1.5"></div>

                {/* Left Side */}
                <div className="md:w-1/2 md:pr-12 md:text-right ml-12 md:ml-0 mb-4 md:mb-0">
                  {item.id % 2 !== 0 && (
                    <div className="glass-card p-6">
                      <div className="hidden md:flex items-center gap-2 justify-end mb-2">
                        <span className="text-sm font-medium text-secondary-400">Education</span>
                        <GraduationCap size={18} className="text-secondary-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.organization}</p>
                      <div className="flex items-center gap-1 text-gray-500 my-2 justify-end">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                  {item.id % 2 === 0 && (
                    <div className="glass-card p-6">
                      <div className="hidden md:flex items-center gap-2 mb-2">
                        <GraduationCap size={18} className="text-secondary-400" />
                        <span className="text-sm font-medium text-secondary-400">Education</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.organization}</p>
                      <div className="flex items-center gap-1 text-gray-500 my-2">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
