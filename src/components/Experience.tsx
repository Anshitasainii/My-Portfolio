import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Briefcase } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "education" | "experience";
  delay: number;
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Software Engineer",
      organization: "REI Systems",
      date: "July 2025 - Present",
      description:
        "Contributing to enterprise projects using the MEAN stack (MongoDB, Express, Angular, Node.js) and AI solutions, focusing on scalable, data-driven applications.",
      type: "experience",
      delay: 0.05,
    },
    {
      id: 3,
      title: "B.Tech in Computer Science",
      organization: "Modern Institute of Technology & Research Centre (MITRC)",
      date: "2021 - 2025",
      description:
        "Bachelor's degree in Computer Science and Engineering with a focus on software development, data structures, and algorithms.",
      type: "education",
      delay: 0.18,
    },
    {
      id: 4,
      title: "Higher Secondary Education",
      organization: "CBSE",
      date: "2020 - 2021",
      description:
        "Completed higher secondary education with a focus on Mathematics and Science.",
      type: "education",
      delay: 0.24,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My professional experience and academic qualifications.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Center vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary-500 to-secondary-500 z-0" />

          <div className="space-y-12">
            {timelineItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                {/* Dot on center line for this item */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full z-10" />

                {/* LEFT column (experience) */}
                <div className="md:w-1/2 w-full md:pr-8">
                  {item.type === "experience" && (
                    <div className="glass-card p-6 md:ml-auto md:text-right z-20">
                      <div className="flex items-center gap-2 justify-end mb-2">
                        <span className="text-sm font-medium text-secondary-400">
                          Experience
                        </span>
                        <Briefcase size={18} className="text-secondary-400" />
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

                {/* RIGHT column (education) */}
                <div className="md:w-1/2 w-full md:pl-8">
                  {item.type === "education" && (
                    <div className="glass-card p-6 md:mr-auto md:text-left z-20">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={18} className="text-secondary-400" />
                        <span className="text-sm font-medium text-secondary-400">
                          Education
                        </span>
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
