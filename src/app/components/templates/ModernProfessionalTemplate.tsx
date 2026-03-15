import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

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

interface ModernProfessionalTemplateProps {
  scale?: number;
  data?: ResumeData;
}

export default function ModernProfessionalTemplate({ scale = 1, data }: ModernProfessionalTemplateProps) {
  const personalInfo = data?.personalInfo || {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(415) 555-0199",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/sarahjohnson",
    portfolio: "sarahjohnson.com",
    summary: "Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative digital products. Proven track record of driving product strategy, increasing user engagement, and achieving business objectives in fast-paced environments.",
  };

  const experiences = data?.experiences || [];
  const education = data?.education || [];
  const projects = data?.projects || [];
  const skills = data?.skills || "Product Strategy, Roadmap Planning, Agile/Scrum, User Research, A/B Testing, SQL, JIRA, Figma, Analytics (Google Analytics, Mixpanel), Stakeholder Management";

  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.5 * scale}in ${0.75 * scale}in`,
      }}
    >
      {/* Header with accent bar */}
      <header className="mb-4 border-l-4 border-blue-600 pl-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.fullName}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {personalInfo.location}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              {personalInfo.linkedin}
            </span>
          )}
          {personalInfo.portfolio && (
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {personalInfo.portfolio}
            </span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase text-blue-600 mb-2 border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Professional Experience */}
      {experiences.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase text-blue-600 mb-2 border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                <span className="text-xs text-gray-600">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-1.5">
                <p className="text-xs font-semibold text-gray-700">{exp.company}</p>
                <span className="text-xs text-gray-600">{exp.location}</span>
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
          <h2 className="text-sm font-bold uppercase text-blue-600 mb-2 border-b border-gray-300 pb-1">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <h3 className="text-sm font-bold text-gray-900">
                {proj.name} | <span className="font-normal">{proj.technologies}</span>
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
          <h2 className="text-sm font-bold uppercase text-blue-600 mb-2 border-b border-gray-300 pb-1">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-xs text-gray-600">{edu.graduationDate}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-xs text-gray-700">{edu.institution}</p>
                <span className="text-xs text-gray-600">{edu.location}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section>
          <h2 className="text-sm font-bold uppercase text-blue-600 mb-2 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="text-xs text-gray-800 flex flex-wrap items-center gap-2">
            {skills.split(', ').map((skill, idx, arr) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{skill.trim()}</span>
                {idx < arr.length - 1 && <span className="text-gray-400">|</span>}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
