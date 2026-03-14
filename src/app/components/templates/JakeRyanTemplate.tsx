import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  education: Array<{
    school: string;
    location: string;
    degree: string;
    duration: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    duration: string;
    achievements: string[];
  }>;
  projects: Array<{
    name: string;
    technologies: string;
    duration: string;
    achievements: string[];
  }>;
  skills: {
    languages: string;
    frameworks: string;
    tools: string;
    libraries: string;
  };
}

interface JakeRyanTemplateProps {
  data?: ResumeData;
}

const defaultData: ResumeData = {
  personalInfo: {
    name: "Jake Ryan",
    phone: "123-456-7890",
    email: "jake@su.edu",
    linkedin: "linkedin.com/in/jake",
    github: "github.com/jake",
  },
  education: [
    {
      school: "Southwestern University",
      location: "Georgetown, TX",
      degree: "Bachelor of Arts in Computer Science, Minor in Business",
      duration: "Aug. 2018 -- May 2021",
    },
    {
      school: "Blinn College",
      location: "Bryan, TX",
      degree: "Associate's in Liberal Arts",
      duration: "Aug. 2014 -- May 2018",
    },
  ],
  experience: [
    {
      title: "Undergraduate Research Assistant",
      company: "Texas A&M University",
      location: "College Station, TX",
      duration: "June 2020 -- Present",
      achievements: [
        "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems",
        "Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data",
        "Explored ways to visualize GitHub collaboration in a classroom setting",
      ],
    },
    {
      title: "Information Technology Support Specialist",
      company: "Southwestern University",
      location: "Georgetown, TX",
      duration: "Sep. 2018 -- Present",
      achievements: [
        "Communicate with managers to set up campus computers used on campus",
        "Assess and troubleshoot computer problems brought by students, faculty and staff",
        "Maintain upkeep of computers, classroom equipment, and 200 printers across campus",
      ],
    },
    {
      title: "Artificial Intelligence Research Assistant",
      company: "Southwestern University",
      location: "Georgetown, TX",
      duration: "May 2019 -- July 2019",
      achievements: [
        "Explored methods to generate video game dungeons based off of The Legend of Zelda",
        "Developed a game in Java to test the generated dungeons",
        "Contributed 50K+ lines of code to an established codebase via Git",
        "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable",
        "Wrote an 8-page paper and gave multiple presentations on-campus",
        "Presented virtually to the World Conference on Computational Intelligence",
      ],
    },
  ],
  projects: [
    {
      name: "Gitlytics",
      technologies: "Python, Flask, React, PostgreSQL, Docker",
      duration: "June 2020 -- Present",
      achievements: [
        "Developed a full-stack web application using with Flask serving a REST API with React as the frontend",
        "Implemented GitHub OAuth to get data from user's repositories",
        "Visualized GitHub data to show collaboration",
        "Used Celery and Redis for asynchronous tasks",
      ],
    },
    {
      name: "Simple Paintball",
      technologies: "Spigot API, Java, Maven, TravisCI, Git",
      duration: "May 2018 -- May 2020",
      achievements: [
        "Developed a Minecraft server plugin to entertain kids during free time for a previous job",
        "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review",
        "Implemented continuous delivery using TravisCI to build the plugin upon new a release",
        "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin",
      ],
    },
  ],
  skills: {
    languages: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
    frameworks: "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI",
    tools: "Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse",
    libraries: "pandas, NumPy, Matplotlib",
  },
};

export default function JakeRyanTemplate({ data = defaultData }: JakeRyanTemplateProps) {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-12 shadow-lg text-black" style={{ minHeight: "11in" }}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">
          {data.personalInfo.name}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>{data.personalInfo.phone}</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" />
            <a href={`mailto:${data.personalInfo.email}`} className="underline">
              {data.personalInfo.email}
            </a>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            <a href={`https://${data.personalInfo.linkedin}`} className="underline">
              {data.personalInfo.linkedin}
            </a>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Github className="w-3.5 h-3.5" />
            <a href={`https://${data.personalInfo.github}`} className="underline">
              {data.personalInfo.github}
            </a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-5">
        <div className="border-b border-black pb-1 mb-3">
          <h2 className="text-base font-bold uppercase tracking-wide">Education</h2>
        </div>
        <div className="space-y-3">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-bold text-sm">{edu.school}</div>
                <div className="text-sm">{edu.location}</div>
              </div>
              <div className="flex justify-between items-start">
                <div className="text-sm italic">{edu.degree}</div>
                <div className="text-sm italic">{edu.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-5">
        <div className="border-b border-black pb-1 mb-3">
          <h2 className="text-base font-bold uppercase tracking-wide">Experience</h2>
        </div>
        <div className="space-y-3">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-0.5">
                <div className="font-bold text-sm">{exp.title}</div>
                <div className="text-sm italic">{exp.duration}</div>
              </div>
              <div className="flex justify-between items-start mb-1.5">
                <div className="text-sm italic">{exp.company}</div>
                <div className="text-sm italic">{exp.location}</div>
              </div>
              <ul className="list-disc ml-5 space-y-0.5">
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

      {/* Projects Section */}
      <div className="mb-5">
        <div className="border-b border-black pb-1 mb-3">
          <h2 className="text-base font-bold uppercase tracking-wide">Projects</h2>
        </div>
        <div className="space-y-3">
          {data.projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-1.5">
                <div className="text-sm">
                  <span className="font-bold">{project.name}</span>
                  <span className="italic"> | {project.technologies}</span>
                </div>
                <div className="text-sm">{project.duration}</div>
              </div>
              <ul className="list-disc ml-5 space-y-0.5">
                {project.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-sm leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mb-2">
        <div className="border-b border-black pb-1 mb-3">
          <h2 className="text-base font-bold uppercase tracking-wide">Technical Skills</h2>
        </div>
        <div className="space-y-1.5 text-sm">
          <div>
            <span className="font-bold">Languages: </span>
            <span>{data.skills.languages}</span>
          </div>
          <div>
            <span className="font-bold">Frameworks: </span>
            <span>{data.skills.frameworks}</span>
          </div>
          <div>
            <span className="font-bold">Developer Tools: </span>
            <span>{data.skills.tools}</span>
          </div>
          <div>
            <span className="font-bold">Libraries: </span>
            <span>{data.skills.libraries}</span>
          </div>
        </div>
      </div>
    </div>
  );
}