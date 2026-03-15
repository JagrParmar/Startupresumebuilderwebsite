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

interface ATSFriendlyTemplateProps {
  scale?: number;
  data?: ResumeData;
}

export default function ATSFriendlyTemplate({ scale = 1, data }: ATSFriendlyTemplateProps) {
  // Use provided data or fallback to default
  const personalInfo = data?.personalInfo || {
    fullName: "MICHAEL CHEN",
    email: "michael.chen@email.com",
    phone: "(512) 555-0123",
    location: "Austin, TX 78701",
    linkedin: "linkedin.com/in/michaelchen",
    portfolio: "github.com/michaelchen",
    summary: "Full-stack Software Engineer with 5+ years of experience building scalable web applications and RESTful APIs. Proficient in JavaScript/TypeScript, React, Node.js, and cloud technologies. Strong problem-solver with expertise in system design, database optimization, and agile development. Passionate about writing clean, maintainable code and delivering exceptional user experiences.",
  };

  const experiences = data?.experiences || [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      startDate: "January 2022",
      endDate: "Present",
      description: "• Architected and developed microservices-based platform using Node.js, Express, and PostgreSQL serving 500K+ users\n• Led team of 4 engineers to deliver new features, reducing sprint cycle time by 30% through improved workflows\n• Optimized database queries and implemented Redis caching, improving API response times by 60%\n• Implemented CI/CD pipeline using GitHub Actions and Docker, reducing deployment time from 2 hours to 15 minutes",
    },
  ];

  const education = data?.education || [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Texas at Austin",
      location: "Austin, TX",
      graduationDate: "May 2018",
    },
  ];

  const projects = data?.projects || [
    {
      id: "1",
      name: "E-Commerce Platform",
      description: "Built full-stack e-commerce application with user authentication, shopping cart, and payment processing",
      technologies: "React, Node.js, MongoDB, Stripe",
      link: "",
    },
  ];

  const skills = data?.skills || "JavaScript, TypeScript, Python, Java, HTML5, CSS3, SQL, React, Node.js, Express.js, Next.js, Redux, AWS, Docker, Git, GraphQL, Jest, PostgreSQL, MongoDB, MySQL, Redis";

  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.5 * scale}in ${0.75 * scale}in`,
      }}
    >
      {/* Contact Information */}
      <header className="mb-3">
        <h1 className="text-3xl font-bold text-gray-900 mb-1.5">{personalInfo.fullName.toUpperCase()}</h1>
        <div className="text-xs text-gray-700 flex items-center gap-3 flex-wrap">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.email && <span>•</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.portfolio && <span>•</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
          {personalInfo.portfolio && personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="mb-3">
          <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Professional Experience */}
      {experiences.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-2.5">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                <span className="text-xs text-gray-700">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <div className="text-xs font-semibold text-gray-700 mb-1.5">
                {exp.company} | {exp.location}
              </div>
              <div className="text-xs text-gray-800">
                {exp.description.split('\n').map((line, idx) => (
                  <div key={idx} className="mb-0.5">
                    {line.trim().startsWith('•') ? line : `• ${line}`}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
            PROJECTS
          </h2>
          
          {projects.map((proj) => (
            <div key={proj.id} className="mb-1.5">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900">
                  {proj.name} | {proj.technologies}
                </h3>
              </div>
              <div className="text-xs text-gray-800">
                • {proj.description}
              </div>
              {proj.link && (
                <div className="text-xs text-gray-700">
                  Link: {proj.link}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-xs text-gray-700">{edu.graduationDate}</span>
              </div>
              <div className="text-xs text-gray-700">
                {edu.institution} | {edu.location}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section>
          <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
            TECHNICAL SKILLS
          </h2>
          <div className="text-xs text-gray-800 leading-relaxed flex items-center flex-wrap gap-2">
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

export const ATSFriendlyTemplateInfo = {
  name: "ATS Optimized",
  description: "Clean, simple format optimized for Applicant Tracking Systems. Recommended for maximum compatibility.",
  features: [
    "Single column layout for easy parsing",
    "Standard section headers ATS systems recognize",
    "Clean typography with no graphics or images",
    "Bullet points for easy scanning",
    "Keyword-optimized content structure",
    "Professional formatting with clear hierarchy"
  ],
  recommended: true,
  atsScore: 98,
  category: "Professional"
};