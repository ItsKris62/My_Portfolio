import React from 'react';

const projects = [
  {
    title: 'Network Optimization Tool',
    description: 'A tool to monitor and optimize network performance.',
  },
  {
    title: 'Support Ticket System',
    description: 'Built a streamlined support ticketing solution.',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-secondary text-primary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-primary text-secondary rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-edu font-bold mb-2">{project.title}</h3>
            <p className="font-quicksand">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
