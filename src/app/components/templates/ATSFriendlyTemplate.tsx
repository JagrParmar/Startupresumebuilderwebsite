interface ATSFriendlyTemplateProps {
  scale?: number;
}

export default function ATSFriendlyTemplate({ scale = 1 }: ATSFriendlyTemplateProps) {
  return (
    <div 
      className="bg-white shadow-lg mx-auto" 
      style={{ 
        width: `${8.5 * scale}in`, 
        height: `${11 * scale}in`,
        padding: `${0.5 * scale}in ${0.75 * scale}in`,
      }}
    >
      {/* Contact Information */}
      <header className="mb-3">
        <h1 className="text-3xl font-bold text-gray-900 mb-1.5">MICHAEL CHEN</h1>
        <div className="text-xs text-gray-700 flex items-center gap-3 flex-wrap">
          <span>Austin, TX 78701</span>
          <span>•</span>
          <span>(512) 555-0123</span>
          <span>•</span>
          <span>michael.chen@email.com</span>
          <span>•</span>
          <span>github.com/michaelchen</span>
          <span>•</span>
          <span>linkedin.com/in/michaelchen</span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-3">
        <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-xs text-gray-800 leading-relaxed">
          Full-stack Software Engineer with 5+ years of experience building scalable web applications and RESTful APIs. 
          Proficient in JavaScript/TypeScript, React, Node.js, and cloud technologies. Strong problem-solver with expertise 
          in system design, database optimization, and agile development. Passionate about writing clean, maintainable code 
          and delivering exceptional user experiences.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-3">
        <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
          PROFESSIONAL EXPERIENCE
        </h2>
        
        {/* Job 1 */}
        <div className="mb-2.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-sm font-bold text-gray-900">Senior Software Engineer</h3>
            <span className="text-xs text-gray-700">January 2022 - Present</span>
          </div>
          <div className="text-xs font-semibold text-gray-700 mb-1.5">CloudTech Solutions | Austin, TX</div>
          <ul className="list-disc ml-4 text-xs text-gray-800 space-y-0.5">
            <li>Architected and developed microservices-based platform using Node.js, Express, and PostgreSQL serving 500K+ users</li>
            <li>Led team of 4 engineers to deliver new features, reducing sprint cycle time by 30% through improved workflows</li>
            <li>Optimized database queries and implemented Redis caching, improving API response times by 60%</li>
            <li>Implemented CI/CD pipeline using GitHub Actions and Docker, reducing deployment time from 2 hours to 15 minutes</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-2.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-sm font-bold text-gray-900">Software Engineer</h3>
            <span className="text-xs text-gray-700">March 2020 - December 2021</span>
          </div>
          <div className="text-xs font-semibold text-gray-700 mb-1.5">DataFlow Inc. | San Francisco, CA</div>
          <ul className="list-disc ml-4 text-xs text-gray-800 space-y-0.5">
            <li>Built responsive web applications using React, TypeScript, and Redux with 95%+ unit test coverage</li>
            <li>Developed RESTful APIs and GraphQL endpoints handling 5M+ requests daily with 99.9% uptime</li>
            <li>Integrated third-party services including Stripe, Auth0, and SendGrid for payment processing and authentication</li>
          </ul>
        </div>

        {/* Job 3 */}
        <div className="mb-2.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-sm font-bold text-gray-900">Junior Software Developer</h3>
            <span className="text-xs text-gray-700">June 2018 - February 2020</span>
          </div>
          <div className="text-xs font-semibold text-gray-700 mb-1.5">InnovateLabs | Seattle, WA</div>
          <ul className="list-disc ml-4 text-xs text-gray-800 space-y-0.5">
            <li>Developed and maintained frontend components using React and CSS3, improving user engagement by 25%</li>
            <li>Built automated test suites with Jest and React Testing Library, catching bugs before production</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-3">
        <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
          PROJECTS
        </h2>
        
        <div className="mb-1.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-sm font-bold text-gray-900">E-Commerce Platform | React, Node.js, MongoDB, Stripe</h3>
            <span className="text-xs text-gray-700">2023</span>
          </div>
          <ul className="list-disc ml-4 text-xs text-gray-800 space-y-0.5">
            <li>Built full-stack e-commerce application with user authentication, shopping cart, and payment processing</li>
          </ul>
        </div>

        <div className="mb-1.5">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-sm font-bold text-gray-900">Task Management App | TypeScript, Next.js, Prisma, PostgreSQL</h3>
            <span className="text-xs text-gray-700">2022</span>
          </div>
          <ul className="list-disc ml-4 text-xs text-gray-800 space-y-0.5">
            <li>Developed collaborative task management tool with drag-and-drop interface and real-time collaboration</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-3">
        <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
          EDUCATION
        </h2>
        <div className="flex justify-between items-baseline mb-0.5">
          <h3 className="text-sm font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
          <span className="text-xs text-gray-700">May 2018</span>
        </div>
        <div className="text-xs text-gray-700">University of Texas at Austin | Austin, TX | GPA: 3.8/4.0</div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-sm font-bold text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5 mb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="text-xs text-gray-800 leading-relaxed">
          <p className="mb-1">
            <span className="font-semibold">Languages:</span> JavaScript, TypeScript, Python, Java, HTML5, CSS3, SQL
          </p>
          <p className="mb-1">
            <span className="font-semibold">Databases:</span> PostgreSQL, MongoDB, MySQL, Redis
          </p>
          <p>
            <span className="font-semibold">Technologies:</span> React, Node.js, Express.js, Next.js, Redux, AWS, Docker, Git, GraphQL, Jest
          </p>
        </div>
      </section>
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