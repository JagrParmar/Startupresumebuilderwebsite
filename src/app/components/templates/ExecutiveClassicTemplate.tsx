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

interface ExecutiveClassicTemplateProps {
  scale?: number;
  data?: ResumeData;
}

export default function ExecutiveClassicTemplate({ scale = 1, data }: ExecutiveClassicTemplateProps) {
  const personalInfo = data?.personalInfo || {
    fullName: "Robert Anderson",
    email: "robert.anderson@email.com",
    phone: "(202) 555-0147",
    location: "Washington, DC 20001",
    linkedin: "linkedin.com/in/robertanderson",
    portfolio: "",
    summary: "Strategic executive leader with 15+ years of experience driving organizational growth and operational excellence. Proven expertise in corporate strategy, P&L management, and leading high-performing teams to achieve ambitious business objectives.",
  };

  const experiences = data?.experiences || [
    {
      id: "1",
      title: "Chief Operating Officer (COO)",
      company: "Enterprise Solutions Corp",
      location: "Washington, DC",
      startDate: "January 2020",
      endDate: "Present",
      description: "• Lead operational strategy and execution for $500M technology services company with 800+ employees\n• Increased operational efficiency by 35% through process optimization and digital transformation initiatives\n• Managed P&L responsibility for four business units, achieving 20% year-over-year revenue growth\n• Built and mentored executive leadership team of 12 directors, improving employee retention by 25%\n• Spearheaded merger integration of two acquisitions totaling $150M, exceeding synergy targets",
    },
    {
      id: "2",
      title: "Vice President of Operations",
      company: "TechVentures International",
      location: "New York, NY",
      startDate: "March 2015",
      endDate: "December 2019",
      description: "• Directed operations for global B2B software division with $200M annual revenue across 15 countries\n• Implemented Lean Six Sigma methodologies reducing operational costs by $15M annually\n• Led cross-functional teams of 200+ employees to deliver strategic initiatives on time and budget\n• Developed and executed go-to-market strategy for new product line generating $50M in first year\n• Presented quarterly business reviews to board of directors and C-suite executives",
    },
    {
      id: "3",
      title: "Director of Business Development",
      company: "Global Consulting Partners",
      location: "Boston, MA",
      startDate: "June 2010",
      endDate: "February 2015",
      description: "• Managed portfolio of Fortune 500 clients with combined contract value of $75M\n• Expanded client base by 40% through strategic partnerships and business development initiatives\n• Led proposal development and contract negotiations for enterprise deals averaging $5M-10M\n• Collaborated with C-level executives to align business objectives with client deliverables\n• Mentored team of 8 business development managers and account executives",
    },
  ];
  const education = data?.education || [
    {
      id: "1",
      degree: "Master of Business Administration (MBA)",
      institution: "Harvard Business School",
      location: "Boston, MA",
      graduationDate: "May 2010",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Economics",
      institution: "University of Pennsylvania",
      location: "Philadelphia, PA",
      graduationDate: "May 2005",
    },
  ];
  const projects = data?.projects || [];
  const skills = data?.skills || "Strategic Planning, P&L Management, Business Development, Team Leadership, Operations Management, Financial Analysis, Change Management, Stakeholder Engagement";

  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.75 * scale}in ${1 * scale}in`,
      }}
    >
      {/* Classic Header */}
      <header className="text-center mb-5 pb-3 border-b-2 border-gray-800">
        <h1 className="text-4xl font-serif mb-2 text-gray-900">{personalInfo.fullName}</h1>
        <div className="text-xs text-gray-700 space-y-0.5">
          <p>
            {personalInfo.location}
            {personalInfo.phone && ` • ${personalInfo.phone}`}
          </p>
          <p>
            {personalInfo.email}
            {personalInfo.linkedin && ` • ${personalInfo.linkedin}`}
            {personalInfo.portfolio && ` • ${personalInfo.portfolio}`}
          </p>
        </div>
      </header>

      {/* Executive Summary */}
      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-serif font-bold uppercase mb-2 text-gray-900">
            Executive Summary
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed text-justify">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Professional Experience */}
      {experiences.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-serif font-bold uppercase mb-2 text-gray-900">
            Professional Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="mb-1">
                <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                <div className="flex justify-between items-baseline">
                  <p className="text-xs italic text-gray-700">{exp.company}, {exp.location}</p>
                  <span className="text-xs text-gray-600">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
              </div>
              <ul className="list-disc ml-5 text-xs text-gray-800 space-y-0.5">
                {exp.description.split('\n').map((line, idx) => (
                  <li key={idx}>{line.trim().startsWith('•') ? line.substring(1).trim() : line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-serif font-bold uppercase mb-2 text-gray-900">
            Key Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <h3 className="text-sm font-bold text-gray-900">
                {proj.name} <span className="font-normal italic text-gray-700">({proj.technologies})</span>
              </h3>
              <p className="text-xs text-gray-800 ml-3">• {proj.description}</p>
              {proj.link && <p className="text-xs text-gray-600 ml-3">Link: {proj.link}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-serif font-bold uppercase mb-2 text-gray-900">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-xs italic text-gray-700">{edu.institution}, {edu.location}</p>
                </div>
                <span className="text-xs text-gray-600">{edu.graduationDate}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Core Competencies */}
      {skills && (
        <section>
          <h2 className="text-sm font-serif font-bold uppercase mb-2 text-gray-900">
            Core Competencies
          </h2>
          <div className="text-xs text-gray-800 flex flex-wrap items-center gap-2">
            {skills.split(', ').map((skill, idx, arr) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{skill.trim()}</span>
                {idx < arr.length - 1 && <span className="text-gray-400">•</span>}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}