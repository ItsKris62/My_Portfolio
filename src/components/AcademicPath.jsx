import React from "react";
import { motion } from "framer-motion";

const academicData = [
  {
    institution: "United States International University - Africa",
    degree: "Master of Science in Information Systems and Technology",
    duration: "Jan/2024 - current",
    description: "Focused on Internet Security and Cybercrime.",
  },
  {
    institution: "United States International University - Africa",
    degree: "Bachelor of Science in Information Systems and Technology",
    duration: "Sept/2015 - Aug/2019",
    description:
      "Focused on Internet Security and Networking. Laying a foundation in my IT Career.",
  },
  {
    institution: "St. Thomas of Aquinas Boys High School",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    duration: "2011 - 2014",
    description: "High School",
  },
];

const AcademicPath = () => {
  return (
    <div id="academic" className="py-20 bg-secondary text-primary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-12">
        Academic Path
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-accent h-full"></div>

        {/* Timeline Items */}
        {academicData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-between ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } mb-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline Content */}
            <div className="bg-primary text-secondary p-6 rounded-lg shadow-lg w-2/5">
              <h3 className="text-xl font-edu font-bold">{item.institution}</h3>
              <h4 className="text-lg font-playwrite">{item.degree}</h4>
              <p className="text-sm font-quicksand italic">{item.duration}</p>
              <p className="mt-2 font-quicksand">{item.description}</p>
            </div>

            {/* Timeline Connector */}
            <div className="w-10 h-10 bg-accent rounded-full border-4 border-secondary"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademicPath;
