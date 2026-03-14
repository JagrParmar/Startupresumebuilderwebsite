import { ResumeData } from "./TemplateModernProfessional";

interface TemplateProps {
  data: ResumeData;
}

export default function TemplateExecutive({ data }: TemplateProps) {
  return (
    <div className="bg-white p-6 shadow-lg max-w-[8.5in] mx-auto" style={{ height: '11in', maxHeight: '11in', overflow: 'hidden' }}>
      {/* Header */}
      <header className="text-center border-b-4 border-gray-900 pb-3 mb-4">
        <h1 className="text-5xl mb-2 text-gray-900 tracking-wide" style={{ fontVariant: 'small-caps' }}>
          {data.personalInfo.fullName}
        </h1>
        <p className="text-lg text-gray-700 mb-2 tracking-wide">{data.personalInfo.title}</p>
        
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
          {data.personalInfo.linkedin && (
            <>
              <span>•</span>
              <span>{data.personalInfo.linkedin}</span>
            </>
          )}
        </div>
      </header>

      {/* Executive Summary */}
      <section className="mb-4">
        <h2 className="text-2xl text-center mb-3 text-gray-900 tracking-wider" style={{ fontVariant: 'small-caps' }}>
          Executive Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          {data.summary}
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-4">
        <h2 className="text-2xl text-center mb-3 text-gray-900 tracking-wider" style={{ fontVariant: 'small-caps' }}>
          Professional Experience
        </h2>
        <div className="space-y-3">
          {data.experience.map((job, index) => (
            <div key={index} className="border-l-4 border-gray-900 pl-6">
              <div className="mb-1">
                <h3 className="text-xl text-gray-900">{job.position}</h3>
                <div className="flex justify-between items-baseline">
                  <p className="text-gray-700 font-medium">{job.company}, {job.location}</p>
                  <span className="text-sm text-gray-600 italic">
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
              </div>
              <ul className="space-y-1 mt-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed flex">
                    <span className="mr-3">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-2xl text-center mb-3 text-gray-900 tracking-wider" style={{ fontVariant: 'small-caps' }}>
          Education
        </h2>
        <div className="space-y-2">
          {data.education.map((edu, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.school}, {edu.location}</p>
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <span>{edu.graduationDate}</span>
                {edu.gpa && (
                  <>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section>
        <h2 className="text-2xl text-center mb-3 text-gray-900 tracking-wider" style={{ fontVariant: 'small-caps' }}>
          Core Competencies
        </h2>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
          {data.skills.map((skill, index) => (
            <div key={index} className="text-center text-gray-700">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}