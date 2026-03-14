import { Mail, Phone, Github, Linkedin, Globe, MapPin } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  technicalSkills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    cloud: string[];
  };
  experience: Array<{
    title: string;
    company: string;
    location: string;
    duration: string;
    achievements: string[];
    technologies: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    highlights: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    duration: string;
    gpa?: string;
  }>;
}

interface TechSavvyTemplateProps {
  data?: ResumeData;
}

const defaultData: ResumeData = {
  personalInfo: {
    name: "Alex Chen",
    title: "Full Stack Software Engineer",
    location: "Seattle, WA",
    email: "alex.chen@email.com",
    phone: "+1 (206) 555-0199",
    github: "github.com/alexchen",
    linkedin: "linkedin.com/in/alexchen",
    website: "alexchen.dev",
  },
  summary:
    "Software engineer with 5+ years of experience building scalable web applications and distributed systems. Strong background in full-stack development with expertise in modern JavaScript frameworks and cloud infrastructure.",
  technicalSkills: {
    languages: ["JavaScript/TypeScript", "Python", "Java", "Go"],
    frameworks: ["React", "Node.js", "Next.js", "Django"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "Kubernetes", "Jenkins"],
    cloud: ["AWS", "Azure", "GCP"],
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "CloudTech Solutions",
      location: "Seattle, WA",
      duration: "March 2021 - Present",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      achievements: [
        "Architected microservices-based platform handling 10M+ requests daily with 99.9% uptime",
        "Led migration from monolithic architecture to microservices, reducing deployment time by 70%",
        "Implemented CI/CD pipeline using Jenkins and Docker, enabling automated testing and deployments",
        "Mentored team of 4 junior engineers, conducting code reviews and technical design sessions",
      ],
    },
    {
      title: "Software Engineer",
      company: "StartupHub Inc.",
      location: "San Francisco, CA",
      duration: "June 2019 - February 2021",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      achievements: [
        "Developed real-time collaboration features using WebSockets, supporting 50K concurrent users",
        "Built RESTful APIs and GraphQL endpoints serving data to web and mobile applications",
        "Created automated testing suite with 85% code coverage using Jest and Cypress",
      ],
    },
  ],
  projects: [
    {
      name: "DevCollab - Open Source Platform",
      description: "Real-time code collaboration tool for distributed teams",
      technologies: ["Next.js", "WebRTC", "Socket.io", "MongoDB"],
      highlights: [
        "Built collaborative code editor with live cursor tracking and synchronized editing",
        "Achieved 2.5K+ stars on GitHub with active community of 500+ developers",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Washington",
      location: "Seattle, WA",
      duration: "2014 - 2018",
      gpa: "3.7/4.0",
    },
  ],
};

export default function TechSavvyTemplate({ data = defaultData }: TechSavvyTemplateProps) {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-10 shadow-lg text-black" style={{ minHeight: "11in", maxHeight: "11in" }}>
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-1">{data.personalInfo.name}</h1>
        <h2 className="text-sm text-gray-700 mb-2">{data.personalInfo.title}</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{data.personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <span>{data.personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-3 h-3" />
            <span>{data.personalInfo.github}</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-3 h-3" />
            <span>{data.personalInfo.linkedin}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <span>{data.personalInfo.website}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-0.5 border-b-2 border-gray-800">Summary</h3>
        <p className="text-sm leading-relaxed">{data.summary}</p>
      </div>

      {/* Technical Skills */}
      <div className="mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-0.5 border-b-2 border-gray-800">
          Technical Skills
        </h3>
        <div className="space-y-0.5 text-sm">
          <div>
            <span className="font-semibold">Languages: </span>
            <span>{data.technicalSkills.languages.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold">Frameworks: </span>
            <span>{data.technicalSkills.frameworks.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold">Databases: </span>
            <span>{data.technicalSkills.databases.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold">Tools: </span>
            <span>{data.technicalSkills.tools.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold">Cloud: </span>
            <span>{data.technicalSkills.cloud.join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-0.5 border-b-2 border-gray-800">
          Professional Experience
        </h3>
        <div className="space-y-2.5">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="text-sm font-bold">{exp.title}</h4>
                <span className="text-xs text-gray-600">{exp.duration}</span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                <span className="text-xs text-gray-600">{exp.location}</span>
              </div>
              <p className="text-xs italic text-gray-600 mb-1">
                <span className="font-semibold">Tech:</span> {exp.technologies.join(", ")}
              </p>
              <ul className="list-disc ml-4 space-y-0.5">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-sm leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-0.5 border-b-2 border-gray-800">
          Featured Projects
        </h3>
        <div className="space-y-2">
          {data.projects.map((project, index) => (
            <div key={index}>
              <h4 className="text-sm font-bold mb-0.5">{project.name}</h4>
              <p className="text-sm italic text-gray-700 mb-0.5">{project.description}</p>
              <p className="text-xs text-gray-600 mb-1">
                <span className="font-semibold">Tech:</span> {project.technologies.join(", ")}
              </p>
              <ul className="list-disc ml-4 space-y-0.5">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="text-sm leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wide mb-1.5 pb-0.5 border-b-2 border-gray-800">Education</h3>
        <div className="space-y-1.5">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="text-sm font-bold">{edu.degree}</h4>
                <span className="text-xs text-gray-600">{edu.duration}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-sm text-gray-700">{edu.school}</p>
                <span className="text-xs text-gray-600">{edu.location}</span>
              </div>
              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}