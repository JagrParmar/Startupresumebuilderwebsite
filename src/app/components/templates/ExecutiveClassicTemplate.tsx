interface ResumeData {
  personalInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    duration: string;
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    year: string;
  }>;
  certifications?: string[];
  professional: {
    expertise: string[];
    leadership: string[];
  };
}

interface ExecutiveClassicTemplateProps {
  data?: ResumeData;
}

const defaultData: ResumeData = {
  personalInfo: {
    name: "Michael R. Anderson",
    address: "Boston, MA 02116",
    phone: "(617) 555-0123",
    email: "m.anderson@email.com",
  },
  summary:
    "Senior executive with 15+ years of leadership experience driving organizational transformation, revenue growth, and operational excellence. Proven ability to build high-performing teams, develop strategic initiatives, and deliver measurable results.",
  experience: [
    {
      title: "Chief Operating Officer",
      company: "GlobalTech Solutions",
      location: "Boston, MA",
      duration: "2019 - Present",
      achievements: [
        "Oversee operations for $500M enterprise software company with 800+ employees across 12 locations",
        "Led digital transformation initiative resulting in 40% improvement in operational efficiency and $75M in cost savings",
        "Restructured go-to-market strategy, achieving 28% increase in annual recurring revenue",
        "Built and mentored executive leadership team, reducing turnover by 35%",
      ],
    },
    {
      title: "Vice President of Operations",
      company: "Enterprise Systems Inc.",
      location: "New York, NY",
      duration: "2015 - 2019",
      achievements: [
        "Directed operations for three business units generating $300M in combined annual revenue",
        "Implemented lean six sigma methodologies, improving process efficiency by 32% and reducing operational costs by $18M",
        "Spearheaded international expansion into EMEA region, establishing operations in 5 countries",
      ],
    },
    {
      title: "Director of Strategic Planning",
      company: "Tech Innovations Corp.",
      location: "San Francisco, CA",
      duration: "2011 - 2015",
      achievements: [
        "Developed 5-year strategic plan adopted by board of directors, guiding company through 150% revenue growth",
        "Conducted market analysis and competitive intelligence to identify new business opportunities",
        "Led due diligence for 4 acquisitions totaling $200M",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Harvard Business School",
      location: "Boston, MA",
      year: "2008",
    },
    {
      degree: "Bachelor of Science in Industrial Engineering",
      school: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      year: "2003",
    },
  ],
  certifications: [
    "Certified Six Sigma Black Belt",
    "Project Management Professional (PMP)",
  ],
  professional: {
    expertise: [
      "Strategic Planning & Execution",
      "Operational Excellence",
      "P&L Management",
      "Digital Transformation",
    ],
    leadership: [
      "Team Building & Development",
      "Executive Coaching",
      "Board Presentations",
      "Stakeholder Relations",
    ],
  },
};

export default function ExecutiveClassicTemplate({ data = defaultData }: ExecutiveClassicTemplateProps) {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-10 shadow-lg text-black" style={{ minHeight: "11in", maxHeight: "11in" }}>
      {/* Header - Centered Classic Style */}
      <div className="text-center mb-4 pb-3 border-b border-gray-400">
        <h1 className="text-2xl font-bold uppercase tracking-wide mb-2">{data.personalInfo.name}</h1>
        <div className="text-xs space-y-0.5">
          <p>{data.personalInfo.address}</p>
          <p>
            {data.personalInfo.phone} | {data.personalInfo.email}
          </p>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="mb-3.5">
        <h2 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-1 border-b border-gray-300">
          Executive Summary
        </h2>
        <p className="text-sm leading-relaxed">{data.summary}</p>
      </div>

      {/* Core Competencies */}
      <div className="mb-3.5">
        <h2 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-1 border-b border-gray-300">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          <div>
            <ul className="space-y-0.5">
              {data.professional.expertise.map((item, index) => (
                <li key={index} className="text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-0.5">
              {data.professional.leadership.map((item, index) => (
                <li key={index} className="text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-3.5">
        <h2 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-1 border-b border-gray-300">
          Professional Experience
        </h2>
        <div className="space-y-2.5">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold uppercase">{exp.title}</h3>
                <span className="text-xs">{exp.duration}</span>
              </div>
              <p className="text-sm italic mb-1">
                {exp.company}, {exp.location}
              </p>
              <ul className="space-y-0.5">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-sm leading-relaxed">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-1 border-b border-gray-300">Education</h2>
        <div className="space-y-1.5">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <p className="text-sm font-bold">{edu.degree}</p>
                <span className="text-xs">{edu.year}</span>
              </div>
              <p className="text-sm italic">
                {edu.school}, {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-1 border-b border-gray-300">
            Professional Certifications
          </h2>
          <div className="text-sm">
            {data.certifications.map((cert, index) => (
              <span key={index}>
                {cert}
                {index < data.certifications!.length - 1 ? " | " : ""}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}