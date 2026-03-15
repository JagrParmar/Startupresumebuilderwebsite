import { Mail, Phone, Linkedin, Github } from "lucide-react";

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

interface JakeRyanTemplateProps {
  scale?: number;
  data?: ResumeData;
}

export default function JakeRyanTemplate({ scale = 1, data }: JakeRyanTemplateProps) {
  const personalInfo = data?.personalInfo || {
    fullName: "Jake Ryan",
    email: "jake@su.edu",
    phone: "123-456-7890",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/jake",
    portfolio: "github.com/jake",
    summary: "",
  };

  const experiences = data?.experiences || [];
  const education = data?.education || [];
  const projects = data?.projects || [];
  const skills = data?.skills || "Java, Python, C, SQL, JavaScript, HTML/CSS, React, Angular, Node.js, Flask, JUnit, WordPress, GitHub, VS Code";

  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.5 * scale}in ${0.75 * scale}in`,
      }}
    >
      {/* Header */}
      <header className="text-center mb-4 pb-2 border-b border-gray-300">
        <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName}</h1>
        <div className="flex justify-center items-center gap-3 text-xs flex-wrap">
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
              <Github className="w-3 h-3" />
              {personalInfo.portfolio}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase mb-1.5">Summary</h2>
          <p className="text-xs leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase mb-1.5">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">{edu.institution}</h3>
                <span className="text-xs">{edu.location}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-xs italic">{edu.degree}</p>
                <span className="text-xs">{edu.graduationDate}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase mb-1.5">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-2.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">{exp.title}</h3>
                <span className="text-xs">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="text-xs italic">{exp.company}</p>
                <span className="text-xs">{exp.location}</span>
              </div>
              <ul className="list-disc ml-5 text-xs space-y-0.5">
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
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase mb-1.5">Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">
                  {proj.name} | <span className="font-normal italic">{proj.technologies}</span>
                </h3>
              </div>
              <ul className="list-disc ml-5 text-xs space-y-0.5">
                <li>{proj.description}</li>
              </ul>
              {proj.link && <p className="text-xs ml-5 text-gray-600">Link: {proj.link}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Technical Skills */}
      {skills && (
        <section>
          <h2 className="text-sm font-bold uppercase mb-1.5">Technical Skills</h2>
          <div className="text-xs flex flex-wrap items-center gap-2">
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
