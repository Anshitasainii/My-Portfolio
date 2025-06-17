import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink, Github, ShoppingCart, FileText, Landmark, LayoutDashboard, UserSquare
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string; // NEW FIELD
  technologies: string[];
  liveLink: string;
  githubLink: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio",
      description: "Designed and developed a responsive portfolio website to showcase projects, skills, and contact information,built with React, Vite, Tailwind CSS and deployed on Netlify",
      image: "/portfolio.png",
      video:"",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS","Vite","HTML","CSS"],
      liveLink: "https://anshitasaini.netlify.app/",
      githubLink: "https://github.com/Anshitasainii/My-Portfolio",
      icon: <UserSquare size={24} className="text-primary-400" />
    },
    {
      id: 2,
      title: "E-Commerce Platform(User)",
      description: "A full-featured e-commerce platform user authentication using JWT, and secure payment processing. Includes product management, shopping cart, delivery tracking.",
      image: "/user.png",
      video:"",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Stripe"],
      liveLink: "https://forever-user-beige.vercel.app/",
      githubLink: "https://github.com/Anshitasainii/E-Commerce",
      icon: <ShoppingCart size={24} className="text-primary-400" />
    },
    {
      id: 3,
      title: "Admin Dashboard(E-Commerce)",
      description: "A full-featured e-commerce platform with admin dashboard ,includes product management like listing products,adding products,remove products and order tracking functionalities.",
      image: "/admin.png",
      video:"",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Stripe"],
      liveLink: "https://forever-admin-beige.vercel.app/",
      githubLink: "https://github.com/Anshitasainii/E-Commerce",
      icon: <ShoppingCart size={24} className="text-primary-400" />
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for blogs with CRUD operations, user authentication, content moderation, and responsive design. Implemented with MERN stack and MySQL for database management.",
      image: "/blog.png",
      video:"",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      liveLink: "https://blogging-app-ebon.vercel.app/",
      githubLink: "https://github.com/Anshitasainii/Blogging-App",
      icon: <FileText size={24} className="text-secondary-400" />
    },
    
    {
      id: 5,
      title: "Bringger",
      description: "Another full-featured E-Commerce admin dashboard ,includes product management like listing products,adding products,remove products and order tracking functionalities like update , cancelled, etc",
      image: "/bringer.png",
      video:"",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      liveLink: "",
      githubLink: "https://github.com/Anshitasainii/Bringger",
      icon: <LayoutDashboard size={24} className="text-accent-400" />
    },{
      id: 6,
      title: "Banking System App",
      description: "A secure banking application built with PHP and MySQL with transaction management, account transfers, and user authentication. Includes security features like encryption and transaction logs.",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery", "AJAX"],
      liveLink: "",
      githubLink: "https://github.com/Anshitasainii/Bank",
      icon: <Landmark size={24} className="text-accent-400" />
    }
  ];

  const handleMouseEnter = (id: number) => setActiveProject(id);
  const handleMouseLeave = () => setActiveProject(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-secondary-500/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A selection of my most recent and impactful projects showcasing my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 10px 10px -5px rgba(99, 102, 241, 0.1)',
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-48 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 rounded-full bg-dark-300/70">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-primary-900/40 text-primary-300 border border-primary-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-white px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white px-4 py-2 rounded-full bg-dark-100 hover:bg-dark-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
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

export default Projects;
