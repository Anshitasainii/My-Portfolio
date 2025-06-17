import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Brain, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-60 h-60 bg-secondary-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-3 glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Full Stack Developer with a passion for creating elegant solutions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a dedicated Full Stack Developer with expertise in the MERN stack, Java, and Cloud Computing.
              My passion lies in building robust, scalable, and user-friendly web applications that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
              or engaging in technical communities to stay updated with the latest industry trends.
            </p>
            <motion.a 
              href="/Anshita_Saini_Resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Brain size={24} className="text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Problem Solver</h4>
                <p className="text-gray-300">I enjoy tackling complex problems and finding efficient solutions using my DSA knowledge.</p>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 bg-secondary-500/20 rounded-lg">
                <Users size={24} className="text-secondary-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Team Player</h4>
                <p className="text-gray-300">I thrive in collaborative environments and believe in the power of teamwork to create exceptional products.</p>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 bg-accent-500/20 rounded-lg">
                <Coffee size={24} className="text-accent-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Continuous Learner</h4>
                <p className="text-gray-300">I'm passionate about staying updated with the latest technologies and expanding my skill set.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;