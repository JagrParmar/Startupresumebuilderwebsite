import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experience: Array<{
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bullets: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
    gpa?: string;
  }>;
  skills: string[];
}

interface TemplateProps {
  data: ResumeData;
}

export default function TemplateModernProfessional({ data }: TemplateProps) {
  return (
    <div className="bg-white p-6 shadow-lg max-w-[8.5in] mx-auto" style={{ height: '11in', maxHeight: '11in', overflow: 'hidden' }}>
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-3 mb-3">
        <h1 className="text-4xl mb-1 text-gray-900">{data.personalInfo.fullName}</h1>
        <p className="text-xl text-gray-600 mb-2">{data.personalInfo.title}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{data.personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{data.personalInfo.location}</span>
          </div>
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>{data.personalInfo.linkedin}</span>
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-3">
        <h2 className="text-xl uppercase tracking-wide border-b border-gray-300 pb-1.5 mb-2 text-gray-900">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-3">
        <h2 className="text-xl uppercase tracking-wide border-b border-gray-300 pb-1.5 mb-2 text-gray-900">
          Professional Experience
        </h2>
        <div className="space-y-2.5">
          {data.experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-lg text-gray-900">{job.position}</h3>
                <span className="text-sm text-gray-600">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-1.5">
                <p className="text-gray-700 italic">{job.company}</p>
                <span className="text-sm text-gray-600">{job.location}</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-0.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-3">
        <h2 className="text-xl uppercase tracking-wide border-b border-gray-300 pb-1.5 mb-2 text-gray-900">
          Education
        </h2>
        <div className="space-y-2">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-lg text-gray-900">{edu.degree}</h3>
                <span className="text-sm text-gray-600">{edu.graduationDate}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-gray-700 italic">{edu.school}</p>
                <span className="text-sm text-gray-600">{edu.location}</span>
              </div>
              {edu.gpa && (
                <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl uppercase tracking-wide border-b border-gray-300 pb-1.5 mb-2 text-gray-900">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm text-gray-700"
            >
              {skill}{index < data.skills.length - 1 ? ' •' : ''}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}