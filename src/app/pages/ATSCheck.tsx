import { useState } from "react";
import { Upload, FileText, Target, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import DashboardLayout from "../components/DashboardLayout";

export default function ATSCheck() {
  const [uploadedFile, setUploadedFile] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleFileSelect = () => {
    // Simulate file selection
    setFileName("resume.pdf");
    setUploadedFile(true);
  };

  const handleAnalyze = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUploadedFile(false);
    setShowResults(false);
    setFileName("");
    setJobDescription("");
  };

  return (
    <DashboardLayout>
      {/* Page Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              ATS Score Check
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Upload your resume to get an instant ATS compatibility score and optimization tips
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        {!showResults ? (
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Check Your Resume's ATS Score
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get instant feedback on how well your resume will perform with Applicant Tracking Systems. Upload your resume and optionally add a job description for personalized insights.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Instant ATS Score</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Get a compatibility score from 0-100 to see how ATS-friendly your resume is</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Detailed Analysis</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Receive specific suggestions on formatting, structure, and content improvements</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Keyword Matching</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">See which keywords are missing and get tailored recommendations</p>
                </CardContent>
              </Card>
            </div>

            {/* Upload and Job Description Section */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 mb-8 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upload Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <Upload className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">1. Upload Your Resume</h3>
                      <p className="text-sm text-gray-600">PDF or DOCX format</p>
                    </div>
                  </div>
                  
                  <Card className="border-2 border-dashed border-purple-300 bg-white hover:border-purple-400 transition-colors">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Upload className="w-10 h-10 text-purple-600" />
                        </div>
                        <p className="text-gray-700 font-medium mb-4">
                          Drop your file here or
                        </p>
                        <Button 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mb-3"
                          onClick={handleFileSelect}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Browse Files
                        </Button>
                        {uploadedFile && fileName && (
                          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center justify-center gap-2 text-sm text-green-700">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-semibold">{fileName}</span>
                            </div>
                          </div>
                        )}
                        <p className="text-xs text-gray-500 mt-3">
                          Maximum file size: 5MB
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Job Description Input */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">2. Add Job Description</h3>
                      <p className="text-sm text-gray-600">Optional but recommended</p>
                    </div>
                  </div>

                  <Card className="border-2 border-gray-200 bg-white hover:border-purple-300 transition-colors">
                    <CardContent className="p-6">
                      <Textarea
                        placeholder="Paste the full job description here for personalized analysis...&#10;&#10;Example:&#10;We are seeking a Senior Software Engineer with 5+ years of experience in React, TypeScript, and Node.js. The ideal candidate will have strong problem-solving skills, experience with cloud technologies (AWS/Azure), and a track record of building scalable applications. Experience with agile methodologies and CI/CD pipelines is highly valued..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        rows={12}
                        className="resize-none text-sm"
                      />
                      {jobDescription && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 text-sm text-green-700">
                            <CheckCircle className="w-4 h-4" />
                            <span className="font-semibold">Job description added - analysis will be personalized</span>
                          </div>
                        </div>
                      )}
                      {!jobDescription && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-xs text-blue-800">
                            <strong>💡 Pro Tip:</strong> Adding a job description helps identify which keywords you're missing and improves recommendation accuracy.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Analyze Button - Always Visible */}
            <div className="text-center">
              <Button 
                onClick={handleAnalyze}
                disabled={!uploadedFile}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-16 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-xl rounded-xl"
              >
                <Target className="w-6 h-6 mr-3" />
                Analyze Resume
              </Button>
              <p className="text-sm text-gray-600 mt-4 font-medium">
                {uploadedFile 
                  ? `✓ Ready to analyze${jobDescription ? " with job matching" : ""}`
                  : "⚠️ Please upload a resume to continue"
                }
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Hero Score Section */}
            <div className="text-center mb-12">
              <div className="relative inline-flex items-center justify-center mb-6">
                {/* Circular Score Ring */}
                <svg className="w-64 h-64 transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                    fill="none"
                  />
                  {/* Progress circle - 87% */}
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    stroke="url(#scoreGradient)"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 110}`}
                    strokeDashoffset={`${2 * Math.PI * 110 * (1 - 0.87)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Score Number */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    87
                  </span>
                  <span className="text-2xl text-gray-400 font-medium">/100</span>
                </div>
              </div>
              <p className="text-xl text-gray-700 font-semibold">
                {jobDescription 
                  ? "Strong match with good optimization opportunities" 
                  : "Good ATS compatibility with room for improvement"}
              </p>
            </div>

            {/* Keywords Grid - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* Keywords Found */}
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-6 h-6" />
                    Keywords Found
                    <Badge className="ml-auto bg-green-600 hover:bg-green-600 text-white">12</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">React</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">TypeScript</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">JavaScript</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Node.js</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Project Management</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Team Leadership</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Agile</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Problem Solving</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Git</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">REST API</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">SQL</Badge>
                    <Badge className="bg-green-600 text-white hover:bg-green-600 text-sm py-1.5 px-3">Communication</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Missing Keywords */}
              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-rose-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <XCircle className="w-6 h-6" />
                    Missing Keywords
                    <Badge className="ml-auto bg-red-600 hover:bg-red-600 text-white">5</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-600 text-white hover:bg-red-600 text-sm py-1.5 px-3">AWS</Badge>
                    <Badge className="bg-red-600 text-white hover:bg-red-600 text-sm py-1.5 px-3">Docker</Badge>
                    <Badge className="bg-red-600 text-white hover:bg-red-600 text-sm py-1.5 px-3">Kubernetes</Badge>
                    <Badge className="bg-red-600 text-white hover:bg-red-600 text-sm py-1.5 px-3">CI/CD</Badge>
                    <Badge className="bg-red-600 text-white hover:bg-red-600 text-sm py-1.5 px-3">Microservices</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-white/60 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800">
                      <strong>💡 Quick Win:</strong> Add these keywords naturally in your experience descriptions to boost your score by 10-15 points.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section Feedback */}
            <Card className="mb-12 border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Section Feedback
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  How each section of your resume performs
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Contact Information */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-green-900">Contact Information</h4>
                        <span className="text-sm font-semibold text-green-700">Excellent</span>
                      </div>
                      <p className="text-sm text-green-800">
                        All essential contact details are present and properly formatted. Email, phone, and LinkedIn are ATS-readable.
                      </p>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-green-900">Work Experience</h4>
                        <span className="text-sm font-semibold text-green-700">Good</span>
                      </div>
                      <p className="text-sm text-green-800">
                        Strong use of action verbs and quantifiable achievements. Clear job titles and company names are properly structured.
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-yellow-900">Skills Section</h4>
                        <span className="text-sm font-semibold text-yellow-700">Needs Work</span>
                      </div>
                      <p className="text-sm text-yellow-800">
                        Missing several key technical skills mentioned in job descriptions. Consider adding cloud technologies and DevOps tools.
                      </p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-green-900">Education</h4>
                        <span className="text-sm font-semibold text-green-700">Excellent</span>
                      </div>
                      <p className="text-sm text-green-800">
                        Degree, institution, and graduation date are clearly listed. Format is ATS-friendly with no special characters.
                      </p>
                    </div>
                  </div>

                  {/* Formatting */}
                  <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-yellow-900">Overall Formatting</h4>
                        <span className="text-sm font-semibold text-yellow-700">Minor Issues</span>
                      </div>
                      <p className="text-sm text-yellow-800">
                        Detected use of tables or text boxes which may confuse ATS systems. Consider using simple bullet points and standard sections.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actionable Suggestions */}
            <Card className="mb-12 border-2 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Actionable Suggestions
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Follow these steps to improve your ATS score to 95+
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Add Missing Cloud & DevOps Keywords</h4>
                      <p className="text-sm text-gray-700">
                        Incorporate AWS, Docker, and CI/CD into your experience bullets. For example: "Deployed scalable applications using AWS and Docker, implementing CI/CD pipelines."
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Simplify Formatting for ATS Compatibility</h4>
                      <p className="text-sm text-gray-700">
                        Remove tables, text boxes, and complex columns. Use simple bullet points and standard section headers like "Work Experience" and "Education."
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Expand Your Skills Section</h4>
                      <p className="text-sm text-gray-700">
                        Add both technical skills (Kubernetes, Microservices, GraphQL) and soft skills (Stakeholder Management, Cross-functional Collaboration) relevant to your target roles.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Use Standard File Format</h4>
                      <p className="text-sm text-gray-700">
                        Save your resume as a .docx or simple PDF. Avoid PDFs with embedded images, as they may not be parsed correctly by older ATS systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Quantify Your Achievements</h4>
                      <p className="text-sm text-gray-700">
                        Add specific metrics and numbers to your accomplishments. Instead of "Improved performance," write "Improved application performance by 40%, reducing load time from 3s to 1.8s."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline"
                onClick={handleReset}
                size="lg"
                className="border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50"
              >
                <Upload className="w-5 h-5 mr-2" />
                Analyze Another Resume
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl px-8"
              >
                Optimize with ResumeAI
              </Button>
            </div>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
}