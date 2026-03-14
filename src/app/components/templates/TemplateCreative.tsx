import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { ResumeData } from "./TemplateModernProfessional";

interface TemplateProps {
  data: ResumeData;
}

export default function TemplateCreative({ data }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-[8.5in] mx-auto flex" style={{ height: '11in', maxHeight: '11in', overflow: 'hidden' }}>
      {/* Left Sidebar */}
      <aside className="w-[35%] bg-gradient-to-b from-purple-600 to-pink-600 text-white p-6">
        {/* Profile */}
        <div className="mb-6">
          <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-5xl">{data.personalInfo.fullName.charAt(0)}</span>
          </div>
          <h1 className="text-2xl text-center mb-1">{data.personalInfo.fullName}</h1>
          <p className="text-center text-purple-100 text-sm">{data.personalInfo.title}</p>
        </div>

        {/* Contact */}
        <section className="mb-6">
          <h2 className="text-lg uppercase tracking-wide mb-3 pb-2 border-b border-white/30">
            Contact
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{data.personalInfo.location}</span>
            </div>
            {data.personalInfo.linkedin && (
              <div className="flex items-start gap-2">
                <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{data.personalInfo.linkedin}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg uppercase tracking-wide mb-3 pb-2 border-b border-white/30">
            Skills
          </h2>
          <div className="space-y-1.5">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-sm">
                <div className="mb-0.5">{skill}</div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full"
                    style={{ width: `${85 + Math.random() * 15}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Summary */}
        <section className="mb-4">
          <h2 className="text-2xl text-gray-900 mb-2 pb-2 border-b-2 border-purple-600">
            Profile
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <h2 className="text-2xl text-gray-900 mb-2 pb-2 border-b-2 border-purple-600">
            Experience
          </h2>
          <div className="space-y-3">
            {data.experience.map((job, index) => (
              <div key={index}>
                <div className="mb-1">
                  <h3 className="text-lg text-gray-900">{job.position}</h3>
                  <div className="flex justify-between items-baseline text-sm">
                    <p className="text-purple-600 font-medium">{job.company} • {job.location}</p>
                    <span className="text-gray-600">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-0.5 mt-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-700 text-sm leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl text-gray-900 mb-2 pb-2 border-b-2 border-purple-600">
            Education
          </h2>
          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg text-gray-900">{edu.degree}</h3>
                <div className="flex justify-between items-baseline text-sm">
                  <p className="text-purple-600 font-medium">{edu.school} • {edu.location}</p>
                  <span className="text-gray-600">{edu.graduationDate}</span>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-gray-600 mt-0.5">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}