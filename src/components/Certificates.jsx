import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { 
    title: 'Introduction to Cloud', 
    issuer: 'IBM - Cognitive Class', 
    date: 'Dec - 2023', 
    link: 'https://courses.cognitiveclass.ai/certificates/f02a7cf21d6e4d92b954b0f940d60daf' // Online certificate link
  },
  { 
    title: 'Information Technology Fundamentals', 
    issuer: 'IBM-SkillsBuild', 
    date: 'Dec - 2022', 
    link: 'https://www.credly.com/badges/dbfb4591-b856-4044-a2bf-40b8c71e5350/linked_in_profile' // No link available
  },
  { 
    title: 'SQL and Relational Databases 101', 
    issuer: 'IBM - Cognitive Class', 
    date: 'March - 2023', 
    link: 'https://courses.cognitiveclass.ai/certificates/230d321a70b64c3f8252c79076340ff4' 
  },
  { 
    title: 'IBM Cloud Essentials V3', 
    issuer: 'IBM - Cognitive Class', 
    date: 'Jan - 2023', 
    link: 'https://courses.cognitiveclass.ai/certificates/e565a3123ac64834bac55848735ae255' 
  },
  { 
    title: 'CS403: Introduction to Modern Database Systems', 
    issuer: 'Saylor Academy', 
    date: 'Oct - 2024', 
    link: 'https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1729677105/7504490980CR.pdf' 
  },
];

const Certificates = () => {
  return (
    <div id="certificates" className="py-20 bg-secondary text-primary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-12">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-primary text-secondary rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-edu font-bold mb-2">{cert.title}</h3>
            <p className="text-lg font-quicksand">{cert.issuer}</p>
            <p className="text-sm font-quicksand italic">{cert.date}</p>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-3 py-1 bg-accent text-secondary text-sm font-quicksand rounded-md hover:bg-secondary hover:text-primary transition-colors"
              >
                View Online
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
