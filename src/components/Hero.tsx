import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Background with Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-[pulse_4s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-secondary-400 text-lg mb-2 font-mono">&lt;Hello World /&gt;</h3>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text animate-glow">Anshita Saini</span>
              </h1>
            </motion.div>

            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-16 font-mono">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI & LangChain Enthusiast',
                  2000,
                  'MERN & MEAN Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-primary-300"
              />
            </div>

            <motion.p
              className="text-gray-400 mb-8 text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Crafting elegant solutions to complex problems through clean, efficient code.
              Passionate about building scalable applications and exploring new technologies.
            </motion.p>

            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <motion.a
                href="https://github.com/Anshitasainii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary-500/20 transition-colors group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-white group-hover:text-primary-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anshita-saini-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary-500/20 transition-colors group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="text-white group-hover:text-primary-400 transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:anshitasaini30@gmail.com"
                className="p-3 glass-card rounded-full hover:bg-primary-500/20 transition-colors group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 size={24} className="text-white group-hover:text-primary-400 transition-colors" />
              </motion.a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full bg-transparent border border-primary-500 text-white font-medium hover:bg-primary-500/10 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
            </div>
          </motion.div>

          {/* <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[400px] glass-card rounded-2xl overflow-hidden">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
                className="h-full"
              >
                <div>
                  <img src="/Anshita 1.jpg" alt="Slide 1" className="object-cover h-[400px] w-full" />
                </div>
                <div>
                  <img src="/Anshita 2.jpg" alt="Slide 2" className="object-cover h-[400px] w-full" />
                </div>
               
              </Carousel>      
                    </div>
          </motion.div> */}
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="block">
            <ArrowDown className="text-primary-400 animate-bounce" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;