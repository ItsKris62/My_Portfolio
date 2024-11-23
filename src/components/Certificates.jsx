import React from 'react';

const certificates = [
  { title: 'HCIA - Datacom v1.0', issuer: 'Huawei', date: '2022' },
  { title: 'IBM Cloud Essentials V3', issuer: 'IBM', date: '2021' },
  { title: 'DataCamp - Introduction to SQL', issuer: 'DataCamp', date: '2021' },
  { title: 'SPRING NDG Linux Unhatched', issuer: 'Cisco', date: '2020' },
];

const Certificates = () => {
  return (
    <div id="certificates" className="py-20 bg-primary text-secondary">
      <h2 className="text-3xl font-playfair font-bold text-center mb-8">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div key={index} className="p-4 bg-secondary text-primary rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-edu font-bold">{cert.title}</h3>
            <p className="font-quicksand">{cert.issuer}</p>
            <p className="text-sm font-quicksand italic">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
