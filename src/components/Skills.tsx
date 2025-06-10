import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Terminal, Workflow, Briefcase } from 'lucide-react';

interface SkillGroupProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, icon, delay }) => {
  return (
    <motion.div
      className="glass-card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.2)' }}
    >
      <div className="mb-4 p-3 w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            className="px-3 py-1 text-sm bg-primary-900/40 text-primary-300 rounded-full border border-primary-800"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary-400" />,
      skills: ["Java", "JavaScript", "TypeScript", "C++", "C", "HTML", "CSS"],
    },
    {
      title: "Web Development",
      icon: <Terminal className="text-secondary-400" />,
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <Database className="text-accent-400" />,
      skills: ["MongoDB", "MySQL", "MongoDB Atlas", "Mongoose"],
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="text-primary-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "AWS"],
    },
    {
      title: "Development Practices",
      icon: <Workflow className="text-secondary-400" />,
      skills: ["Agile", "CI/CD", "Test-Driven Development", "RESTful APIs"],
    },
    {
      title: "Soft Skills",
      icon: <Briefcase className="text-accent-400" />,
      skills: ["Problem Solving", "Communication", "Teamwork", "Leadership", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-secondary-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise that I bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillGroup 
              key={index}
              title={group.title}
              skills={group.skills}
              icon={group.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;