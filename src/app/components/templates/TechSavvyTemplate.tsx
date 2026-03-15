import { Terminal, Mail, Github, Linkedin, Globe } from "lucide-react";

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

interface TechSavvyTemplateProps {
  scale?: number;
  data?: ResumeData;
}

export default function TechSavvyTemplate({ scale = 1, data }: TechSavvyTemplateProps) {
  const personalInfo = data?.personalInfo || {
    fullName: "Alex Chen",
    email: "alex.chen@devmail.com",
    phone: "",
    location: "Seattle, WA",
    linkedin: "linkedin.com/in/alexchen",
    portfolio: "github.com/alexchen",
    summary: "Full-stack developer passionate about building scalable applications and clean code. Experienced in modern JavaScript frameworks and cloud technologies.",
  };

  const experiences = data?.experiences || [];
  const education = data?.education || [];
  const projects = data?.projects || [];
  const skills = data?.skills || "JavaScript, TypeScript, Python, React, Node.js, Next.js, GraphQL, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS, CI/CD, Git";

  return (
    <div 
      className="bg-gradient-to-br from-slate-50 to-gray-100 shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.5 * scale}in ${0.75 * scale}in`,
      }}
    >
      {/* Modern Tech Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg mb-4 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5" />
          <h1 className="text-2xl font-bold">{personalInfo.fullName}</h1>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.portfolio && (
            <span className="flex items-center gap-1">
              <Github className="w-3 h-3" />
              {personalInfo.portfolio}
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              {personalInfo.linkedin}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {personalInfo.location}
            </span>
          )}
        </div>
      </header>

      {/* About */}
      {personalInfo.summary && (
        <section className="mb-3 bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-sm font-bold uppercase text-purple-600 mb-1.5 flex items-center gap-1">
            <span className="text-purple-600">$</span> About
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-3 bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-sm font-bold uppercase text-purple-600 mb-2 flex items-center gap-1">
            <span className="text-purple-600">$</span> Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-2.5 last:mb-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                <span className="text-xs text-gray-500">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <p className="text-xs text-purple-600 mb-1">{exp.company} • {exp.location}</p>
              <ul className="space-y-0.5 text-xs text-gray-700">
                {exp.description.split('\n').map((line, idx) => (
                  <li key={idx} className="flex gap-1">
                    <span className="text-purple-600">▹</span>
                    <span>{line.trim().startsWith('•') ? line.substring(1).trim() : line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-3 bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-sm font-bold uppercase text-purple-600 mb-2 flex items-center gap-1">
            <span className="text-purple-600">$</span> Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2 last:mb-0">
              <h3 className="text-sm font-bold text-gray-900">
                {proj.name} <span className="text-xs font-normal text-gray-600">// {proj.technologies}</span>
              </h3>
              <p className="text-xs text-gray-700 ml-3 flex gap-1">
                <span className="text-purple-600">▹</span>
                <span>{proj.description}</span>
              </p>
              {proj.link && (
                <p className="text-xs text-blue-600 ml-3">🔗 {proj.link}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-3 bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-sm font-bold uppercase text-purple-600 mb-2 flex items-center gap-1">
            <span className="text-purple-600">$</span> Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-1.5 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-xs text-gray-500">{edu.graduationDate}</span>
              </div>
              <p className="text-xs text-gray-700">{edu.institution}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section className="bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-sm font-bold uppercase text-purple-600 mb-2 flex items-center gap-1">
            <span className="text-purple-600">$</span> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.split(', ').map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded border border-purple-200"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
