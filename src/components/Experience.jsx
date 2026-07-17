import demoVideo from "../assests/demo-video.mp4"

const Experience = () => {
  const experiences = [
    {
      role: "Fullstack Web Developer",
      company: "e-Marketing",
      duration: "Dec 2025 - May 2026",
      details: [
        "Developed a full-stack website with CRM and marketing sites using React, Node.js, and MongoDB.",
        "Engineered a secure admin dashboard featuring Role-Based Access Control (RBAC) and analytics.",
        "Built lead capture systems integrating automated workflows and Google Sheets API.",
        "Created and optimized landing pages for speed, SEO, and conversions."
      ],
      videoUrl: demoVideo, 
      companyUrl: "https://global.e-marketing.io/" 
    },
    {
      role: "Freelance Web Developer",
      company: "Remote",
      duration: "Sep 2025 - Nov 2025",
      details: [
        "Built complete web solutions for clients including neptura.online and birladhramshalaayodhya.in and other resort websites too.",
        "Designed and developed fully responsive landing pages for digital marketing and hospitality clients.",
        "Focused on Next.js, Tailwind CSS, SEO, and smooth user experience."
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 glitch text-green-600">
        Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-green-800 pl-4">
            <h3 className="text-xl font-semibold text-green-400">{exp.role}</h3>
            
            <div className="text-sm text-green-600 mb-2">
              <span className="mr-4">@ {exp.company}</span>
              <span>[{exp.duration}]</span>
              {exp.companyUrl && (
                <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="ml-4 underline hover:text-green-400">
                  [View Site]
                </a>
              )}
            </div>

            <ul className="list-disc list-inside space-y-1 text-green-300 mb-4">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-sm">{detail}</li>
              ))}
            </ul>

            {exp.videoUrl && (
              <div className="mt-4">
                <p className="text-sm text-green-600 mb-2">Admin Panel :</p>
                <video 
                  controls 
                  className="w-full max-w-lg border border-green-800 rounded opacity-80 hover:opacity-100 transition-opacity"
                >
                  <source src={exp.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;