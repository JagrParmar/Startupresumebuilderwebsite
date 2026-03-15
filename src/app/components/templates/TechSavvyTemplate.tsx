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

  const experiences = data?.experiences || [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "CloudScale Technologies",
      location: "Seattle, WA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: "• Architected and built microservices using Node.js, Express, and GraphQL serving 1M+ requests/day\n• Implemented real-time features using WebSockets and Redis pub/sub, reducing latency by 70%\n• Led migration from monolith to microservices architecture, improving deployment frequency by 5x\n• Mentored team of 3 junior developers and established coding standards and best practices",
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "DevHub Solutions",
      location: "Seattle, WA",
      startDate: "Jun 2019",
      endDate: "Dec 2021",
      description: "• Built and maintained React/TypeScript SPAs with focus on performance and accessibility\n• Developed RESTful APIs using Node.js and PostgreSQL with comprehensive test coverage\n• Implemented CI/CD pipelines with GitHub Actions and Docker, automating deployment process\n• Collaborated with designers and product managers in Agile sprints to deliver features",
    },
    {
      id: "3",
      title: "Software Developer",
      company: "WebCraft Studios",
      location: "Portland, OR",
      startDate: "Aug 2017",
      endDate: "May 2019",
      description: "• Developed responsive web applications using JavaScript, React, and CSS3\n• Integrated third-party APIs and payment systems (Stripe, PayPal) for e-commerce platforms\n• Optimized database queries and implemented caching strategies to improve performance\n• Participated in code reviews and contributed to team knowledge sharing sessions",
    },
  ];
  const education = data?.education || [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Washington",
      location: "Seattle, WA",
      graduationDate: "May 2017",
    },
  ];
  const projects = data?.projects || [
    {
      id: "1",
      name: "DevCollaborator",
      description: "Real-time code collaboration platform with live editing, video chat, and whiteboarding features. Built with WebRTC, Socket.io, and MongoDB. 5K+ active users.",
      technologies: "React, Node.js, Socket.io, MongoDB, WebRTC",
      link: "",
    },
    {
      id: "2",
      name: "CloudDeploy CLI",
      description: "Open-source command-line tool for simplified cloud deployments. Supports AWS, GCP, and Azure. 500+ stars on GitHub.",
      technologies: "Node.js, Commander.js, AWS SDK",
      link: "",
    },
  ];
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
             About
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-3 bg-white p-3 rounded-lg shadow-sm">
          <h2 className="text-sm font-bold uppercase text-purple-600 mb-2 flex items-center gap-1">
             Experience
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
             Projects
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
             Education
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
             Tech Stack
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