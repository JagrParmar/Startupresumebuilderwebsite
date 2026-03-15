interface CoverLetterData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  recipientInfo: {
    hiringManagerName?: string;
    title?: string;
    companyName: string;
    companyAddress?: string;
    companyCity?: string;
    companyState?: string;
    companyZipCode?: string;
  };
  jobInfo: {
    jobTitle: string;
    jobDescription?: string;
  };
  content: {
    opening: string;
    body1: string;
    body2: string;
    body3?: string;
    closing: string;
  };
}

interface ATSCoverLetterTemplateProps {
  scale?: number;
  data?: CoverLetterData;
}

export default function ATSCoverLetterTemplate({ scale = 1, data }: ATSCoverLetterTemplateProps) {
  // Default data for preview
  const personalInfo = data?.personalInfo || {
    fullName: "MICHAEL CHEN",
    email: "michael.chen@email.com",
    phone: "(512) 555-0123",
    address: "123 Main Street",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
  };

  const recipientInfo = data?.recipientInfo || {
    hiringManagerName: "Sarah Johnson",
    title: "Hiring Manager",
    companyName: "Google Inc.",
    companyAddress: "1600 Amphitheatre Parkway",
    companyCity: "Mountain View",
    companyState: "CA",
    companyZipCode: "94043",
  };

  const jobInfo = data?.jobInfo || {
    jobTitle: "Senior Software Engineer",
  };

  const content = data?.content || {
    opening: `I am writing to express my strong interest in the ${jobInfo.jobTitle} position at ${recipientInfo.companyName}. With over 5 years of experience in full-stack software development and a proven track record of delivering scalable solutions, I am excited about the opportunity to contribute to your team's success.`,
    body1: `Throughout my career, I have developed expertise in modern web technologies including React, TypeScript, Node.js, and cloud platforms such as AWS. In my current role as Senior Software Engineer at CloudTech Solutions, I have led the development of microservices-based platforms serving over 500,000 users while improving API response times by 60% through database optimization and Redis caching implementation.`,
    body2: `What particularly draws me to ${recipientInfo.companyName} is your commitment to innovation and technological excellence. I am impressed by your company's work in building cutting-edge products that impact millions of users worldwide. My experience in building scalable applications, combined with my passion for clean code and best practices, aligns perfectly with the requirements of this position.`,
    body3: `I have consistently demonstrated my ability to work collaboratively in Agile environments, mentor junior developers, and deliver high-quality software on schedule. My technical skills are complemented by strong problem-solving abilities and effective communication skills, enabling me to bridge the gap between technical teams and stakeholders.`,
    closing: `I am enthusiastic about the possibility of bringing my technical expertise, leadership experience, and passion for innovation to ${recipientInfo.companyName}. I would welcome the opportunity to discuss how my background and skills align with your team's needs. Thank you for considering my application. I look forward to speaking with you soon.`,
  };

  // Get current date in proper format
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        minHeight: `${11 * scale}in`,
        padding: `${0.75 * scale}in ${1 * scale}in`,
      }}
    >
      {/* Your Contact Information */}
      <header className="mb-6">
        <h1 className="text-xl font-bold text-gray-900 mb-1">
          {personalInfo.fullName}
        </h1>
        <div className="text-xs text-gray-700 leading-relaxed">
          {personalInfo.address && <div>{personalInfo.address}</div>}
          {(personalInfo.city || personalInfo.state || personalInfo.zipCode) && (
            <div>
              {personalInfo.city}
              {personalInfo.city && personalInfo.state && ", "}
              {personalInfo.state} {personalInfo.zipCode}
            </div>
          )}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.email && <div>{personalInfo.email}</div>}
        </div>
      </header>

      {/* Date */}
      <div className="text-xs text-gray-700 mb-6">
        {currentDate}
      </div>

      {/* Recipient Information */}
      <div className="text-xs text-gray-700 mb-6 leading-relaxed">
        {recipientInfo.hiringManagerName && <div>{recipientInfo.hiringManagerName}</div>}
        {recipientInfo.title && <div>{recipientInfo.title}</div>}
        {recipientInfo.companyName && <div>{recipientInfo.companyName}</div>}
        {recipientInfo.companyAddress && <div>{recipientInfo.companyAddress}</div>}
        {(recipientInfo.companyCity || recipientInfo.companyState || recipientInfo.companyZipCode) && (
          <div>
            {recipientInfo.companyCity}
            {recipientInfo.companyCity && recipientInfo.companyState && ", "}
            {recipientInfo.companyState} {recipientInfo.companyZipCode}
          </div>
        )}
      </div>

      {/* Salutation */}
      <div className="text-xs text-gray-900 mb-4">
        Dear {recipientInfo.hiringManagerName || "Hiring Manager"}:
      </div>

      {/* Body - Opening Paragraph */}
      <div className="text-xs text-gray-900 mb-4 leading-relaxed text-justify">
        {content.opening}
      </div>

      {/* Body - First Main Paragraph */}
      <div className="text-xs text-gray-900 mb-4 leading-relaxed text-justify">
        {content.body1}
      </div>

      {/* Body - Second Main Paragraph */}
      <div className="text-xs text-gray-900 mb-4 leading-relaxed text-justify">
        {content.body2}
      </div>

      {/* Body - Optional Third Paragraph */}
      {content.body3 && (
        <div className="text-xs text-gray-900 mb-4 leading-relaxed text-justify">
          {content.body3}
        </div>
      )}

      {/* Body - Closing Paragraph */}
      <div className="text-xs text-gray-900 mb-6 leading-relaxed text-justify">
        {content.closing}
      </div>

      {/* Signature */}
      <div className="text-xs text-gray-900">
        <div className="mb-1">Sincerely,</div>
        <div className="mt-8 font-semibold">{personalInfo.fullName}</div>
      </div>
    </div>
  );
}

export const ATSCoverLetterTemplateInfo = {
  name: "ATS-Friendly Professional",
  description: "Clean, professional cover letter format optimized for Applicant Tracking Systems. Uses standard business letter formatting with clear section breaks.",
  features: [
    "Standard business letter format",
    "ATS-compatible plain text formatting",
    "Professional typography with clear hierarchy",
    "Proper spacing and margins for readability",
    "Clean structure with no graphics or special formatting",
    "Customizable content blocks for personalization"
  ],
  recommended: true,
  category: "Professional"
};
