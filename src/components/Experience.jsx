import React from "react";

//Import images
import citizen_logo from "../assets/images/company-logos/citizen.webp";
import eabl_logo from "../assets/images/company-logos/eabl.webp";
import sledge_logo from "../assets/images/company-logos/sledge.png";
import netscaling_logo from "../assets/images/company-logos/Logo_Image.png";

const experiences = [
  {
    title: "IT Support Lead",
    company: "NetScaling Solutions, LLC",
    duration: "10/2023 – Current",
    details:
      "As an IT Support Lead, I led a team to reduce ticket resolution time by 20% and implemented a Remote Monitoring and Management System, reducing technician workload by 40%.",
    logo: netscaling_logo,
  },
  {
    title: "IT Support Engineer",
    company: "Sledge Group Enterprises Limited",
    duration: "10/2020 – 08/2023",
    details:
      "As an IT Support Engineer, I provided first-line technical support for over 100 users, optimized network performance, and managed user accounts with Active Directory.",
    logo: sledge_logo,
  },
  {
    title: "IT Support Technician Intern",
    company: "Royal Media Services",
    duration: "10/2020 – 08/2023",
    details:
      "As an IT Support Intern, I deployed operating systems, established user accounts, and troubleshooted technical issues across multiple platforms.",
    logo: citizen_logo,
  },
  {
    title: "Support Technician Intern",
    company: "East African Breweries",
    duration: "04/2019 – 06/2019",
    details:
      "During my time as an IT Support Technician Intern, I managed IT hardware and software inventory, executed data recovery procedures, and provided first-level technical support.",
    logo: eabl_logo,
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-20 bg-primary text-secondary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-8">
        Experience
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-secondary text-primary rounded-lg shadow-md"
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="h-12 w-18 mb-4"
            />
            <h3 className="text-xl font-edu font-bold">{exp.title}</h3>
            <h4 className="text-lg font-playwrite">{exp.company}</h4>
            <p className="text-sm font-quicksand">{exp.duration}</p>
            <p className="mt-2 font-quicksand">{exp.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
