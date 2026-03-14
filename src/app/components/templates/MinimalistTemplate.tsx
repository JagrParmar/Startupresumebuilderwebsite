interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  skills: string[];
  certifications?: string[];
}

interface MinimalistTemplateProps {
  data?: ResumeData;
}

const defaultData: ResumeData = {
  personalInfo: {
    name: "Emma Williams",
    email: "emma.williams@email.com",
    phone: "555.789.0123",
    location: "Portland, OR",
    linkedin: "linkedin.com/in/emmawilliams",
  },
  experience: [
    {
      title: "Marketing Manager",
      company: "Creative Agency Co.",
      duration: "2020 - Present",
      description: [
        "Develop and execute integrated marketing campaigns across digital and traditional channels, generating $3M in new business",
        "Manage team of 5 marketing specialists and collaborate with creative, sales, and product teams",
        "Analyze campaign performance metrics and provide data-driven recommendations to optimize ROI",
        "Lead brand strategy initiatives and maintain brand consistency across all marketing materials",
      ],
    },
    {
      title: "Senior Marketing Specialist",
      company: "TechStart Inc.",
      duration: "2017 - 2020",
      description: [
        "Launched successful product marketing campaigns resulting in 150% increase in product adoption",
        "Managed social media strategy growing followers from 5K to 75K across platforms",
        "Created content marketing strategy including blog, email campaigns, and white papers",
      ],
    },
    {
      title: "Marketing Coordinator",
      company: "Retail Solutions Group",
      duration: "2015 - 2017",
      description: [
        "Coordinated marketing activities including email campaigns, social media, and event planning",
        "Assisted in development of marketing collateral and brand guidelines",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Arts in Marketing",
      school: "University of Oregon",
      year: "2015",
    },
  ],
  skills: [
    "Digital Marketing",
    "Content Strategy",
    "SEO/SEM",
    "Google Analytics",
    "Marketing Automation",
    "Social Media Management",
    "Email Marketing",
    "Adobe Creative Suite",
    "Project Management",
    "Budget Management",
    "Team Leadership",
    "Data Analysis",
  ],
  certifications: [
    "Google Analytics Certified",
    "HubSpot Content Marketing Certification",
  ],
};

export default function MinimalistTemplate({ data = defaultData }: MinimalistTemplateProps) {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-12 shadow-lg text-black" style={{ minHeight: "11in", maxHeight: "11in" }}>
      {/* Header - Ultra Simple */}
      <div className="mb-6">
        <h1 className="text-3xl font-light mb-3 tracking-tight">{data.personalInfo.name}</h1>
        <div className="text-xs text-gray-600 space-y-0.5">
          <p>
            {data.personalInfo.email} | {data.personalInfo.phone}
          </p>
          <p>
            {data.personalInfo.location} | {data.personalInfo.linkedin}
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Experience</h2>
        <div className="space-y-3.5">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="mb-1.5">
                <h3 className="text-sm font-semibold">{exp.title}</h3>
                <div className="flex justify-between items-baseline">
                  <p className="text-sm text-gray-700">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm leading-relaxed text-gray-700 pl-4 relative before:content-['—'] before:absolute before:left-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Education</h2>
        <div className="space-y-2">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-700">{edu.school}</p>
                </div>
                <p className="text-xs text-gray-500">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Skills</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-700">
          {data.skills.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < data.skills.length - 1 && <span className="ml-3 text-gray-400">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Certifications</h2>
          <div className="space-y-1">
            {data.certifications.map((cert, index) => (
              <p key={index} className="text-sm text-gray-700">
                {cert}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}