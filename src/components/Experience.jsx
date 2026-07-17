import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Company Name", // Add your company name here
      duration: "3 Months",
      details: [
        "Developed and deployed multiple high-conversion public landing pages.",
        "Built secure internal admin panels for data management (Confidential).",
        "Worked with React, Next.js, and Tailwind CSS to create responsive UIs."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Present",
      details: [
        "Built complete web solutions for clients including neptura.online and birladhramshalaayodhya.in.",
        "Managed end-to-end development from UI design to backend deployment.",
        "Delivered responsive, fast-loading websites using modern web tech."
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b border-green-500 pb-2 inline-block">
        &gt; Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-green-800 pl-4">
            <h3 className="text-xl font-semibold text-green-400">{exp.role}</h3>
            <div className="text-sm text-green-600 mb-2">
              <span className="mr-4">@ {exp.company}</span>
              <span>[{exp.duration}]</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-sm">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;