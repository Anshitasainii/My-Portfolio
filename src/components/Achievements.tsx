import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CalendarClock, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Achievements</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Key milestones and accomplishments in my professional journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-card p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.2)',
              y: -5
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Trophy className="text-primary-400" size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <CalendarClock size={16} />
                  <span>2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                 Miss Farewell 2025
                </h3>
                <p className="text-gray-300 leading-relaxed">
                 Honored during the college farewell ceremony for exceptional personality, leadership, and positive contribution to campus life.
                </p>
                
              </div>
            </div>
          </motion.div>

            <motion.div 
            className="glass-card p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.2)',
              y: -5
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Trophy className="text-primary-400" size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <CalendarClock size={16} />
                  <span>2023</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Coordinated Freshers' Party at MITRC
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Successfully managed and executed the Freshers' Party event at Modern Institute of Technology & Research Centre. 
                  Demonstrated exceptional leadership, logistics coordination, and event management skills, ensuring a memorable 
                  experience for all participants.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Users size={16} className="text-secondary-400" />
                  <span className="text-gray-400">Led a team of 15+ volunteers</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-white mb-2">Hackathon Participant</h3>
              <p className="text-gray-300">
                Participated in multiple coding competitions and hackathons, showcasing problem-solving skills and technical expertise.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-white mb-2">Technical Workshop Facilitator</h3>
              <p className="text-gray-300">
                Conducted workshops on web development fundamentals, helping peers learn essential skills and technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;