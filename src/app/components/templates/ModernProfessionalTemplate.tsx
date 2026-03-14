import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    duration: string;
    details?: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
}

interface ModernProfessionalTemplateProps {
  data?: ResumeData;
}

const defaultData: ResumeData = {
  personalInfo: {
    name: "Sarah Johnson",
    title: "Senior Product Manager",
    location: "San Francisco, CA",
    phone: "(555) 123-4567",
    email: "sarah.johnson@email.com",
    linkedin: "linkedin.com/in/sarahjohnson",
    website: "sarahjohnson.com",
  },
  summary:
    "Results-driven Product Manager with 7+ years of experience leading cross-functional teams to deliver innovative solutions. Proven track record of launching successful products that drive revenue growth and enhance user experience.",
  experience: [
    {
      title: "Senior Product Manager",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "January 2021 - Present",
      responsibilities: [
        "Led product strategy and roadmap for B2B SaaS platform serving 500+ enterprise clients, resulting in 35% YoY revenue growth",
        "Managed cross-functional team of 12 engineers, designers, and analysts to deliver 4 major product releases",
        "Implemented data-driven approach to feature prioritization, increasing user engagement by 45%",
      ],
    },
    {
      title: "Product Manager",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      duration: "June 2018 - December 2020",
      responsibilities: [
        "Launched mobile app from 0 to 100K users in first year through strategic feature development and go-to-market planning",
        "Conducted user research and competitive analysis to identify market gaps and inform product decisions",
        "Defined and tracked key performance metrics, achieving 90% user retention rate",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Digital Solutions Co.",
      location: "Austin, TX",
      duration: "July 2016 - May 2018",
      responsibilities: [
        "Supported product development for e-commerce platform processing $50M in annual transactions",
        "Created detailed product specifications and user stories for engineering team",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Stanford Graduate School of Business",
      location: "Stanford, CA",
      duration: "2014 - 2016",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "2010 - 2014",
    },
  ],
  skills: [
    {
      category: "Product Management",
      items: ["Product Strategy", "Roadmap Planning", "User Research", "A/B Testing", "Market Analysis", "Feature Prioritization"],
    },
    {
      category: "Technical",
      items: ["SQL", "Analytics (Mixpanel, Amplitude)", "JIRA", "Figma", "API Design", "Agile/Scrum"],
    },
  ],
};

export default function ModernProfessionalTemplate({ data = defaultData }: ModernProfessionalTemplateProps) {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-10 shadow-lg text-black" style={{ minHeight: "11in", maxHeight: "11in" }}>
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold mb-1">{data.personalInfo.name}</h1>
        <h2 className="text-base text-gray-700 mb-2">{data.personalInfo.title}</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{data.personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <a href={`mailto:${data.personalInfo.email}`} className="hover:underline">
              {data.personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-3 h-3" />
            <a href={`https://${data.personalInfo.linkedin}`} className="hover:underline">
              {data.personalInfo.linkedin}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <a href={`https://${data.personalInfo.website}`} className="hover:underline">
              {data.personalInfo.website}
            </a>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-3.5">
        <h3 className="text-sm font-bold mb-1.5 text-gray-800 uppercase tracking-wide">Professional Summary</h3>
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </div>

      {/* Professional Experience */}
      <div className="mb-3.5">
        <h3 className="text-sm font-bold mb-2 text-gray-800 uppercase tracking-wide">Professional Experience</h3>
        <div className="space-y-3">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="text-sm font-bold">{exp.title}</h4>
                <span className="text-xs text-gray-600">{exp.duration}</span>
              </div>
              <div className="flex justify-between items-baseline mb-1.5">
                <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                <span className="text-xs text-gray-600">{exp.location}</span>
              </div>
              <ul className="list-disc ml-5 space-y-0.5">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm leading-relaxed text-gray-700">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-3.5">
        <h3 className="text-sm font-bold mb-2 text-gray-800 uppercase tracking-wide">Education</h3>
        <div className="space-y-2">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="text-sm font-bold">{edu.degree}</h4>
                <span className="text-xs text-gray-600">{edu.duration}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-sm font-semibold text-gray-700">{edu.school}</p>
                <span className="text-xs text-gray-600">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-sm font-bold mb-2 text-gray-800 uppercase tracking-wide">Skills</h3>
        <div className="space-y-1.5">
          {data.skills.map((skillGroup, index) => (
            <div key={index} className="text-sm">
              <span className="font-bold text-gray-800">{skillGroup.category}: </span>
              <span className="text-gray-700">{skillGroup.items.join(" • ")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}