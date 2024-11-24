import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import serverCabinet from "../assets/images/project-images/cabinet.jpg";
import cleanslate from "../assets/images/project-images/cleanslate-homepage.png";
import portfolioImage from "../assets/images/project-images/portfolio-sample.png";

const projects = [
  {
    title: "A Dry Cleaning and Laundry Web App",
    description:
      "A project for a laundry and dry cleaning service application, with a user dashboard and admin dashboard",
    image: cleanslate,
    technologies: ["React", "Node.js", "GitHub", "MongoDB Atlas"],
    github: "https://github.com/ItsKris62/sparklewash",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and TailwindCSS.",
    image: portfolioImage,
    technologies: ["React", "TailwindCSS"],
    preview: "https://example.com/portfolio",
  },
  {
    title: "Remote Monitoring and Management System",
    description:
      "Implemented an RMM system and added it to our Managed Services Provider portfolio",
    image: "",
    technologies: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Server Cabinet Maintenance",
    description:
      "Network cabling, Server Cabinet setup and cable management, Network Configuration",
    image: serverCabinet,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-secondary text-primary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="relative p-6 bg-primary text-secondary rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleProjectClick(project)}
          >
            <h3 className="text-xl font-edu font-bold mb-2">{project.title}</h3>
            <p className="font-quicksand mb-4">{project.description}</p>
            <div className="flex space-x-2">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-accent text-secondary rounded-full font-quicksand"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="mt-4 w-full h-32 object-cover rounded-lg"
                loading="lazy" // Lazy loading for performance
              />
            )}
          </motion.article>
        ))}
      </div>

      {/* Modal for Selected Project */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-secondary text-primary p-8 rounded-lg max-w-lg shadow-lg relative">
            <button
              onClick={closeModal}
              aria-label={`Close modal for ${selectedProject.title}`}
              className="absolute top-2 right-2 text-xl bg-accent text-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              X
            </button>
            <h3 className="text-2xl font-edu font-bold mb-4">
              {selectedProject.title}
            </h3>
            <p className="font-quicksand mb-4">{selectedProject.description}</p>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={`Detailed screenshot of ${selectedProject.title}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
                loading="lazy"
              />
            )}
            <div className="flex space-x-4 mb-4">
              {selectedProject.technologies?.includes("React") && (
                <FaReact size={24} />
              )}
              {selectedProject.technologies?.includes("Node.js") && (
                <FaNodeJs size={24} />
              )}
              {selectedProject.technologies?.includes("MySQL") && (
                <FaDatabase size={24} />
              )}
            </div>
            {selectedProject.preview && (
              <a
                href={selectedProject.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 bg-accent text-secondary rounded-lg hover:bg-primary hover:text-secondary transition"
              >
                View Live Project
              </a>
            )}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 bg-accent text-secondary rounded-lg hover:bg-primary hover:text-secondary transition mt-2"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
