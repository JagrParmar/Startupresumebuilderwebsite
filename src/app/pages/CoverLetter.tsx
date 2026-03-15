import { useState } from "react";
import { FileText, Wand2, Download, Eye, Copy, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../components/ui/dialog";
import DashboardLayout from "../components/DashboardLayout";
import ATSCoverLetterTemplate from "../components/templates/ATSCoverLetterTemplate";

export default function CoverLetter() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "Senior Software Engineer",
    companyName: "Google",
    hiringManagerName: "",
    jobDescription: "We are looking for a Senior Software Engineer to join our team...",
    skills: "React, TypeScript, Node.js, AWS",
    tone: "Professional",
    yourName: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "(512) 555-0123",
    address: "123 Main Street",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
  });

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout>
      {/* Page Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Create Cover Letter
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Generate a professional, AI-powered cover letter tailored to your job application
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-purple-600" />
                    Cover Letter Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Senior Software Engineer"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Google"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Hiring Manager Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Jane Smith"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.hiringManagerName}
                      onChange={(e) => handleInputChange("hiringManagerName", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Job Description</label>
                    <textarea
                      rows={6}
                      placeholder="Paste the job description here..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      value={formData.jobDescription}
                      onChange={(e) => handleInputChange("jobDescription", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Key Skills</label>
                    <input
                      type="text"
                      placeholder="e.g., React, Python, AWS"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Tone</label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.tone}
                      onChange={(e) => handleInputChange("tone", e.target.value)}
                    >
                      <option>Professional</option>
                      <option>Enthusiastic</option>
                      <option>Formal</option>
                      <option>Conversational</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Michael Chen"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.yourName}
                      onChange={(e) => handleInputChange("yourName", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="e.g., michael.chen@email.com"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="e.g., (512) 555-0123"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Address</label>
                    <input
                      type="text"
                      placeholder="e.g., 123 Main Street"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">City</label>
                    <input
                      type="text"
                      placeholder="e.g., Austin"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">State</label>
                    <input
                      type="text"
                      placeholder="e.g., TX"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Zip Code</label>
                    <input
                      type="text"
                      placeholder="e.g., 78701"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    />
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12"
                    onClick={handleGenerate}
                    disabled={generating}
                  >
                    {generating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate Cover Letter
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Preview/Output */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      Preview
                    </CardTitle>
                    {generated && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setShowFullPreview(true)}>
                          <Eye className="w-4 h-4 mr-1" />
                          Preview Template
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {!generated ? (
                    <div className="h-full flex items-center justify-center py-12">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Fill in the details and click "Generate" to create your cover letter</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-4 rounded-lg flex justify-center overflow-auto max-h-[800px]">
                      <div className="transform scale-50 origin-top">
                        <ATSCoverLetterTemplate
                          data={{
                            personalInfo: {
                              fullName: formData.yourName.toUpperCase(),
                              email: formData.email,
                              phone: formData.phone,
                              address: formData.address,
                              city: formData.city,
                              state: formData.state,
                              zipCode: formData.zipCode,
                            },
                            recipientInfo: {
                              hiringManagerName: formData.hiringManagerName || undefined,
                              title: "Hiring Manager",
                              companyName: formData.companyName,
                              companyAddress: "",
                              companyCity: "",
                              companyState: "",
                              companyZipCode: "",
                            },
                            jobInfo: {
                              jobTitle: formData.jobTitle,
                              jobDescription: formData.jobDescription,
                            },
                            content: {
                              opening: `I am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.companyName}. With extensive experience in ${formData.skills}, I am confident that my technical expertise and passion for innovation make me an ideal candidate for this role.`,
                              body1: `Throughout my career, I have consistently delivered high-quality software solutions that drive business value. My proficiency in modern web technologies, combined with my ability to work collaboratively in fast-paced environments, has enabled me to contribute meaningfully to every team I've joined. I am particularly excited about the opportunity to work at ${formData.companyName}, a company renowned for its commitment to technological excellence and innovation.`,
                              body2: `My experience with React and TypeScript has allowed me to build scalable, maintainable applications that prioritize user experience and performance. Additionally, my familiarity with Node.js and AWS demonstrates my full-stack capabilities and understanding of cloud infrastructure—skills that I understand are crucial for this position.`,
                              body3: `I have consistently demonstrated my ability to work collaboratively in Agile environments, mentor junior developers, and deliver high-quality software on schedule. My technical skills are complemented by strong problem-solving abilities and effective communication skills, enabling me to bridge the gap between technical teams and stakeholders.`,
                              closing: `I am enthusiastic about the possibility of bringing my technical expertise, leadership experience, and passion for innovation to ${formData.companyName}. I would welcome the opportunity to discuss how my background and skills align with your team's needs. Thank you for considering my application. I look forward to speaking with you soon.`,
                            },
                          }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips Section */}
          {!generated && (
            <Card className="mt-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  AI-Powered Cover Letter Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex gap-3">
                    <Badge className="bg-purple-600 h-6">1</Badge>
                    <p className="text-sm">Provide detailed job description for better keyword matching</p>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-purple-600 h-6">2</Badge>
                    <p className="text-sm">List your most relevant skills for the position</p>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-purple-600 h-6">3</Badge>
                    <p className="text-sm">Choose the tone that matches the company culture</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Preview Modal */}
      <Dialog open={showFullPreview} onOpenChange={setShowFullPreview}>
        <DialogContent className="max-w-[95vw] w-[900px] max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              Cover Letter Preview
            </DialogTitle>
            <DialogDescription>
              This is a preview of the cover letter template that will be generated based on the details you provided.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-100 p-4 rounded-lg overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="flex justify-center">
              <div className="transform scale-[0.65] origin-top">
                <ATSCoverLetterTemplate
                  data={{
                    personalInfo: {
                      fullName: formData.yourName.toUpperCase(),
                      email: formData.email,
                      phone: formData.phone,
                      address: formData.address,
                      city: formData.city,
                      state: formData.state,
                      zipCode: formData.zipCode,
                    },
                    recipientInfo: {
                      hiringManagerName: formData.hiringManagerName || undefined,
                      title: "Hiring Manager",
                      companyName: formData.companyName,
                      companyAddress: "",
                      companyCity: "",
                      companyState: "",
                      companyZipCode: "",
                    },
                    jobInfo: {
                      jobTitle: formData.jobTitle,
                      jobDescription: formData.jobDescription,
                    },
                    content: {
                      opening: `I am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.companyName}. With extensive experience in ${formData.skills}, I am confident that my technical expertise and passion for innovation make me an ideal candidate for this role.`,
                      body1: `Throughout my career, I have consistently delivered high-quality software solutions that drive business value. My proficiency in modern web technologies, combined with my ability to work collaboratively in fast-paced environments, has enabled me to contribute meaningfully to every team I've joined. I am particularly excited about the opportunity to work at ${formData.companyName}, a company renowned for its commitment to technological excellence and innovation.`,
                      body2: `My experience with React and TypeScript has allowed me to build scalable, maintainable applications that prioritize user experience and performance. Additionally, my familiarity with Node.js and AWS demonstrates my full-stack capabilities and understanding of cloud infrastructure—skills that I understand are crucial for this position.`,
                      body3: `I have consistently demonstrated my ability to work collaboratively in Agile environments, mentor junior developers, and deliver high-quality software on schedule. My technical skills are complemented by strong problem-solving abilities and effective communication skills, enabling me to bridge the gap between technical teams and stakeholders.`,
                      closing: `I am enthusiastic about the possibility of bringing my technical expertise, leadership experience, and passion for innovation to ${formData.companyName}. I would welcome the opportunity to discuss how my background and skills align with your team's needs. Thank you for considering my application. I look forward to speaking with you soon.`,
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowFullPreview(false)}>
              Close
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}