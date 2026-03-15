interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    portfolio: string;
    summary: string;
  };
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skills: string;
}

interface MinimalistTemplateProps {
  scale?: number;
  data?: ResumeData;
}

export default function MinimalistTemplate({ scale = 1, data }: MinimalistTemplateProps) {
  // Use provided data or fallback to default
  const personalInfo = data?.personalInfo || {
    fullName: "Emma Williams",
    email: "emma.williams@email.com",
    phone: "555.789.0123",
    location: "Portland, OR",
    linkedin: "linkedin.com/in/emmawilliams",
    portfolio: "",
    summary: "",
  };

  const experiences = data?.experiences || [
    {
      id: "1",
      title: "Marketing Manager",
      company: "Creative Agency Co.",
      location: "Portland, OR",
      startDate: "2020",
      endDate: "Present",
      description: "• Develop and execute integrated marketing campaigns across digital and traditional channels, generating $3M in new business\n• Manage team of 5 marketing specialists and collaborate with creative, sales, and product teams\n• Analyze campaign performance metrics and provide data-driven recommendations to optimize ROI\n• Lead brand strategy initiatives and maintain brand consistency across all marketing materials",
    },
  ];

  const education = data?.education || [
    {
      id: "1",
      degree: "Bachelor of Arts in Marketing",
      institution: "University of Oregon",
      location: "Oregon",
      graduationDate: "2015",
    },
  ];

  const projects = data?.projects || [];

  const skills = data?.skills || "Digital Marketing, Content Strategy, SEO/SEM, Google Analytics, Marketing Automation, Social Media Management, Email Marketing, Adobe Creative Suite, Project Management, Budget Management, Team Leadership, Data Analysis";

  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.75 * scale}in`,
      }}
    >
      {/* Header - Ultra Simple */}
      <div className="mb-6">
        <h1 className="text-3xl font-light mb-3 tracking-tight">{personalInfo.fullName}</h1>
        <div className="text-xs text-gray-600 space-y-0.5">
          <p>
            {personalInfo.email} | {personalInfo.phone}
          </p>
          <p>
            {personalInfo.location}
            {personalInfo.linkedin && ` | ${personalInfo.linkedin}`}
            {personalInfo.portfolio && ` | ${personalInfo.portfolio}`}
          </p>
        </div>
      </div>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Summary</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Experience</h2>
          <div className="space-y-3.5">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="mb-1.5">
                  <h3 className="text-sm font-semibold">{exp.title}</h3>
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm text-gray-700">{exp.company}</p>
                    <p className="text-xs text-gray-500">
                      {exp.startDate} - {exp.endDate || "Present"}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  {exp.description.split('\n').map((line, idx) => (
                    <div key={idx} className="text-sm leading-relaxed text-gray-700 pl-4 relative before:content-['—'] before:absolute before:left-0">
                      {line.trim().startsWith('•') ? line.substring(1).trim() : line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Projects</h2>
          <div className="space-y-2">
            {projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="text-sm font-semibold">
                  {proj.name} | {proj.technologies}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">• {proj.description}</p>
                {proj.link && <p className="text-xs text-gray-500">Link: {proj.link}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Education</h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-sm font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-700">
            {skills.split(', ').map((skill, index, arr) => (
              <span key={index}>
                {skill.trim()}
                {index < arr.length - 1 && <span className="ml-3 text-gray-400">|</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}