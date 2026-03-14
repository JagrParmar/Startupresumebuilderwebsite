import { useState } from "react";
import { FileText, Wand2, Download, Eye, Copy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import DashboardLayout from "../components/DashboardLayout";

export default function CoverLetter() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
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
                      defaultValue="Senior Software Engineer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Google"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      defaultValue="Google"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Hiring Manager Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Jane Smith"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Job Description</label>
                    <textarea
                      rows={6}
                      placeholder="Paste the job description here..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      defaultValue="We are looking for a Senior Software Engineer to join our team..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Key Skills</label>
                    <input
                      type="text"
                      placeholder="e.g., React, Python, AWS"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      defaultValue="React, TypeScript, Node.js, AWS"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Tone</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option>Professional</option>
                      <option>Enthusiastic</option>
                      <option>Formal</option>
                      <option>Conversational</option>
                    </select>
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
                    <div className="prose prose-sm max-w-none">
                      <div className="bg-white p-6 border rounded-lg">
                        <p className="text-sm text-gray-600 mb-4">John Doe<br />
                        john.doe@email.com<br />
                        (555) 123-4567</p>
                        
                        <p className="text-sm text-gray-600 mb-4">
                          {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <p className="text-sm text-gray-600 mb-6">
                          Hiring Manager<br />
                          Google<br />
                          Mountain View, CA
                        </p>

                        <p className="text-sm mb-4">Dear Hiring Manager,</p>

                        <p className="text-sm mb-4">
                          I am writing to express my strong interest in the Senior Software Engineer position at Google. With extensive experience in React, TypeScript, Node.js, and AWS, I am confident that my technical expertise and passion for innovation make me an ideal candidate for this role.
                        </p>

                        <p className="text-sm mb-4">
                          Throughout my career, I have consistently delivered high-quality software solutions that drive business value. My proficiency in modern web technologies, combined with my ability to work collaboratively in fast-paced environments, has enabled me to contribute meaningfully to every team I've joined. I am particularly excited about the opportunity to work at Google, a company renowned for its commitment to technological excellence and innovation.
                        </p>

                        <p className="text-sm mb-4">
                          My experience with React and TypeScript has allowed me to build scalable, maintainable applications that prioritize user experience and performance. Additionally, my familiarity with Node.js and AWS demonstrates my full-stack capabilities and understanding of cloud infrastructure—skills that I understand are crucial for this position.
                        </p>

                        <p className="text-sm mb-4">
                          I am eager to bring my technical skills, problem-solving abilities, and enthusiasm to the Google team. Thank you for considering my application. I look forward to the opportunity to discuss how my experience and skills align with your needs.
                        </p>

                        <p className="text-sm mb-4">
                          Sincerely,<br />
                          John Doe
                        </p>
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
    </DashboardLayout>
  );
}