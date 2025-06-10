import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  link: string;
  delay: number;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Shankara Global Hackathon Finalist",
      organization: "Shankara Technologies",
      date: "Mar 2024",
      link: "https://drive.google.com/file/d/1iQJneMFMlJfitC-sbzXJwnBsIauQ8FWq/view?usp=sharing",
      delay: 0.1
    },
    {
      id: 2,
      title: "Mastering DevOps & Cloud Computing",
      organization: "Cloud Academy",
      date: "Mar 2024",
      link: "https://drive.google.com/file/d/16PLDlTaRMMtoLI8GW3QhPt_lEr8dsmBQ/view?usp=sharing",
      delay: 0.2
    },
    {
      id: 3,
      title: "Web Development Internship",
      organization: "TechCorp Inc.",
      date: "Jun 2024",
      link: "https://drive.google.com/file/d/17ltUKHKnIlDV6bjpjUeLlTXwntFGPWXZ/view?usp=sharing",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Certifications</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my expertise and continuous learning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map(cert => (
            <motion.div
              key={cert.id}
              className="mb-6 glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cert.delay }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.2)'
              }}
            >
              <div className="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary-500/20">
                    <Award className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-400">{cert.organization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {cert.date}
                  </div>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;