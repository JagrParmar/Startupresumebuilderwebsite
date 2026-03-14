import { Mail, Phone, MapPin, Linkedin, Github, Globe, Code2 } from "lucide-react";
import { ResumeData } from "./TemplateModernProfessional";

interface TemplateProps {
  data: ResumeData;
}

export default function TemplateTech({ data }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-[8.5in] mx-auto" style={{ height: '11in', maxHeight: '11in', overflow: 'hidden' }}>
      {/* Header with accent */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-3" />
      
      <div className="p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl mb-2 text-gray-900">{data.personalInfo.fullName}</h1>
              <p className="text-xl text-blue-600 mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                {data.personalInfo.title}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 border-t border-b border-gray-200 py-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{data.personalInfo.location}</span>
            </div>
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>{data.personalInfo.linkedin}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Skills */}
          <aside className="col-span-1">
            <section className="mb-6">
              <h2 className="text-lg uppercase tracking-wide mb-3 text-blue-600 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600" />
                Technical Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education in sidebar */}
            <section>
              <h2 className="text-lg uppercase tracking-wide mb-3 text-blue-600 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600" />
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-sm text-gray-700">{edu.school}</p>
                    <p className="text-xs text-gray-600">{edu.location}</p>
                    <p className="text-xs text-gray-600">{edu.graduationDate}</p>
                    {edu.gpa && (
                      <p className="text-xs text-gray-600">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* Right Column - Experience */}
          <main className="col-span-2">
            <section className="mb-6">
              <h2 className="text-lg uppercase tracking-wide mb-3 text-blue-600 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
            </section>

            <section>
              <h2 className="text-lg uppercase tracking-wide mb-3 text-blue-600 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600" />
                Professional Experience
              </h2>
              <div className="space-y-5">
                {data.experience.map((job, index) => (
                  <div key={index}>
                    <div className="mb-2">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-semibold text-gray-900">{job.position}</h3>
                        <span className="text-xs text-gray-600 whitespace-nowrap ml-4">
                          {job.startDate} - {job.endDate}
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <p className="text-sm text-blue-600">{job.company}</p>
                        <span className="text-xs text-gray-600">{job.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-gray-700 leading-relaxed flex gap-2">
                          <span className="text-cyan-500 mt-1">▸</span>
                          <span className="flex-1">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}