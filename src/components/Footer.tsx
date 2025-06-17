import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-2">
              <Code size={24} className="text-primary-500" />
              <span className="text-xl font-bold gradient-text">Anshita Saini</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a 
              href="https://github.com/Anshitasainii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/anshita-saini-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:anshitasaini30@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>Designed & Built by Anshita Saini</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;